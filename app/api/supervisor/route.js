import { connectedToDB } from '@utils/database';
import Supervisor from '@models/internshipSupervisor';

export const GET = async (req) => {

    try {
        connectedToDB();
        const supervisors = await Supervisor.find({}).sort({ createdAt: -1 });

        return new Response(JSON.stringify(supervisors), { status: 200})
    } catch (error) {
        return new Response("Failed to fetch all supervisors", {status: 500})
    }

}