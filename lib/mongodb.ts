import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend globalThis so the cache survives Next.js hot reloads.
declare global {
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = globalThis.mongoose ?? {
  conn: null,
  promise: null,
};

globalThis.mongoose = cached;

export async function connectToDatabase(): Promise<typeof mongoose> {
  // Return the existing connection if one already exists.
  if (cached.conn) {
    return cached.conn;
  }

  // Reuse an in-progress connection instead of creating another one.
  if (!cached.promise) {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }

    cached.promise = mongoose.connect(MONGODB_URI);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset the promise so a later request can retry the connection.
    cached.promise = null;
    throw error;
  }

  return cached.conn; 
}