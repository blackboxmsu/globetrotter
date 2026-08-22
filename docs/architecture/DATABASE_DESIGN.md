# GlobeTrotter — Database Design

## 1. Database

Database:

PostgreSQL

ORM:

Prisma

The database is relational and is the source of truth for application data.

---

# 2. Core Entities

The initial database should contain these primary entities:

- User
- Trip
- City
- TripStop
- Activity
- StopActivity
- Expense
- SavedDestination
- CommunityPost

Additional supporting entities may be introduced if required by the implementation.

Do not create unnecessary tables.

---

# 3. User

Purpose:

Stores registered GlobeTrotter users.

Suggested fields:

- id
- firstName
- lastName
- email
- password/authentication reference
- phone
- city
- country
- additionalInformation
- profileImage
- language
- createdAt
- updatedAt

Relationships:

User
├── Trips
├── Saved Destinations
└── Community Posts

Email should be unique.

---

# 4. Trip

Purpose:

Represents a user's complete travel plan.

Suggested fields:

- id
- userId
- name
- description
- startDate
- endDate
- budget
- coverImage
- status
- isPublic
- shareId
- createdAt
- updatedAt

Relationships:

Trip
├── User
├── TripStops
└── Expenses

Optional:

Trip
└── Public sharing information

---

# 5. City

Purpose:

Stores destinations available for searching and itinerary planning.

Suggested fields:

- id
- name
- country
- region
- description
- latitude
- longitude
- costIndex
- popularity
- image
- createdAt
- updatedAt

Cities should be reusable across multiple trips.

Do not duplicate city records for every trip.

---

# 6. TripStop

Purpose:

Represents a destination/city within a particular trip.

Suggested fields:

- id
- tripId
- cityId
- order
- startDate
- endDate
- notes
- createdAt
- updatedAt

Relationships:

TripStop
├── Trip
├── City
└── StopActivities

The `order` field controls destination ordering.

---

# 7. Activity

Purpose:

Stores activities that users can search and add to trips.

Suggested fields:

- id
- cityId
- name
- description
- category
- duration
- estimatedCost
- rating
- popularity
- image
- createdAt
- updatedAt

Examples of categories:

- Food
- Nature
- History
- Culture
- Shopping
- Adventure
- Nightlife
- Photography

Activities belong to cities.

---

# 8. StopActivity

Purpose:

Represents an activity selected for a particular trip stop.

This is a junction/entity table between:

TripStop
and
Activity

Suggested fields:

- id
- tripStopId
- activityId
- date
- startTime
- endTime
- order
- customCost
- notes
- createdAt
- updatedAt

The `order` field controls activity ordering.

Use `customCost` when the user changes the default estimated cost.

---

# 9. Expense

Purpose:

Stores trip-related expenses.

Suggested fields:

- id
- tripId
- category
- amount
- description
- date
- createdAt
- updatedAt

Categories:

- TRANSPORTATION
- ACCOMMODATION
- ACTIVITIES
- MEALS
- MISCELLANEOUS

Expenses belong to a Trip.

---

# 10. SavedDestination

Purpose:

Allows users to save destinations for later.

Suggested fields:

- id
- userId
- cityId
- createdAt

Relationships:

User
└── SavedDestination
       └── City

Prevent duplicate saves for the same user/city combination.

---

# 11. CommunityPost

Purpose:

Represents a trip published to the community.

Suggested fields:

- id
- tripId
- userId
- title
- description
- publishedAt
- createdAt
- updatedAt

A CommunityPost references a Trip.

Do not duplicate the complete trip itinerary into the community table.

The community page should retrieve the underlying public trip data.

---

# 12. Relationship Overview

User
│
├──< Trip
│      │
│      ├──< TripStop
│      │      │
│      │      ├── City
│      │      │
│      │      └──< StopActivity
│      │                │
│      │                └── Activity
│      │
│      └──< Expense
│
├──< SavedDestination >── City
│
└──< CommunityPost >── Trip

---

# 13. Trip Data Flow

Trip
↓
TripStop
↓
City

TripStop
↓
StopActivity
↓
Activity

Trip
↓
Expense

This supports:

- Multi-city trips
- Destination ordering
- Activity ordering
- Day-wise itinerary
- Budget calculation
- Calendar
- Map
- Recommendations
- Public sharing

---

# 14. Budget Calculation

Trip total cost can be derived from:

Transportation
+
Accommodation
+
Activities
+
Meals
+
Miscellaneous

The system should calculate:

- Total estimated cost
- Total budget
- Remaining budget
- Budget utilization
- Average daily cost
- Over-budget amount

Do not hardcode these values.

---

# 15. Recommendation Data

The recommendation system can use:

- User interests
- City
- Activity category
- Activity cost
- Activity duration
- Popularity
- Rating
- Existing itinerary
- Remaining budget
- Available dates

A deterministic recommendation algorithm is acceptable.

AI/LLM integration is optional and should not be required for the core application to function.

---

# 16. Database Rules

1. Use relational relationships.
2. Use foreign keys.
3. Use appropriate indexes.
4. Use unique constraints where necessary.
5. Validate data at the application layer.
6. Use database constraints where appropriate.
7. Use Prisma migrations.
8. Do not destroy existing production data unnecessarily.
9. Do not use mock data as the source of truth.
10. Seed development/demo data through Prisma seed scripts.

---

# 17. Seed Data

Create realistic development/demo data.

Suggested minimum:

Cities:
50+

Activities:
200+

The exact number may be adjusted depending on project requirements and development time.

Seed data should cover different:

- Countries
- Regions
- Cost levels
- Activity categories

This allows search, recommendations and demo flows to work without external travel APIs.

---

# 18. Search

City search should support:

- Name
- Country
- Region
- Cost index
- Popularity

Activity search should support:

- Name
- Category
- City
- Cost
- Duration
- Rating

Use database queries rather than loading the entire database into the browser.

---

# 19. Performance

Add indexes for frequently searched/filtered fields.

Potential indexes:

City:
- name
- country
- region
- popularity

Activity:
- cityId
- category
- estimatedCost

Trip:
- userId
- startDate
- status
- shareId

TripStop:
- tripId
- cityId
- order

StopActivity:
- tripStopId
- activityId
- date
- order

---

# 20. Public Sharing

Public sharing should use a unique non-sequential share identifier.

Example:

`/shared/abc123xyz`

The public page should only expose data intended for public viewing.

Private account information must never be included.

---

# 21. Copy Trip

When a user copies a public trip:

Create a new Trip belonging to the current user.

Copy:

- Trip information
- Trip stops
- Activities
- Relevant expenses/preferences

Do not copy:

- Original user's private account information
- Original ownership
- Private metadata

The copied trip becomes independently editable by the new owner.

---

# 22. Database Migration Policy

Whenever the schema changes:

1. Update `schema.prisma`.
2. Create a Prisma migration.
3. Run Prisma validation.
4. Run the application.
5. Test affected functionality.
6. Ensure existing functionality still works.

Never silently change the database structure without updating the Prisma schema.