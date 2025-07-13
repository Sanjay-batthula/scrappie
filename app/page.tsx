"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageCarousel } from "@/components/image-carousel"
import CountUp from "react-countup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">SCRAPPIE</h1>
            <p className="text-2xl mb-8">SELL SCRAP ONLINE TO SCRAPPIE</p>
            <div className="bg-white/90 p-8 rounded-lg max-w-md mx-auto">
              <h2 className="text-black text-2xl font-bold mb-4">SELL SCRAP ONLINE TO SCRAPPIE</h2>
              <p className="text-gray-600 mb-4">Our Service Available in 500092, 500093, 500039</p>
              <Image 
                src="/section1/hero.png" 
                alt="Scrappie Process" 
                width={400} 
                height={100} 
                className="mb-6"
              />
              <Link href="/scrap-rates">
                <Button className="btn-effect-3 bg-green-600 hover:text-green-950 rounded-full px-8 py-2">
                  <span className="text-xl relative z-10">SELL NOW</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the components remain the same */}
      {/* Features Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-blob left-0 top-0"></div>
          <div className="absolute w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-blob animation-delay-2000 right-0 bottom-0"></div>
          <div className="absolute w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-blob animation-delay-4000 left-1/2 top-1/2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "/section2/bestrates.png", title: "Best Rates", description: "We offer the most competitive prices for your scrap materials." },
            { icon: "/section2/verified.png", title: "Verified Scrap Pickup Team", description: "Our professional team is verified and trained for safe and efficient pickups." },
            { icon: "/section2/digital.png", title: "Digital Weighing Scale", description: "We use certified digital scales for accurate and transparent measurements." },
            { icon: "/section2/hassle.png", title: "Hassle-free Pickup", description: "Enjoy a seamless experience with our convenient and timely pickup service." }
          ].map((item, index) => (
            <div key={index} className="group perspective-1000 h-64">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <Card className="absolute w-full h-full [backface-visibility:hidden]">
                  <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={96}
                      height={96}
                    />
                    <h3 className="mt-6 text-xl font-semibold text-center">
                      <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                        {item.title}
                      </span>
                    </h3>
                  </CardContent>
                </Card>
                <Card className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <CardContent className="flex flex-col items-center justify-center text-center p-8 h-full">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Pickup Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center rounded-3xl shadow-lg">
            <CardContent>
              <h2 className="text-4xl font-bold mb-4">Book a Pickup Request Now</h2>
              <p className="text-gray-600 mb-8">Make a positive impact on our planet by recycling your waste items.</p>
              <Link href="/scrap-rates">
                <Button className="btn-effect-3 bg-green-600 hover:text-green-950 rounded-full px-8 py-2">
                  <span className="text-xl relative z-10">SELL NOW</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Schedule Card */}
          <div className="relative h-[400px] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <Card className="p-8 absolute inset-0 [backface-visibility:hidden]">
                <CardContent className="flex flex-col items-center text-center h-full">
                  <Image src="/section3/calendar.png" alt="Schedule" width={200} height={200} className="mb-4 flex-grow object-contain" />
                  <h3 className="text-2xl font-bold">Schedule a pickup</h3>
                </CardContent>
              </Card>
              {/* Back Side */}
              <Card className="p-8 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <CardContent className="flex flex-col items-center justify-center text-center h-full">
                  <h3 className="text-2xl font-bold mb-4">Easy Scheduling</h3>
                  <p className="text-gray-600">Book through our website or WhatsApp for hassle-free scheduling. Choose your preferred date and time for pickup.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pickup Card */}
          <div className="relative h-[400px] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <Card className="p-8 absolute inset-0 [backface-visibility:hidden]">
                <CardContent className="flex flex-col items-center text-center h-full">
                  <Image src="/section3/delivery.png" alt="Pickup" width={200} height={200} className="mb-4 flex-grow object-contain" />
                  <h3 className="text-2xl font-bold">Pickup from your Doorstep</h3>
                </CardContent>
              </Card>
              {/* Back Side */}
              <Card className="p-8 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <CardContent className="flex flex-col items-center justify-center text-center h-full">
                  <h3 className="text-2xl font-bold mb-4">Professional Team</h3>
                  <p className="text-gray-600">Our verified pickup team will arrive at your doorstep as per your chosen date and time, ensuring a smooth and reliable collection process.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Card */}
          <div className="relative h-[400px] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <Card className="p-8 absolute inset-0 [backface-visibility:hidden]">
                <CardContent className="flex flex-col items-center text-center h-full">
                  <Image src="/section3/check-mark.png" alt="Payment" width={200} height={200} className="mb-4 flex-grow object-contain" />
                  <h3 className="text-2xl font-bold">Get Paid</h3>
                </CardContent>
              </Card>
              {/* Back Side */}
              <Card className="p-8 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <CardContent className="flex flex-col items-center justify-center text-center h-full">
                  <h3 className="text-2xl font-bold mb-4">Instant Payment</h3>
                  <p className="text-gray-600">Get paid instantly through your preferred payment method with multiple payment options available for a hassle-free and secure transaction experience.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-5xl font-bold text-green-600 mb-4">
                <CountUp end={500} suffix="+" duration={2.5} enableScrollSpy />
              </h3>
              <p className="text-gray-800 font-semibold">HAPPY CUSTOMERS</p>
            </CardContent>
          </Card>
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-5xl font-bold text-green-600 mb-4">
                <CountUp end={100} suffix="%" duration={2.5} enableScrollSpy />
              </h3>
              <p className="text-gray-800 font-semibold">CUSTOMER SATISFACTION</p>
            </CardContent>
          </Card>
          <Card className="p-8 text-center">
            <CardContent>
              <h3 className="text-5xl font-bold text-green-600 mb-4">
                <CountUp end={4000} suffix="+Kg" duration={2.5} enableScrollSpy />
              </h3>
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
      <section className="py-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/landingpage/footerimg.jpeg')" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">TALK TO US</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have any questions? We are always open to talk about your business, new projects, creative opportunities and
            how we can help you.
          </p>
          <Button variant="outline" className="btn-slide-effect border-green-600 text-green-600 after:bg-green-600 hover:text-white dark:border-green-500 dark:text-green-500">
            <span className="relative z-10">GET IN TOUCH</span>
          </Button>
        </div>
      </section>
    </div>
  )
}
