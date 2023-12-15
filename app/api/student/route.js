import { connectToDB } from '@utils/database';
import Student from '@models/students';

export const GET = async (request) => {
    try {
        await connectToDB();

        const students = await Student.find({});

        return new Response(JSON.stringify(students), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}