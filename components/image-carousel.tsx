"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const carouselImages = [
  {
    url: "/landingpage/pic1.avif",
    alt: "Picture 1",
  },
  {
    url: "/landingpage/pic2.jpg",
    alt: "Picture 2",
  },
  {
    url: "/landingpage/pic3.png",
    alt: "Picture 3",
  },
]

export function ImageCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[600px] w-full">
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}

