import { connectedToDB } from '@utils/database';
import Student from '@models/students';

export const GET = async (request) => {
    try {
        await connectedToDB();
        const changeStream = Student.watch();

        changeStream.on('change', async (change) => {

            const updatedStudents = await Student.find().sort({ createdAt: -1 });

            const jsonResponse = JSON.stringify(updatedStudents);
            const headers = {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store',
            };

            return new Response(jsonResponse, { status: 200, headers });
        });

        const initialStudents = await Student.find().sort({ createdAt: -1 });

        const jsonResponse = JSON.stringify(initialStudents);
        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
        };

        return new Response(jsonResponse, { status: 200, headers });
    } catch (error) {
        return new Response("Failed to fetch all students", { status: 500 });
    }
};
