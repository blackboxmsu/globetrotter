# GlobeTrotter — System Architecture

## 1. Project Overview

GlobeTrotter is a personalized multi-city travel planning web application.

The application allows users to:

- Register and authenticate
- Discover cities and activities
- Create trips
- Select multiple destinations
- Build day-by-day itineraries
- Add and reorder activities
- Track trip expenses
- Calculate budgets
- View trips on calendars/timelines
- View destinations on maps
- Share itineraries publicly
- Copy public itineraries
- Discover trips through the community
- Receive personalized activity/itinerary recommendations

The primary goal is to provide one connected travel-planning experience rather than a collection of independent pages.

---

# 2. Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Compiler
- shadcn/ui where useful
- Lucide icons
- Recharts for charts
- dnd-kit for drag-and-drop where appropriate

## Backend

Use the Next.js application backend.

Preferred mechanisms:

- Server Actions where appropriate
- Route Handlers for API-style endpoints where appropriate
- Server Components for server-side data retrieval
- Client Components only where interactivity is required

Do not introduce a separate Express backend unless there is a strong technical reason.

## Database

- PostgreSQL

## ORM

- Prisma

## Authentication

Use a mature authentication solution compatible with Next.js.

Preferred:
- Auth.js / compatible implementation

## Maps

Use a suitable map solution such as:
- Leaflet
- OpenStreetMap

The application must remain usable if map functionality is temporarily unavailable.

---

# 3. High-Level Architecture

The application follows:

Browser
↓
Next.js UI
↓
Server Actions / Route Handlers
↓
Application Services
↓
Prisma ORM
↓
PostgreSQL

Optional external services:

Next.js
├── PostgreSQL / Prisma
├── Authentication
├── Map provider
└── Image/external services where required

---

# 4. Application Layers

## Presentation Layer

Responsible for:

- Pages
- Layouts
- Components
- Forms
- Cards
- Dialogs
- Navigation
- Charts
- Calendar
- Map
- Itinerary UI

Presentation components should not contain large amounts of business logic.

---

## Application / Service Layer

Responsible for:

- Trip creation
- Trip updates
- Itinerary generation
- Budget calculations
- Recommendations
- Sharing
- Copying trips
- Search/filter logic

Business logic should be reusable and testable.

---

## Data Layer

Responsible for:

- Prisma
- Database queries
- Transactions
- Database relationships

The PostgreSQL database is the source of truth.

---

# 5. Main Application Areas

## Authentication

Routes:

- `/login`
- `/register`

Responsibilities:

- Registration
- Login
- Logout
- Session handling
- Protected routes

---

## Dashboard

Route:

- `/dashboard`

Responsibilities:

- Upcoming trips
- Recent trips
- Popular destinations
- Quick actions
- Search/exploration

---

## Trips

Routes:

- `/trips`
- `/trips/new`
- `/trips/[tripId]`

Responsibilities:

- Create trip
- View trip
- Edit trip
- Delete trip
- Manage destinations
- Manage itinerary
- Manage budget

---

## Explore

Possible routes:

- `/explore`
- `/explore/cities`
- `/explore/activities`

Responsibilities:

- City search
- Activity search
- Filtering
- Sorting
- Saving
- Adding to trip

---

## Calendar

Route:

- `/calendar`

Responsibilities:

- Visualize itinerary dates
- View activities
- Edit activities
- Navigate dates

Calendar must use the same itinerary data as the trip.

---

## Community

Route:

- `/community`

Responsibilities:

- Browse public trips
- Search public trips
- View public itineraries
- Copy trips

---

## Public Sharing

Route:

- `/shared/[shareId]`

Responsibilities:

- Public read-only itinerary
- Trip overview
- Budget
- Destinations
- Activities
- Copy Trip

Do not expose private user information.

---

## Profile

Route:

- `/profile`

Responsibilities:

- User details
- Preferences
- Saved destinations
- Previous trips
- Account controls

---

## Admin

Route:

- `/admin`

Optional.

Only implement after all required user-facing functionality is complete.

---

# 6. Core User Flow

Register/Login
↓
Dashboard
↓
Create Trip
↓
Trip Information
↓
Select Destinations
↓
Select Interests
↓
Create Trip
↓
Itinerary Builder
↓
Add Activities
↓
Reorder Activities
↓
Budget Calculation
↓
Calendar / Timeline
↓
Map
↓
Optimize Trip
↓
Share
↓
Community / Copy Trip

---

# 7. Data Flow

A Trip is the central entity.

Trip
├── Destinations / TripStops
│   ├── City
│   └── Activities
│
├── Expenses
│
├── Budget
│
└── Sharing information

Derived views:

Trip
├── Itinerary
├── Budget
├── Calendar
├── Timeline
├── Map
└── Public Share

All derived views should be based on the same underlying trip data.

---

# 8. Important Design Principle

Do not create separate disconnected data for:

- Itinerary
- Calendar
- Budget
- Map

They should all derive from the same trip/itinerary data.

Example:

If an activity costing ₹2,000 is deleted:

- Itinerary updates
- Budget decreases by ₹2,000
- Calendar event disappears
- Daily cost changes
- Public shared itinerary updates

---

# 9. Component Architecture

Use reusable components.

Examples:

- AppHeader
- Sidebar / Navigation
- SearchBar
- PageHeader
- Button
- Input
- Select
- DatePicker
- Modal
- Dialog
- Toast
- TripCard
- CityCard
- ActivityCard
- ItineraryDay
- ActivityItem
- BudgetCard
- BudgetChart
- Calendar
- Map
- FilterBar
- EmptyState
- LoadingState
- ErrorState

Do not duplicate components unnecessarily.

---

# 10. State Management

Prefer simple state management.

Use:

- Server state from Next.js / database
- React state for local UI state
- URL state for search/filter state where useful

Do not introduce a global state library unless there is a demonstrated need.

---

# 11. Performance

Priorities:

- Server Components where appropriate
- Minimal client-side JavaScript
- Lazy-load heavy components such as maps/charts when useful
- Avoid unnecessary API requests
- Avoid unnecessary re-renders
- Use React Compiler
- Optimize images
- Paginate large lists

Do not prematurely optimize.

---

# 12. Security

Never expose:

- Database credentials
- Authentication secrets
- API keys
- Private tokens

Use environment variables.

Never commit:

- `.env`
- `.env.local`
- secrets

Validate all user input.

Protect authenticated routes.

Ensure public shared trips do not expose private account information.

---

# 13. Error Handling

Every important operation must have:

- Loading state
- Success state
- Error state
- Empty state where appropriate

Do not expose raw database or server errors to users.

---

# 14. Responsive Design

Support:

- Desktop
- Laptop
- Tablet
- Mobile

The UI should not create horizontal overflow.

---

# 15. Implementation Priority

## P0 — Required

1. Application shell
2. Authentication
3. Dashboard
4. Create Trip
5. My Trips
6. City Search
7. Activity Search
8. Itinerary Builder
9. Budget
10. Calendar / Timeline
11. Public Sharing
12. Copy Trip

## P1 — High Value

13. Smart Recommendations
14. Itinerary Optimization
15. Map
16. Community

## P2 — Optional

17. Admin Dashboard
18. Advanced analytics
19. Additional integrations

Never sacrifice P0 features to implement P2 features.

---

# 16. Development Philosophy

Prefer:

Working feature > incomplete advanced feature

Reliable implementation > unnecessary complexity

Real database functionality > fake UI data

Reusable components > duplicated code

Clear architecture > clever architecture

Polished UX > excessive visual effects

Stable demo > experimental feature

---

# 17. AI Development Philosophy

The AI agent is responsible for implementation, testing and debugging.

Before implementing:

1. Inspect existing code.
2. Read relevant documentation.
3. Understand dependencies.
4. Plan the change.

After implementing:

1. Run checks.
2. Run the application where appropriate.
3. Test the feature.
4. Fix discovered problems.
5. Ensure existing functionality still works.

Do not blindly rewrite working code.