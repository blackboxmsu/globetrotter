import Link from "next/link"
import { Globe } from "lucide-react"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">GlobeTrotter</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2 md:space-x-4 text-sm font-medium">
            <Link href="/explore" className="text-muted-foreground hover:text-foreground transition-colors">
              Explore
            </Link>
            <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors hidden md:inline-block">
              Community
            </Link>
            <div className="h-4 w-px bg-border mx-2 hidden sm:block"></div>
            <Link href="/login" className="text-foreground hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-sm hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
