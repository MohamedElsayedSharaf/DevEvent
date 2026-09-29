import mongoose, {
  HydratedDocument,
  Model,
  Schema,
} from "mongoose";

export interface IEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  endDate: string;
  location: string;
  city: string;
  country: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  isVirtual: boolean;
  price: string;
  createdAt: Date;
  updatedAt: Date;
}

export type EventDocument = HydratedDocument<IEvent>;

const nonEmptyString = {
  validator: (value: string) => value.trim().length > 0,
  message: "Field cannot be empty",
};

const eventSchema = new Schema<IEvent>(
  {
    id: {
      type: String,
      required: [true, "ID is required"],
      unique: true,
      trim: true,
      validate: nonEmptyString,
    },

    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      validate: nonEmptyString,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      validate: nonEmptyString,
    },

    date: {
      type: String,
      required: [true, "Date is required"],
      trim: true,
    },

    endDate: {
      type: String,
      required: [true, "End date is required"],
      trim: true,
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      validate: nonEmptyString,
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      validate: nonEmptyString,
    },

    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
      validate: nonEmptyString,
    },

    image: {
      type: String,
      required: [true, "Image is required"],
      trim: true,
      validate: nonEmptyString,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      validate: nonEmptyString,
    },

    tags: {
      type: [String],
      required: [true, "Tags are required"],
      validate: {
        validator: (value: string[]) =>
          value.length > 0 &&
          value.every((tag) => tag.trim().length > 0),
        message: "Tags must contain at least one non-empty value",
      },
    },

    link: {
      type: String,
      required: [true, "Event link is required"],
      trim: true,
      validate: {
        validator: (value: string) => /^https?:\/\/.+/.test(value),
        message: "Link must be a valid URL",
      },
    },

    isVirtual: {
      type: Boolean,
      required: true,
      default: false,
    },

    price: {
      type: String,
      required: [true, "Price is required"],
      trim: true,
      validate: nonEmptyString,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


eventSchema.pre("save", function (this: EventDocument) {
  // Generate a URL-friendly slug when creating an event or changing its title.
  if (this.isNew || this.isModified("title")) {
    this.slug = this.title
      .trim()
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  if (!this.slug) {
    throw new Error("Unable to generate event slug");
  }

  // Normalize dates to YYYY-MM-DD.
  const startDate = new Date(this.date);
  const endDate = new Date(this.endDate);

  if (Number.isNaN(startDate.getTime())) {
    throw new Error("Invalid event start date");
  }

  if (Number.isNaN(endDate.getTime())) {
    throw new Error("Invalid event end date");
  }

  if (endDate < startDate) {
    throw new Error("End date cannot be before start date");
  }

  this.date = this.date.slice(0, 10);
  this.endDate = this.endDate.slice(0, 10);
});

export const Event: Model<IEvent> =
  mongoose.models.Event ??
  mongoose.model<IEvent>("Event", eventSchema);