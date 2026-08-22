# GlobeTrotter — UI/UX Reference

## 1. Purpose

This document is the UI/UX implementation reference for the GlobeTrotter project.

The project contains low-fidelity wireframes created in Excalidraw. The following files are the visual references:

- `GlobeTrotter-Wireframes.png`
- `GlobeTrotter-Wireframes.svg`
- `GlobeTrotter-Wireframes.excalidraw`

The official GlobeTrotter problem statement is the functional requirements reference.

The wireframes define the intended:
- Information architecture
- Screen hierarchy
- Component placement
- User flow
- Content organization
- Approximate relative sizing

The wireframes are NOT the final visual design.

The final implementation must transform the wireframes into a polished, modern, production-quality responsive web application.

---

# 2. Source of Truth Priority

When implementing the application, use the following priority:

1. Official problem statement
   - Functional requirements
   - Required features
   - Required data
   - Required user flows

2. Wireframes
   - Screen structure
   - Information hierarchy
   - Component relationships
   - Approximate layout

3. Existing project architecture
   - Technical implementation
   - Reusable components
   - Design system
   - Database architecture

If the wireframe and functional requirements conflict, follow the official functional requirements while preserving the wireframe's overall UX intent.

---

# 3. Important Wireframe Interpretation Rules

The provided wireframes are LOW-FIDELITY wireframes.

Do NOT reproduce:
- Hand-drawn borders
- Rough sketch styling
- Handwritten typography
- Exact sketch dimensions
- Sketch imperfections
- Placeholder-looking UI

Instead:

- Preserve the information architecture.
- Preserve the hierarchy of information.
- Preserve the general placement and relationships of elements.
- Convert all elements into polished production UI.
- Use a consistent design system across every screen.
- Use modern typography.
- Use professional spacing.
- Use appropriate icons.
- Use responsive layouts.
- Use accessible controls.
- Use appropriate hover/focus/active states.
- Use loading, empty and error states.
- Maintain visual consistency across the entire application.

The final application should look like a professional travel product, NOT like an Excalidraw drawing.

---

# 4. Overall Product Experience

GlobeTrotter is a personalized multi-city travel planning application.

The main experience should feel like:

User
→ Login/Register
→ Dashboard
→ Create Trip
→ Select destinations
→ Select activities
→ Build itinerary
→ Manage budget
→ View calendar/timeline
→ View map
→ Optimize trip
→ Share trip
→ Community / Copy Trip

The application should make the user feel that all these parts belong to one connected travel-planning system.

Do not build screens as isolated pages.

All relevant screens must use the same underlying trip data.

For example:

Changing an activity in the itinerary should affect:
- Calendar
- Budget
- Trip summary
- Shared itinerary
- Map where applicable

---

# 5. Global Design Language

Use a modern travel-product aesthetic.

Recommended visual direction:

- Clean
- Modern
- Minimal
- Spacious
- Premium
- Friendly
- Travel-oriented
- Image-driven
- Easy to scan

Avoid:
- Excessive gradients
- Excessive animations
- Overly colorful UI
- Excessive glassmorphism
- Excessive shadows
- Cluttered dashboards
- Tiny text
- Too many cards inside cards

The interface should prioritize usability over decoration.

---

# 6. Global Layout

Authenticated pages should share a consistent application shell.

Recommended structure:

Header / Navigation
↓
Page title / contextual controls
↓
Main content
↓
Optional secondary information / actions

The header/navigation should remain consistent across authenticated screens.

Typical navigation:

- Home / Dashboard
- Explore
- My Trips
- Community
- Calendar
- Profile

Depending on screen size:

Desktop:
- Full navigation/header

Mobile:
- Compact header
- Menu / bottom navigation where appropriate

---

# 7. Global Components

Build reusable components rather than recreating UI separately for each screen.

Potential shared components:

- AppHeader
- UserAvatar
- SearchBar
- PageHeader
- Button
- Input
- Select
- DatePicker
- Modal
- Drawer
- Dropdown
- Tabs
- Card
- Badge
- TripCard
- CityCard
- ActivityCard
- EmptyState
- LoadingState
- ErrorState
- BudgetCard
- BudgetProgress
- ItineraryDay
- ActivityItem
- Calendar
- Map
- FilterBar
- SortControl
- Pagination
- Toast
- ConfirmationDialog

Components should be reusable and composable.

---

# 8. Screen 1 — Login

## Purpose

Allow existing users to authenticate.

## Wireframe Structure

The wireframe contains:

- Centered login card
- Photo / logo area
- Username field
- Password field
- Login button

## Final UI

Create a polished authentication page.

Recommended structure:

Left / background:
- Travel-related visual or brand presentation

Main authentication card:
- GlobeTrotter branding
- Welcome message
- Email/username input
- Password input
- Login button
- Registration link

## Functional Requirements

- Required field validation
- Invalid credential error
- Loading state
- Successful authentication
- Redirect to dashboard
- Link to registration

Do not overcomplicate authentication UI.

---

# 9. Screen 2 — Registration

## Purpose

Create a new GlobeTrotter user account.

## Wireframe Fields

The wireframe contains:

- Profile/photo area
- First Name
- Last Name
- Email Address
- Phone Number
- City
- Country
- Additional Information
- Register User button

## Final UI

Use a clean registration form.

Group fields logically.

Example:

Personal Information:
- First name
- Last name
- Email
- Phone

Location:
- City
- Country

Additional:
- Additional information
- Optional profile image

## Functional Requirements

- Validate fields
- Show validation errors
- Prevent invalid submissions
- Show loading state
- Create user account
- Redirect after successful registration

---

# 10. Screen 3 — Main Landing Page / Dashboard

## Purpose

The dashboard is the main hub after authentication.

## Wireframe Structure

The wireframe contains:

1. GlobeTrotter header
2. Search bar
3. Large banner/hero area
4. Top regional selections
5. Previous trips
6. Plan a trip button

## Final UI

Hero section:

- Attractive travel image
- Short headline
- Primary CTA
- Secondary exploration action

Example:

"Plan your next adventure"

"Build personalized multi-city trips with activities, budgets and timelines."

Primary:
- Plan a Trip

Secondary:
- Explore Destinations

## Destination Section

Show popular/regional destinations.

Cards can contain:

- Image
- City
- Country
- Cost index
- Popularity
- View details

## Previous Trips

Show recent trips using TripCard components.

Each card may contain:

- Cover image
- Trip name
- Destinations
- Dates
- Budget
- Status
- View button

---

# 11. Screen 4 — Create a New Trip

## Purpose

Start creating a personalized trip.

## Wireframe Structure

The wireframe contains:

- Trip planning section
- Start date
- Selected place/destination
- Start/end dates
- Suggested places/activities
- Destination/activity cards

## Final UI

Create a guided trip creation experience.

Step 1:
Trip information

- Trip name
- Description
- Start date
- End date
- Budget
- Optional cover image

Step 2:
Destinations

Allow users to:
- Search cities
- Select multiple cities
- Reorder selected cities

Step 3:
Interests/preferences

Allow selection of categories such as:

- Food
- Nature
- History
- Culture
- Shopping
- Adventure
- Nightlife
- Photography

Primary action:

"Create Trip"

After creation, navigate to the itinerary builder.

---

# 12. Screen 5 — Build Itinerary

## Purpose

This is one of the most important screens in the application.

The user builds the actual trip here.

## Wireframe Structure

The wireframe shows multiple sections.

Each section contains:

- Section information
- Date range
- Budget
- Activity/details
- Add another section

## Final UI

Use a clear day-by-day itinerary.

Example:

DAY 1
Paris

09:00
Eiffel Tower

12:30
Lunch

14:00
Louvre Museum

18:00
Seine River Cruise

DAY 2
Paris

...

## Required Interactions

Users should be able to:

- Add destination
- Remove destination
- Reorder destinations
- Add activity
- Remove activity
- Reorder activities
- Edit activity
- Change date
- Change time
- Change budget
- Add notes

Use drag-and-drop where appropriate.

## Important

The itinerary must be backed by real database data.

Do not make the itinerary a static frontend mockup.

---

# 13. Smart Itinerary / Recommendation Area

This feature can extend the wireframe's suggestion area.

Provide:

"Recommended for you"

Recommendations should consider:

- User interests
- Destination
- Available dates
- Activity duration
- Estimated cost
- Popularity
- Current itinerary

Each recommendation can show:

- Activity image
- Activity name
- Category
- Duration
- Estimated cost
- Rating/popularity
- Add button

A user should be able to add a recommendation directly to the itinerary.

---

# 14. Screen 6 — My Trips / User Trip Listing

## Purpose

Display all trips belonging to the current user.

## Wireframe Structure

The wireframe contains:

- Search
- Group/filter
- Filter
- Sort
- Ongoing trips
- Upcoming trips
- Completed trips

## Final UI

Use clear sections or tabs:

- Ongoing
- Upcoming
- Completed

Each trip card should display:

- Trip name
- Cover image
- Destination count
- Destination names
- Start date
- End date
- Budget
- Status
- View
- Edit
- Delete

Use confirmation before destructive actions.

---

# 15. Screen 7 — User Profile

## Purpose

Allow users to view and edit their profile.

## Wireframe Structure

Contains:

- Profile photo
- User details
- Edit information
- Preplanned trips
- Previous trips

## Final UI Sections

Profile header:

- Avatar
- Name
- Email
- Edit Profile button

Personal information:

- First name
- Last name
- Email
- Phone
- City
- Country

Preferences:

- Travel interests
- Language
- Saved destinations

Trips:

- Planned trips
- Previous trips

Account:

- Logout
- Delete account

---

# 16. Screen 8 — Activity / City Search

## Purpose

Allow users to discover cities and activities.

## Wireframe Structure

Contains:

- Search bar
- Group/filter controls
- Filter button
- Sort button
- Search results
- Result details

## City Search

Results may contain:

- City name
- Country
- Region
- Cost index
- Popularity
- Image
- Description

Filters:

- Country
- Region
- Cost
- Popularity

## Activity Search

Results may contain:

- Activity name
- Type/category
- Duration
- Estimated cost
- Rating
- Description
- Image

Filters:

- Activity type
- Cost
- Duration
- Rating

## Result Actions

- View details
- Add to trip
- Save destination/activity

---

# 17. Screen 9 — Itinerary View + Budget

## Purpose

Provide a complete overview of a selected trip.

This screen should be visually strong because it demonstrates the application's core value.

## Layout

Left/main area:

Day-by-day itinerary.

Right/secondary area:

Budget summary.

## Itinerary

Show:

- Date
- Destination
- Activities
- Time
- Duration
- Activity cost

## Budget

Show:

Transportation
Accommodation
Activities
Meals
Miscellaneous

Then:

Total estimated cost

Budget

Remaining amount

Average daily cost

Budget utilization percentage

## Over Budget

If:

Estimated Cost > User Budget

show a clear warning.

Example:

"Trip is ₹4,500 over budget."

Provide useful actions such as:

- Reduce activities
- Replace expensive activity
- Optimize trip

---

# 18. Budget Visualization

Use charts where useful.

Recommended:

- Donut/pie chart for category distribution
- Bar chart for daily spending
- Progress indicator for total budget

Avoid excessive charts.

The user should understand the budget within a few seconds.

---

# 19. Screen 10 — Community

## Purpose

Allow users to discover publicly shared trips.

## Wireframe Structure

The wireframe contains:

- Search
- Group/filter
- Filter
- Sort
- Community trip cards

## Trip Card

Show:

- Cover image
- Trip name
- Destinations
- Duration
- Estimated budget
- Creator
- Preview

Actions:

- View Trip
- Copy Trip

## Important

Community trips should be based on real public trip data.

Do not expose private user information.

---

# 20. Public Trip Page

When a user shares a trip, create a public URL.

Example structure:

`/shared/[shareId]`

The public page should show:

- Trip name
- Cover image
- Destinations
- Dates
- Day-by-day itinerary
- Activities
- Budget summary
- Map
- Copy Trip button

Users should be able to copy the public itinerary into their own account.

---

# 21. Screen 11 — Calendar / Timeline

## Purpose

Provide a visual chronological representation of the itinerary.

## Wireframe Structure

The wireframe contains:

- Calendar header
- Month navigation
- Days
- Trip events
- Travel/activity entries

## Final UI

Provide:

- Month view
- Optional week/day view
- Events on relevant dates
- Selected-day details

Clicking an event should show:

- Activity
- Time
- Destination
- Duration
- Cost

Users should be able to quickly edit the activity.

## Important

Calendar data must come from the same itinerary data.

Do not create a separate disconnected calendar dataset.

---

# 22. Map View

The wireframe does not explicitly define a map screen, but the final product may use a map to improve travel planning.

Show:

- Selected cities
- Destination markers
- Activity markers where available
- Route between destinations

The map should support the itinerary rather than becoming the main interface.

If an external map service is unavailable, the rest of the application must continue functioning.

---

# 23. Screen 12 — Admin Dashboard

## Status

OPTIONAL.

Only build this after all required user-facing functionality is complete.

## Possible Content

- Total users
- Total trips
- Popular destinations
- Popular activities
- Average trip budget
- Trips created over time
- User activity

Use clean analytics cards and a small number of useful charts.

Do not sacrifice core travel-planning functionality to build the admin dashboard.

---

# 24. Responsive Design

The final application must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Desktop:
- Multi-column layouts
- Side-by-side itinerary/budget
- Larger cards
- Full navigation

Tablet:
- Reduced columns
- Flexible grids

Mobile:
- Single-column layout
- Collapsible navigation
- Horizontally scrollable cards where appropriate
- Bottom navigation if useful
- Large touch targets
- No horizontal overflow

Never allow the page to break horizontally on mobile.

---

# 25. Loading States

Every asynchronous operation should have a loading state.

Examples:

- Login
- Registration
- Search
- Trip creation
- Trip loading
- Activity loading
- Saving itinerary
- Generating recommendations
- Copying trip

Prefer skeleton loaders for content-heavy sections.

---

# 26. Empty States

Create useful empty states.

Examples:

No trips:

"Your next adventure starts here."

[Plan a Trip]

No search results:

"No destinations found."

Try adjusting your search or filters.

No community trips:

"No public trips found."

---

# 27. Error States

Never silently fail.

Errors should provide:

- Clear message
- Useful recovery action
- Retry where appropriate

Example:

"Unable to load activities."

[Try Again]

Do not expose raw database errors to users.

---

# 28. Accessibility

Use:

- Semantic HTML
- Proper labels
- Keyboard navigation
- Visible focus states
- Appropriate button labels
- Accessible dialogs
- Accessible form errors
- Sufficient contrast

Images should have useful alt text.

Do not use icons without accessible labels when the icon is the only control.

---

# 29. Animation

Animations should be subtle and purposeful.

Good uses:

- Page transitions
- Card hover
- Modal opening
- Dropdowns
- Drag-and-drop feedback
- Loading transitions
- Toast notifications

Avoid:

- Constant animations
- Excessive bouncing
- Long transitions
- Distracting effects

Performance is more important than animation.

---

# 30. Data Consistency

The application should have one source of truth for trip data.

For a trip:

Trip
→ Destinations
→ Activities
→ Expenses
→ Calendar
→ Budget
→ Map
→ Public Share

When the itinerary changes, dependent views should update accordingly.

Example:

If an activity costing ₹2,000 is removed:

- Itinerary updates
- Budget total decreases by ₹2,000
- Budget chart updates
- Daily cost updates
- Calendar entry disappears
- Public itinerary reflects the change

---

# 31. Design System Consistency

Use one consistent design system throughout the application.

Keep consistent:

- Font family
- Font sizes
- Heading hierarchy
- Button styles
- Input styles
- Card styles
- Border radius
- Shadows
- Spacing
- Icons
- Colors
- Badges
- Status indicators

Do not design each screen independently.

---

# 32. Component Reuse

Prefer reusable components.

For example:

Do NOT create:

`DashboardTripCard.tsx`

`CommunityTripCard.tsx`

`ProfileTripCard.tsx`

if they are essentially the same component.

Prefer:

`TripCard.tsx`

with appropriate variants/props.

Similarly reuse:

- SearchBar
- ActivityCard
- CityCard
- Button
- Modal
- Badge
- Budget components
- Itinerary components

---

# 33. UI Quality Standard

The final implementation should feel like a real SaaS/travel application.

Before considering a screen complete, check:

- Is the hierarchy immediately understandable?
- Is the primary action obvious?
- Is there enough spacing?
- Are cards aligned?
- Are text sizes readable?
- Are buttons consistent?
- Are empty/loading/error states handled?
- Does it work on mobile?
- Does it feel connected to the rest of GlobeTrotter?

---

# 34. Wireframe Screen Mapping

The original wireframe contains the following screens:

1. Login Screen
2. Registration Screen
3. Main Landing Page
4. Create a New Trip
5. Build Itinerary
6. User Trip Listing
7. User Profile
8. Activity Search / City Search
9. Itinerary View with Budget Section
10. Community
11. Calendar View
12. Admin Panel

These screen numbers should be used when discussing the wireframe internally.

Do not use the Excalidraw element IDs as application IDs or React keys.

Excalidraw element IDs are internal drawing identifiers and are NOT part of the GlobeTrotter application's data model.

---

# 35. Excalidraw Element IDs

The `.excalidraw` file contains internal element IDs.

Example conceptually:

- Text element → internal ID
- Rectangle → internal ID
- Arrow → internal ID
- Image → internal ID

These IDs are only used by Excalidraw to identify canvas elements.

Do NOT:

- Use them as React keys
- Use them as database IDs
- Create application components named after them
- Treat them as business identifiers
- Refer to them in application code

Use the semantic screen names and content instead.

---

# 36. Implementation Rule for AI Agents

When implementing a screen:

1. Read this document.
2. Inspect the relevant wireframe image.
3. Identify the corresponding screen.
4. Preserve the wireframe's information hierarchy.
5. Check the official functional requirements.
6. Build a polished modern implementation.
7. Use existing reusable components.
8. Do not create unnecessary dependencies.
9. Do not redesign unrelated screens.
10. Do not modify unrelated functionality.
11. Test the implemented screen.
12. Fix TypeScript, lint and runtime errors.
13. Verify responsive behavior.

---

# 37. Do Not Build Everything at Once

Implement the product incrementally.

Recommended order:

Phase 1:
- Application shell
- Design system
- Authentication

Phase 2:
- Dashboard
- Create Trip
- My Trips

Phase 3:
- City Search
- Activity Search

Phase 4:
- Itinerary Builder

Phase 5:
- Budget

Phase 6:
- Calendar
- Timeline
- Map

Phase 7:
- Public Sharing
- Copy Trip

Phase 8:
- Community

Phase 9:
- Smart Recommendations / Optimization

Phase 10:
- Admin Dashboard

Phase 11:
- Final polish
- Responsive testing
- Accessibility
- Performance
- Error handling

---

# 38. Important AI Implementation Rule

Do not blindly copy the wireframe.

The wireframe is a UX specification, not a pixel-perfect final UI.

The goal is:

Wireframe structure
+
Official requirements
+
Modern design system
+
Good usability
=
Final GlobeTrotter UI

The final product should look substantially more polished than the supplied hand-drawn wireframe while preserving its intended user flow and information architecture.

---

# 39. Final Quality Goal

The evaluator should be able to understand the product without explanation.

Within a few seconds of seeing the dashboard, the evaluator should understand:

1. What GlobeTrotter does.
2. How to create a trip.
3. How to add destinations.
4. How to build an itinerary.
5. How much the trip costs.
6. How the calendar works.
7. How the trip can be shared.
8. How another user can copy it.

The product should demonstrate a complete, connected travel-planning workflow rather than a collection of unrelated screens.

---

# 40. Final Instruction to AI

When working on GlobeTrotter UI:

Treat this document as the primary UI/UX interpretation of the supplied wireframes.

Use the original PNG/SVG/Excalidraw files when visual clarification is required.

Do not reproduce the low-fidelity hand-drawn appearance.

Build a polished, responsive, accessible and production-quality travel application while preserving the wireframe's information architecture and the official problem statement's functional requirements.