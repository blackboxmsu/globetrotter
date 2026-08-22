# GlobeTrotter — AI Development Rules

## 1. Project Boundary

This is the GlobeTrotter hackathon project.

The AI agent may freely create, modify, move and delete files required for development INSIDE the active GlobeTrotter project.

Do not access or modify unrelated files outside the active project.

Do not request broader machine access unless absolutely required.

---

# 2. Source of Truth

Use:

Functional requirements:
`docs/problem-statement/`

UI/UX:
`docs/design-reference/UI_UX_REFERENCE.md`

Visual references:
`docs/design-reference/`

Architecture:
`docs/architecture/ARCHITECTURE.md`

Database:
`docs/architecture/DATABASE_DESIGN.md`

Development rules:
`docs/architecture/PROJECT_RULES.md`

---

# 3. Source Priority

When information conflicts:

1. Official problem statement
2. UI_UX_REFERENCE.md
3. ARCHITECTURE.md
4. DATABASE_DESIGN.md
5. Existing implementation

Do not silently ignore functional requirements.

---

# 4. Technology Rules

Use the existing project stack.

Primary stack:

- Next.js
- React
- TypeScript
- React Compiler
- Tailwind CSS
- PostgreSQL
- Prisma

Use additional libraries only when they provide clear value.

Do not replace the stack unnecessarily.

---

# 5. Autonomous Development

The AI agent is expected to handle:

- Project setup
- Dependency installation
- File creation
- Implementation
- Refactoring
- Database setup
- Prisma migrations
- Seed data
- Testing
- Debugging
- Browser verification
- Build verification
- Linting
- Type checking

Do not ask the user to perform routine coding work.

If a task can safely be completed inside the project, complete it autonomously.

---

# 6. Before Coding

Before implementing a feature:

1. Inspect the current project.
2. Read relevant documentation.
3. Inspect related existing components.
4. Check existing dependencies.
5. Avoid duplicating functionality.

Do not blindly overwrite existing code.

---

# 7. After Coding

After implementing a feature:

1. Run relevant checks.
2. Run TypeScript validation.
3. Run lint where applicable.
4. Run build when appropriate.
5. Test the feature.
6. Test affected existing functionality.
7. Fix errors found.
8. Only then consider the feature complete.

---

# 8. Git Safety

Never:

- Force push
- Delete `main`
- Rewrite Git history
- Reset the repository destructively
- Remove commits without explicit instruction

Before major changes:

Check Git status.

After a completed feature:

Create a meaningful commit.

Do not push unverified broken work.

---

# 9. Secrets

NEVER commit:

- `.env`
- `.env.local`
- API keys
- Passwords
- Database credentials
- Authentication secrets
- Private tokens

Never print secret values in logs.

Use environment variables.

---

# 10. Database

PostgreSQL is the source of truth.

Prisma is the ORM.

Do not use hardcoded mock data for core functionality.

Development/demo seed data is allowed.

Do not destroy or reset important databases unless explicitly required.

---

# 11. UI

Use the supplied wireframes as low-fidelity structural references.

Do not reproduce the hand-drawn appearance.

Build a polished modern responsive travel application.

Maintain:

- Consistent design
- Reusable components
- Accessibility
- Responsive layouts
- Loading states
- Empty states
- Error states

---

# 12. Data Consistency

The itinerary is the source for:

- Budget
- Calendar
- Timeline
- Map
- Public sharing

Changing the itinerary must update dependent views.

Do not create disconnected duplicate datasets.

---

# 13. Component Reuse

Prefer reusable components.

Do not duplicate nearly identical components.

Inspect existing components before creating a new one.

---

# 14. Dependencies

Before installing a dependency:

1. Check if the project already has equivalent functionality.
2. Prefer established libraries.
3. Avoid unnecessary packages.
4. Install only what is needed.

---

# 15. Scope

When implementing a feature:

- Complete the requested feature.
- Test it.
- Fix it.
- Avoid unrelated refactoring.

Do not continuously expand the scope.

---

# 16. Feature Priority

P0:

- Authentication
- Dashboard
- Create Trip
- My Trips
- City Search
- Activity Search
- Itinerary Builder
- Budget
- Calendar
- Public Sharing
- Copy Trip

P1:

- Smart Recommendations
- Itinerary Optimization
- Map
- Community

P2:

- Admin Dashboard
- Advanced Analytics

Complete P0 before spending significant time on P2.

---

# 17. Error Handling

Never silently ignore errors.

Use:

- Clear user-facing errors
- Retry options
- Loading indicators
- Empty states

Do not expose raw server/database errors.

---

# 18. Performance

Prefer:

- Server Components where appropriate
- Minimal client-side JavaScript
- React Compiler
- Lazy loading for heavy components
- Efficient database queries
- Pagination for large datasets

Do not optimize unnecessarily before functionality works.

---

# 19. Security

Do not expose private user data.

Protect authenticated routes.

Validate user input.

Do not trust client-provided ownership information.

Always verify the current authenticated user before modifying a user's trip.

---

# 20. Hackathon Goal

The goal is a complete, polished, stable demonstration.

Prioritize:

Working functionality
>
Reliable implementation
>
Polished UX
>
Advanced features

Do not sacrifice a working core application for an experimental feature.

---

# 21. Final Rule

Do not stop at "code written".

A feature is complete only after:

Implementation
→ Verification
→ Testing
→ Error fixing
→ Final check