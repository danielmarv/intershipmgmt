import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@utils/database";
import AdminUser from "@models/adminUsers";
import bcrypt from 'bcrypt';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
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
        async signIn({ credentials }) {
            try {
                await connectToDB();

                const admin = await AdminUser.findOne({
                    username: credentials.username
                });

                if (!admin) {
                    // Admin does not exist
                    return false;
                }

                // Compare the provided password with the hashed password
                const passwordMatch = await bcrypt.compare(credentials.password, admin.password);

                if (!passwordMatch) {
                    // Password does not match
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
