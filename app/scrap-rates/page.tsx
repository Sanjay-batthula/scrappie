"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

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

// Historical price data for paper (last 6 months)
const paperPriceData = [
  { month: 'Sep', price: 7.5 },
  { month: 'Oct', price: 8.0 },
  { month: 'Nov', price: 7.8 },
  { month: 'Dec', price: 8.2 },
  { month: 'Jan', price: 8.5 },
  { month: 'Feb', price: 8.0 },
]

// Historical price data for various plastic types
const plasticPriceData = [
  { month: 'Sep', HDPE: 5.0, PET: 6.5, LDPE: 4.0 },
  { month: 'Oct', HDPE: 5.2, PET: 6.8, LDPE: 4.2 },
  { month: 'Nov', HDPE: 5.5, PET: 7.0, LDPE: 4.5 },
  { month: 'Dec', HDPE: 5.8, PET: 6.5, LDPE: 4.8 },
  { month: 'Jan', HDPE: 6.0, PET: 6.2, LDPE: 5.0 },
  { month: 'Feb', HDPE: 6.2, PET: 6.0, LDPE: 5.2 },
]

// Metal prices over time
const metalPriceData = [
  { month: 'Sep', Iron: 24, Steel: 38, Aluminium: 105, Brass: 310 },
  { month: 'Oct', Iron: 25, Steel: 39, Aluminium: 108, Brass: 315 },
  { month: 'Nov', Iron: 25, Steel: 40, Aluminium: 112, Brass: 318 },
  { month: 'Dec', Iron: 26, Steel: 40, Aluminium: 115, Brass: 322 },
  { month: 'Jan', Iron: 26, Steel: 41, Aluminium: 110, Brass: 320 },
  { month: 'Feb', Iron: 26, Steel: 40, Aluminium: 110, Brass: 320 },
]

export default function ScrapRates() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/landingpage/footerimg.jpeg")' }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">SCRAP RATES</h1>
          <p className="text-xl">SELL SCRAP ONLINE TO SCRAPPIE</p>
        </div>
      </section>

      {/* Scrap Items Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Current Scrap Rates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
        </div>
      </section>

      {/* Price Charts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Price Trends</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Paper Price Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Paper Price Trends (Rs/kg)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={paperPriceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[7, 9]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#10b981" 
                    strokeWidth={2} 
                    name="Paper"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Plastic Price Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Plastic Price Trends (Rs/kg)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={plasticPriceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="HDPE" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="PET" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="LDPE" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metal Price Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Metal Price Trends (Rs/kg)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={metalPriceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="Iron" 
                  stroke="#475569" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="Steel" 
                  stroke="#64748b" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="Aluminium" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="Brass" 
                  stroke="#eab308" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  )
}