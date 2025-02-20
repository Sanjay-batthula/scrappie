import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">SCRAPPIE</h1>
            <p className="text-2xl mb-8">SELL SCRAP ONLINE TO SCRAPPIE</p>
            <div className="bg-white/90 p-8 rounded-lg max-w-md mx-auto">
              <h2 className="text-black text-2xl font-bold mb-4">SELL SCRAP ONLINE TO SCRAPPIE</h2>
              <p className="text-gray-600 mb-4">Our Service Available in 500092, 500093, 500039</p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <Image src="/mobile-icon.png" alt="Mobile" width={24} height={24} />
                  <span className="text-xs text-gray-600">Mobile</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/address-icon.png" alt="Address" width={24} height={24} />
                  <span className="text-xs text-gray-600">Address</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/schedule-icon.png" alt="Schedule" width={24} height={24} />
                  <span className="text-xs text-gray-600">Schedule</span>
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/sell-icon.png" alt="Sell" width={24} height={24} />
                  <span className="text-xs text-gray-600">Sell</span>
                </div>
              </div>
              <Link href="/scrap-form">
                <Button className="w-full bg-green-600 hover:bg-green-700">SELL NOW</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the components remain the same */}
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card">
            <CardContent className="flex flex-col items-center p-6">
              <Image src="/section2/bestrates.png" alt="Best Rates" width={64} height={64} />
              <h3 className="mt-4 font-semibold">Best Rates</h3>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="flex flex-col items-center p-6">
              <Image src="/section2/verified.png" alt="Verified Scrap Pickup Team" width={64} height={64} />
              <h3 className="mt-4 font-semibold">Verified Scrap Pickup Team</h3>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="flex flex-col items-center p-6">
              <Image src="/section2/digital.png" alt="Digital Weighing Scale" width={64} height={64} />
              <h3 className="mt-4 font-semibold">Digital Weighing Scale</h3>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="flex flex-col items-center p-6">
              <Image src="/section2/hassle.png" alt="Hassle free Pickup" width={64} height={64} />
              <h3 className="mt-4 font-semibold">Hassle free Pickup</h3>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Book Pickup Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center rounded-3xl shadow-lg">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4">Book a Pickup Request Now</h2>
              <p className="text-gray-600 mb-8">Make a positive impact on our planet by recycling your waste items.</p>
              <Link href="/scrap-form">
                <Button className="bg-green-600 hover:bg-green-700 rounded-full px-8 py-2">SELL NOW</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8">
            <CardContent className="flex flex-col items-center text-center">
              <Image src="/section3/calendar.png" alt="Schedule" width={64} height={64} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Schedule a pickup</h3>
              <p className="text-gray-600">Book through our website or WhatsApp for hassle-free scheduling.</p>
            </CardContent>
          </Card>
          <Card className="p-8">
            <CardContent className="flex flex-col items-center text-center">
              <Image src="/section3/delivery.png" alt="Pickup" width={64} height={64} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Pickup from your Doorstep Team</h3>
              <p className="text-gray-600">Your Pickup Request has been confirmed, and our executive will arrive at your doorstep as per your chosen date and time.</p>
            </CardContent>
          </Card>
          <Card className="p-8">
            <CardContent className="flex flex-col items-center text-center">
              <Image src="/section3/check-mark.png" alt="Payment" width={64} height={64} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Get Paid</h3>
              <p className="text-gray-600">We can provide you with multiple payment options for a hassle-free and flexible payment experience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-5xl font-bold text-green-600 mb-4">500+</h3>
              <p className="text-gray-800 font-semibold">HAPPY CUSTOMERS</p>
            </CardContent>
          </Card>
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-5xl font-bold text-green-600 mb-4">100%</h3>
              <p className="text-gray-800 font-semibold">CUSTOMER SATISFACTION</p>
            </CardContent>
          </Card>
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-5xl font-bold text-green-600 mb-4">4,000+Kg</h3>
              <p className="text-gray-800 font-semibold">TOTAL SCRAP RECYCLED</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services For Business And Household</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-600 mb-4 text-center">For Household</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    Free doorstep pickup for your scrap items
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    ISO certified digital weighing scale for accurate measurements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    Best value for your scrap items
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/services/house.png"
                    alt="Household Services"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent>
                <h3 className="text-xl font-semibold text-green-600 mb-4 text-center">For Business</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    Same day pickup available for your scrap items
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    ISO certified digital weighing scale for accurate measurements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    We provide pickup services for all types of scrap materials
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/services/office-building.png"
                    alt="Business Services"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">TALK TO US</h2>
          <p className="text-gray-600 mb-8">
            Have any questions? We are always open to talk about your business, new projects, creative opportunities and
            how we can help you.
          </p>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
            GET IN TOUCH
          </Button>
        </div>
      </section>
    </div>
  )
}

