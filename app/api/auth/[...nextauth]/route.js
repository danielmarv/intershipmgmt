import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectedToDB } from '@utils/database';
import AdminUser from "@models/adminUsers";
import bcrypt from 'bcrypt';

export const authOptions= {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (credentials?.username || !credentials?.password) {
                    throw new Error('Invalid Credentials');
                }

                const user = await AdminUser.findUnique({
                    where: {
                        username: credentials.username
                    }
                });

                if (!user || !user?.password) {
                    throw new Error('Invalid Credentials')
                };

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isCorrectPassword) {
                    throw new Error('Invalid Credentials');
                }

                return user;
            }
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            // Custom logic to modify the session
            const admin = await AdminUser.findOne({
              username: user.username,
            });
      
            session.user.id = admin._id.toString();
      
            return session;
          },
        async signIn({ credentials }) {
            try {
                await connectedToDB();

                const admin = await AdminUser.findOne({
                    username: credentials.username
                });

                if (!admin) {
                    return false;
                }
                const passwordMatch = await bcrypt.compare(credentials.password, admin.password);

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
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
