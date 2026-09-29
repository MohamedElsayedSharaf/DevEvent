# Event App

A full-stack event platform built with Next.js, TypeScript, and MongoDB where users can browse events and view details.

## Features
- Browse upcoming events (online, offline, hybrid)
- Dynamic event pages by slug (`/events/[slug]`)
- REST API routes for events
- MongoDB with Mongoose

## Tech Stack
Next.js (App Router), TypeScript, Tailwind CSS, MongoDB, Mongoose

## Getting Started

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
cp .env.example .env.local   # then fill in your values
npm run dev
```

Open http://localhost:3000.

## Environment Variables
| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `NEXT_PUBLIC_BASE_URL` | Base URL of the app |

## Project Structure
```
app/          # routes and API handlers
components/   # UI components
database/     # Mongoose models
lib/          # helpers (DB connection)
public/       # static assets
```

## Screenshots
Add screenshots here (`/docs/home.png`).

## License
MIT