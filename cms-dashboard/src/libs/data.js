import { User } from "./models";
import { connectToDB } from "./utility";

export const fetchUser = async (q) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
