import { connectedToDB } from '@utils/database';
import InternshipSupervisor from '@models/internshipSupervisor';

export const GET = async (req) => {

    try {
        connectedToDB();

        const supervisors = await InternshipSupervisor.find({}).sort({ createdAt: -1 });

        return new Response(JSON.stringify(supervisors), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch all supervisors", {status: 500})
    }

}