"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utility";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, isAdmin, isActive, address } = Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };

    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || undefined) {
        delete updateFields[key];
      }
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};
export const addProduct = async (formData) => {
  const { title, category, description, price, stock, color, size } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      category,
      description,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};
