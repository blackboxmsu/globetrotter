import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl max-w-3xl mb-6">
        Plan your next <span className="text-primary">adventure</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        Build personalized multi-city trips with activities, budgets and timelines. The complete travel-planning system.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <Link href="/register" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Plan a Trip
        </Link>
        <Link href="/explore" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Explore Destinations
        </Link>
      </div>
    </div>
  )
}
