import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.DATABASE_URL as string)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((err) => console.log(err));
  }

  cached.conn = await cached.promise;

  console.log("Database Connected.");

  return cached.conn;
}

export default dbConnect;
