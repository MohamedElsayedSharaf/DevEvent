"use client";
import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/constants";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="
        group block w-full max-w-100
        overflow-hidden rounded-2xl
        border border-white/8
        bg-[#15171c]
        text-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-(--accent)/40
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="400px"
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#15171c] via-black/10 to-transparent" />
        {/* Category */}
        <span
          className="
            absolute left-4 top-4
            rounded-full bg-black/50
            px-3 py-1
            text-xs font-medium
            backdrop-blur-md
          "
        >
          {event.category}
        </span>
        {/* Price */}
        <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          {event.price}
        </span>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{event.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/50">
          {event.description}
        </p>
        {/* Meta */}
        <div className="mt-5 flex items-center justify-between text-xs text-white/50">
          <span>
            {event.city}, {event.country}
          </span>

          <span>{event.date}</span>
        </div>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-4">
          <div className="flex gap-2">
            {event.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/6 px-2 py-1 text-[11px] text-white/50"
              >
                #{tag}
              </span>
            ))}
          </div>

          <span
            className="
              text-sm font-medium
              text-accent
              transition-transform duration-200
              group-hover:translate-x-1
            "
          >
            View →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
