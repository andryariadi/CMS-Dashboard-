"use server";

import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utility";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  const { username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData);

  try {
    connectToDB();
    // if (!username || !email || !password) {
    //   throw new Error("Please fill in all fields!");
    // }

    // if (password.length < 6) {
    //   throw new Error("Password must be at least 6 characters long!");
    // }

    // const existingUser = await User.findOne({ email });

    // if (existingUser) {
    //   throw new Error("User already exists!");
    // }

    // if (phone && phone.length !== 10) {
    //   throw new Error("Phone number must be 10 digits long!");
    // }

    // if (address && address.length < 10) {
    //   throw new Error("Address must be at least 10 characters long!");
    // }

    // if (isAdmin === "false" && address) {
    //   throw new Error("User cannot have an address if not admin!");
    // }

    // if (isActive === "false" && phone) {
    //   throw new Error("User cannot have a phone number if not active!");
    // }

    const newUser = new User({
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
