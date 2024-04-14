import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const MONGODB_URL = process.env.CONNECTION_URL;
console.log("mongourl", MONGODB_URL);

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Failed to connect to MongoDB.");
  }
}

export default dbConnect;
