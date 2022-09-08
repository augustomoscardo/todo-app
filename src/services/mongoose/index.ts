import mongoose from "mongoose";

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

async function dbConnect() {
  // if (cached.conn) return cached.conn;

  // if (!cached.promise) {
  //   cached.promise = mongoose
  //     .connect(process.env.DATABASE_URL as string, {
  //       useUnifiedTopology: true,
  //     })
  //     .then((mongoose) => {
  //       return mongoose;
  //     });
  // }

  // cached.conn = await cached.promise;

  // console.log(`Database Connected.`);

  // return cached.conn;

  const conn = await mongoose
    .connect(process.env.DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Database Connected.");

  return conn;
}

export default dbConnect;
