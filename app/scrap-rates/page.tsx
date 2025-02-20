import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const scrapItems = [
  { name: "Books", rate: "Rs 8/kg", icon: "/books-icon.png" },
  { name: "Cardboard", rate: "Rs 6/kg", icon: "/cardboard-icon.png" },
  { name: "Magazine", rate: "Rs 14/kg", icon: "/magazine-icon.png" },
  { name: "Paper", rate: "Rs 8/kg", icon: "/paper-icon.png" },
  { name: "Iron", rate: "Rs 26/kg", icon: "/iron-icon.png" },
  { name: "Steel", rate: "Rs 40/kg", icon: "/steel-icon.png" },
  { name: "Aluminium", rate: "Rs 110/kg", icon: "/aluminium-icon.png" },
  { name: "Plastic", rate: "Rs 6/kg", icon: "/plastic-icon.png" },
  { name: "Glass Bottle", rate: "Rs 0", icon: "/glass-icon.png" },
  { name: "Brass", rate: "Rs 320/kg", icon: "/brass-icon.png" },
]

export default function ScrapRates() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-scrappie-in-scrap-rates-2025-02-20-11_35_57-NXjF2W72tekEcRkBZpU4ervYxwnimG.png')",
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">SCRAP RATES</h1>
          <p className="text-xl">SELL SCRAP ONLINE TO SCRAPPIE</p>
        </div>
      </section>

      {/* Scrap Items Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {scrapItems.map((item) => (
            <Card key={item.name} className="bg-gray-100">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image src={item.icon || "/placeholder.svg"} alt={item.name} width={64} height={64} className="mb-4" />
                <h3 className="text-green-600 font-medium">{item.name}</h3>
                <p className="text-gray-600 my-2">{item.rate}</p>
                <Link href="/scrap-form">
                  <Button variant="secondary" className="w-full">
                    Sell Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Price Charts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Paper Price</h3>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/paper-chart.png" alt="Paper Price Chart" width={500} height={300} className="w-full" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Plastic Price</h3>
            <div className="bg-white p-4 rounded-lg shadow">
              <Image src="/plastic-chart.png" alt="Plastic Price Chart" width={500} height={300} className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

