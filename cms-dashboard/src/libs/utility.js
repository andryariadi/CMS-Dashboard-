import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    // Periksa apakah koneksi sudah terhubung
    if (mongoose.connection.readyState === 1) {
      console.log("Sudah terhubung ke basis data");
      return;
    }

    // Jika belum terhubung, buat koneksi baru
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
