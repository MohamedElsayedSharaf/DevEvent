import mongoose, {
  HydratedDocument,
  Model,
  Schema,
  Types,
} from "mongoose";

import { Event } from "./event.model";

export interface IBooking {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingDocument = HydratedDocument<IBooking>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const bookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event ID is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) => emailRegex.test(value),
        message: "Please provide a valid email address",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Event lookups are common when retrieving bookings.
bookingSchema.index({ eventId: 1 });

bookingSchema.pre("save", async function (this: BookingDocument) {
  // Make sure users cannot create a booking for a non-existent event.
  const eventExists = await Event.exists({
    _id: this.eventId,
  });

  if (!eventExists) {
    throw new Error("The referenced event does not exist");
  }

  if (!emailRegex.test(this.email.trim())) {
    throw new Error("Please provide a valid email address");
  }

  this.email = this.email.trim().toLowerCase();
});

export const Booking: Model<IBooking> =
  mongoose.models.Booking ??
  mongoose.model<IBooking>("Booking", bookingSchema);