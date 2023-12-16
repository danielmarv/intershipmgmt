import AdminUser from '@models/adminUsers';
import { connectedToDB } from '@utils/database';
import bcrypt from 'bcrypt';

export const POST = async (req) => {

    try {
        await connectedToDB();
        const {
            username,
            password
        } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new AdminUser({
            username,
            password: hashedPassword,
        });

        await newAdmin.save();

        return new Response(JSON.stringify(newAdmin), {
            status: 201,
        });
    } catch (error) {
        return new Response("Failed to create a new Admin",(error.message || error), {
            status: 500,
        });
    }
}