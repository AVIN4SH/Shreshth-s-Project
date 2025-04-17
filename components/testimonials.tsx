/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { images } from "@/lib/image-paths";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "I've reconnected with old friends and made new ones. This platform has brought so much joy to my retirement years.",
      name: "Rajesh Sharma",
      age: "68",
      location: "Delhi",
      avatar: images.testimonials.user1,
    },
    {
      quote:
        "The voice messages feature is wonderful! I don't have to type, & I can hear my friends' voices which makes me feel less alone.",
      name: "Lakshmi Iyer",
      age: "72",
      location: "Bangalore",
      avatar: images.testimonials.user2,
    },
    {
      quote:
        "My grandchildren helped me set it up, and now I'm the one showing my friends how to use it. It's so simple and enjoyable.",
      name: "Mohan Patel",
      age: "65",
      location: "Mumbai",
      avatar: images.testimonials.user3,
    },
  ];

  return (
    <section id="testimonials" className="bg-muted py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from seniors who have found connection and joy through our
            platform.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-background shadow-lg">
              <CardContent className="p-6 pt-6">
                <blockquote className="mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="border-t p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
