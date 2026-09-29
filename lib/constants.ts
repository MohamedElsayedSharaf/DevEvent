export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  city: string;
  country: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  isVirtual: boolean;
  price: string;
}

export const events: Event[] = [
  {
    id: "react-conf-2026",
    title: "React Conf 2026",
    slug: "react-conf-2026",
    description:
      "The official React conference bringing together core maintainers and the community to share the latest in React, Server Components, and the future of the ecosystem.",
    date: "2026-10-14",
    endDate: "2026-10-15",
    location: "Henderson, Nevada",
    city: "Henderson",
    country: "USA",
    image: "/images/event1.png",
    category: "Conference",
    tags: ["React", "JavaScript", "Frontend"],
    link: "https://conf.react.dev",
    isVirtual: false,
    price: "$450",
  },

  {
    id: "github-universe-2026",
    title: "GitHub Universe 2026",
    slug: "github-universe-2026",
    description:
      "GitHub's flagship event for developers, covering AI-assisted development, Copilot updates, DevOps workflows, and the future of open source collaboration.",
    date: "2026-10-28",
    endDate: "2026-10-29",
    location: "Moscone Center",
    city: "San Francisco",
    country: "USA",
    image: "/images/event2.png",
    category: "Conference",
    tags: ["GitHub", "AI", "DevOps", "Open Source"],
    link: "https://githubuniverse.com",
    isVirtual: false,
    price: "$999",
  },

  {
    id: "aws-reinvent-2026",
    title: "AWS re:Invent 2026",
    slug: "aws-reinvent-2026",
    description:
      "Amazon Web Services' annual conference featuring hundreds of technical sessions, hands-on labs, and keynotes on cloud infrastructure, AI, and serverless computing.",
    date: "2026-12-01",
    endDate: "2026-12-05",
    location: "The Venetian & Caesars Forum",
    city: "Las Vegas",
    country: "USA",
    image: "/images/event3.png",
    category: "Conference",
    tags: ["AWS", "Cloud", "Serverless", "AI"],
    link: "https://reinvent.awsevents.com",
    isVirtual: false,
    price: "$2,099",
  },

  {
    id: "pycon-us-2027",
    title: "PyCon US 2027",
    slug: "pycon-us-2027",
    description:
      "The largest annual gathering for the Python community, featuring talks, tutorials, sprints, and a job fair for developers of all experience levels.",
    date: "2027-05-13",
    endDate: "2027-05-21",
    location: "Long Beach Convention Center",
    city: "Long Beach",
    country: "USA",
    image: "/images/event4.png",
    category: "Conference",
    tags: ["Python", "Open Source", "Data Science"],
    link: "https://us.pycon.org",
    isVirtual: false,
    price: "$550",
  },

  {
    id: "ethglobal-sf-2026",
    title: "ETHGlobal San Francisco",
    slug: "ethglobal-sf-2026",
    description:
      "A 36-hour hackathon for builders in the Ethereum ecosystem, with workshops, mentorship from top protocol teams, and prizes for the best on-chain projects.",
    date: "2026-11-06",
    endDate: "2026-11-08",
    location: "Fort Mason Center",
    city: "San Francisco",
    country: "USA",
    image: "/images/event5.png",
    category: "Hackathon",
    tags: ["Web3", "Ethereum", "Blockchain", "Hackathon"],
    link: "https://ethglobal.com",
    isVirtual: false,
    price: "Free",
  },

  {
    id: "hacktoberfest-2026",
    title: "Hacktoberfest 2026",
    slug: "hacktoberfest-2026",
    description:
      "A month-long celebration of open source software, encouraging developers worldwide to contribute pull requests to public repositories and earn limited-edition swag.",
    date: "2026-10-01",
    endDate: "2026-10-31",
    location: "Global / Online",
    city: "Global",
    country: "Worldwide",
    image: "/images/event6.png",
    category: "Hackathon",
    tags: ["Open Source", "Git", "Community"],
    link: "https://hacktoberfest.com",
    isVirtual: true,
    price: "Free",
  },
];