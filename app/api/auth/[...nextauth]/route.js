import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectedToDB } from "@utils/database";
import AdminUser from "@models/adminUsers";
import bcrypt from "bcrypt";

async function login(credentials){
    try {
        connectedToDB();
        const user = await AdminUser.findOne({
            username: credentials.username,
        });

        if (!user) {
            throw new Error('User not found');
        }
        const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isCorrectPassword) {
            throw new Error('Incorrect password');
        }
        return user;
    } catch (error) {
        console.log("Error while logging in.",error);
        throw new Error('Error while logging in.');
    }
}

export const authOptions ={
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    throw new Error('Failed to login.');
                }
            }
            
        }),
    ],
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user._id.toString();
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.username = token.username;
            }
            return session;
        },
    }
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
