import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);
const transactionsSchema = new mongoose.Schema(
  {
    account_id: {
      type: Number,
      required: true,
      unique: true,
    },
    transaction_count: {
      type: Number,
      required: true,
    },
    bucket_start_date: {
      type: Date,
      required: true,
    },
    bucket_end_date: {
      type: Date,
      required: true,
    },
    transactions: [],
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionsSchema);
