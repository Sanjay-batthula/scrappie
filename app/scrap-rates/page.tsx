import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const scrapItems = [
  { name: "Books", rate: "Rs 8/kg", icon: "/items/books.png" },
  { name: "Cardboard", rate: "Rs 6/kg", icon: "/items/cardboard.png" },
  { name: "Magazine", rate: "Rs 14/kg", icon: "/items/magazine.png" },
  { name: "Paper", rate: "Rs 8/kg", icon: "/items/paper.png" },
  { name: "Iron", rate: "Rs 26/kg", icon: "/items/iron.png" },
  { name: "Steel", rate: "Rs 40/kg", icon: "/items/steel.png" },
  { name: "Aluminium", rate: "Rs 110/kg", icon: "/items/aluminium.png" },
  { name: "Plastic", rate: "Rs 6/kg", icon: "/items/plastic.png" },
  { name: "Glass Bottle", rate: "Rs 0", icon: "/items/glass.png" },
  { name: "Brass", rate: "Rs 320/kg", icon: "/items/brass.png" },
]

export default function ScrapRates() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/scraprates/hero.png")' }}
      >
        <div className="absolute inset-0 bg-black/30" />
        {/* <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">SCRAP RATES</h1>
          <p className="text-xl">SELL SCRAP ONLINE TO SCRAPPIE</p>
        </div> */}
      </section>

      {/* Scrap Items Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {scrapItems.map((item) => (
            <Card key={item.name} className="bg-gray-100 rounded-3xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image src={item.icon || "/placeholder.svg"} alt={item.name} width={64} height={64} className="mb-4" />
                <h3 className="text-green-500 font-medium text-lg">{item.name}</h3>
                <p className="text-gray-900 font-medium my-2">{item.rate}</p>
                <Link href="/scrap-form" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
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

