import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

export const connect = async () => {
  const conn = await mongoose
  .connect(MONGODB_URI as string)
  .catch(err => console.log(err))
  console.log("Mongoose Connection Established")
  return conn
}