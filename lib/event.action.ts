"use server";

import { IEvent } from "@/database/event.model";
import { Event } from "@/database";
import { connectToDatabase } from "./mongodb";

export const getSimilarEventsBySlug = async (slug: string): Promise<IEvent[]> => {
  try {
    await connectToDatabase();

    const event = await Event.findOne({ slug });
    if (!event) return [];

    const similar = await Event.find({
      _id: { $ne: event._id, tags: { $in: event.tags } },
    }).lean();
    return JSON.parse(JSON.stringify(similar));
  } catch {
    return [];
  }
};