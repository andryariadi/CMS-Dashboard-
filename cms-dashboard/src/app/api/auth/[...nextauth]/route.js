import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/libs/models";
import { connectToDB } from "@/libs/utility";
import bcrypt from "bcrypt";

export const authOption = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "yourname" },
        email: { label: "Email", type: "email", placeholder: "youremail@example.com" },
        password: { label: "Password", type: "password", placeholder: "*******" },
      },
      async authorize(credentials) {
        try {
          // Pastikan variabel lingkungan NEXTAUTH_URL sudah diatur
          if (!process.env.NEXTAUTH_URL) {
            throw new Error("Variabel lingkungan NEXTAUTH_URL belum diatur");
          }

          // Pastikan koneksi ke basis data terhubung
          connectToDB();

          const user = await User.findOne({
            username: credentials.username,
          });

          console.log(user, "<----diauth.js user boss");

          // Pastikan pengguna ditemukan sebelum mengakses properti
          if (!user) {
            throw new Error("User not found !");
          }

          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          // Pastikan kata sandi benar sebelum melanjutkan
          if (!isPasswordCorrect) {
            throw new Error("Wrong password !");
          }

          return {
            id: user._id.toString(),
            name: user.username,
            email: user.email,
            image: user.img,
            isAdmin: user.isAdmin,
          };
        } catch (err) {
          console.log(err);
          throw new Error("Gagal masuk");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const authHandler = NextAuth(authOption);

export { authHandler as GET, authHandler as POST };
