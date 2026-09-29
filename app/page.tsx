import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { IEvent } from "@/database/event.model";

export const instant = false;

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
const page = async() => {
  const response = await fetch(`${BASE_URL}/api/events`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await response.json();
  const events = data.events;
  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev <br /> Event you Can&apos;t Miss</h1>
      <p className="text-center mt-5">Stay updated with the latest developer events and conferences around the world.</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events && events.length > 0 && events.map((event: IEvent) => (
            <li key={event.slug}>
              <EventCard
                event={{
                  ...event,
                  category: event.category as
                    | "Conference"
                    | "Hackathon"
                    | "Meetup"
                    | "Workshop",
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page