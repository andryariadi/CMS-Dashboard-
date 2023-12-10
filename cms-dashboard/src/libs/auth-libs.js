import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export const authUserSession = async () => {
  const session = await getServerSession(authOption);
  console.log(session, "<--- session di dalam authUserSession");
  return session?.user;
};
