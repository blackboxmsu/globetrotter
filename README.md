# 🌍 GlobeTrotter

**Personalized multi-city travel planning platform**

GlobeTrotter lets you design complete multi-city trips in one place — discover destinations & activities, build day-by-day itineraries, track budgets, visualize timelines, and share plans with the community.

---

## ✨ Features

### Core (P0)
- **Authentication** — Secure register / login with Auth.js
- **Dashboard** — Upcoming trips, recent trips, popular destinations, quick actions
- **Create & Manage Trips** — Multi-city trips with dates, description, cover image & status
- **City & Activity Search** — Filter by country, region, cost, popularity, category, duration
- **Itinerary Builder** — Add stops, reorder cities, assign activities with times & custom costs
- **Budget Tracking** — Cost breakdown (Transport, Stay, Activities, Meals, Misc) + remaining budget
- **Calendar / Timeline** — Day-wise view of the full itinerary
- **Public Sharing** — Shareable read-only links + copy public trips to your account

### Coming / High-value (P1)
- Smart activity recommendations
- Itinerary optimization
- Interactive maps
- Community feed of public trips

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Next.js 16 (App Router) + React 19  |
| Language     | TypeScript                          |
| Styling      | Tailwind CSS v4 + Lucide icons      |
| Database     | PostgreSQL                          |
| ORM          | Prisma 7                            |
| Auth         | Auth.js (NextAuth v5)               |
| Compiler     | React Compiler                      |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL database

### 1. Clone the repo
```bash
git clone https://github.com/ChiragVasava/globetrotter.git
cd globetrotter
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment variables
Copy the example file and fill in your values:
```bash
cp .env.example .env
```

```env
DATABASE_URL="postgresql://user:password@localhost:5432/globetrotter?schema=public"
AUTH_SECRET="your-auth-secret-here"   # generate with: npx auth secret
```

### 4. Database setup
```bash
npx prisma migrate dev
npx prisma db seed   # optional – loads demo cities & activities
```

### 5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
globetrotter/
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable UI components
├── lib/                  # Utilities, services, Prisma client
├── prisma/
│   └── schema.prisma     # Database schema
├── docs/
│   ├── architecture/     # ARCHITECTURE.md, DATABASE_DESIGN.md, PROJECT_RULES.md
│   ├── design-reference/ # UI/UX references
│   └── problem-statement/
├── public/
├── auth.ts               # Auth.js configuration
└── ...
```

---

## 🗄️ Core Data Model

```
User
 ├── Trip
 │    ├── TripStop → City
 │    │    └── StopActivity → Activity
 │    └── Expense
 ├── SavedDestination → City
 └── CommunityPost → Trip
```

All views (Itinerary, Budget, Calendar, Map, Public Share) derive from the same Trip data — no disconnected duplicates.

---

## 📜 Available Scripts

| Command            | Description                    |
|--------------------|--------------------------------|
| `npm run dev`      | Start development server       |
| `npm run build`    | Production build               |
| `npm run start`    | Start production server        |
| `npm run lint`     | Run ESLint                     |

---

## 📖 Documentation

Detailed docs live in the `docs/` folder:

- [Architecture](docs/architecture/ARCHITECTURE.md)
- [Database Design](docs/architecture/DATABASE_DESIGN.md)
- [Project Rules](docs/architecture/PROJECT_RULES.md)
- [Problem Statement](docs/problem-statement/GlobeTrotter.pdf)

---

## 🤝 Contributing

This is currently a personal / hackathon project. Feel free to open issues or PRs if you'd like to contribute!

---

## 📄 License

Private / All rights reserved (update if you open-source it).

---

Built with ❤️ by [Chirag Vasava](https://github.com/ChiragVasava)
```
