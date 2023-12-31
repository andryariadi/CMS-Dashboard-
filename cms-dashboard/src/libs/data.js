import { Product, Transaction, User } from "./models";
import { connectToDB } from "./utility";

export const fetchAllTransaction = async () => {
  try {
    connectToDB();
    const transactions = await Transaction.find();
    return transactions;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch all transactions!");
  }
};
export const fetchAllUser = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch all users!");
  }
};
export const fetchUser = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
export const fetchDetailUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch detail users!");
  }
};
export const fetchAllProduct = async () => {
  try {
    connectToDB();
    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch all products!");
  }
};
export const fetchProduct = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { products, count };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchDetailProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch detail products!");
  }
};
