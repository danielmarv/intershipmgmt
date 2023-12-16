import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectedToDB } from '@utils/database';
import AdminUser from "@models/adminUsers";
import bcrypt from 'bcrypt';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
        }),
    ],
    callbacks: {
        async session({ session }) {
            const admin = await AdminUser.findOne({
                username: session.user.username
            });

            session.user.id = admin._id.toString();

            return session;
        },
        async signIn({ adminUser }) {
            try {
                await connectedToDB();

                const admin = await AdminUser.findOne({
                    username: adminUser.username
                });

                if (!admin) {
                    return false;
                }
                const passwordMatch = await bcrypt.compare(adminUser.password, admin.password);

                if (!passwordMatch) {
                    return false;
                }

                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }
    }
});

export { handler as GET, handler as POST };
