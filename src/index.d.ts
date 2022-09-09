import mongoose, { Mongoose } from "mongoose";

declare global {
  var mongoose: {
    promise: Promise<mongoose> | null;
    conn: Mongoose | null;
  };
}
