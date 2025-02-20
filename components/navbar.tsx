import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background border-b">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Scrappie Logo" width={120} height={40} className="h-10 w-auto" />
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm font-medium hover:text-primary">
          HOME
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary">
          ABOUT
        </Link>
        <Link href="/scrap-rates" className="text-sm font-medium hover:text-primary">
          SCRAP RATES
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

