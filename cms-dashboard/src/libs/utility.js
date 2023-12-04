import mongoose from "mongoose";

export const connectDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/test");
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
