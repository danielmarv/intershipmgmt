import { connectedToDB } from '@utils/database';
import Student from '@models/students';

export const GET = async (request) => {
    try {
        await connectedToDB();

        const students = await Student.find({});

        const jsonResponse = JSON.stringify(students);
        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
        };

        return new Response(jsonResponse, { status: 200, headers });
    } catch (error) {
        return new Response("Failed to fetch all studets", {status: 500})
    }
}