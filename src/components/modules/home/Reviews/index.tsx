"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import p1 from "../../../../assets/profile/1.jpg";
import p2 from "../../../../assets/profile/2.avif";
import p3 from "../../../../assets/profile/3.avif";
import p4 from "../../../../assets/profile/4.avif";
import p5 from "../../../../assets/profile/5.avif";
import p6 from "../../../../assets/profile/6.avif";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: p1,
    message: "Great selection of quality medicines!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: p2,
    message: "Fast delivery, great prices, and reliable service!",
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: p3,
    message: "Customer service was excellent and very helpful!",
  },
  {
    id: 4,
    name: "Emily Brown",
    image: p4,
    message: "Ordering is easy and the products are reliable.",
  },
  {
    id: 5,
    name: "Chris Wilson",
    image: p5,
    message: "Highly recommend this online pharmacy!",
  },
  {
    id: 6,
    name: "Sarah Lee",
    image: p6,
    message: "Best pharmacy for fast and trusted medicine delivery!",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Customer Reviews
      </h2>
      <Carousel className="mt-4">
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="flex justify-center w-full shrink-0"
            >
              <Card className="w-3xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <p className="mt-2 text-sm">{review.message}</p>
                  <p className="mt-1 font-semibold">- {review.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
