# CMS-Dashboard-

export const authConfig = {
pages: {
signIn: "/login",
},
callbacks: {
authorized({ auth, request }) {
const isLoggedIn = auth?.user;
const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
if (isOnDashboard) {
if (isLoggedIn) return true;
return false; // Redirect unauthenticated users to login page
} else if (isLoggedIn) {
return Response.redirect(new URL("/dashboard", request.nextUrl));
}
return true;
},
},
providers: [], // Add providers with an empty array for now
};

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "../libs/utility";
import { User } from "../libs/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
try {
connectToDB();

    const user = await User.findOne({
      username: credentials.username,
    });

    console.log(user, "<----diauth.js user boss");
    console.log(credentials, "<----diauth.js credentials boss");
    console.log(typeof credentials.password); // pastikan ini adalah string
    console.log(typeof user.password); // pastikan ini juga adalah string
    console.log(credentials.password.length); // pastikan panjangnya sesuai
    console.log(user.password.length); // pastikan panjangnya sesuai
    console.log(user.password, "<----diauth.js userpass boss");
    console.log(credentials.password, "<----diauth.js credentialspass boss");

    if (!user) {
      throw new Error("User not found!");
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    console.log(isPasswordCorrect, "<----diauth.js compare password boss");

    if (!isPasswordCorrect) throw new Error("Password is incorrect!");

    return user;

} catch (err) {
console.log(err);
throw new Error("Failed to login!");
}
};

export const { signIn, signOut, auth } = NextAuth({
...authConfig,
providers: [
CredentialsProvider({
async authorize(credentials) {
try {
const user = await login(credentials);
return user;
} catch (err) {
return null;
}
},
}),
],
});

import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";

export default NextAuth(authConfig).auth;

export const config = {
// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
