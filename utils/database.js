import mongoose from "mongoose";

let isConnected = false;

export const connectedToDB = async () => {
    mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log("=> MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("=> MongoDB is connected");
  } catch (error) {
    console.log("=> MongoDB connection error:", error);
  }
}
