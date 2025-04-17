/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { images } from "@/lib/image-paths";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About <span className="text-primary">Ooo Saathi Chal</span>
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                Ooo Saathi Chal was born from a simple observation: in a
                digitally connected world, our seniors often feel left behind
                and isolated.
              </p>
              <p>
                Our mission is to reduce loneliness among the elderly, empower
                seniors to embrace digital connection, and bridge the
                generational divide in India.
              </p>
              <p>
                We've created a platform that combines the simplicity seniors
                need with the features that make social networking meaningful
                and enjoyable.
              </p>
            </div>
            <Button className="mt-8 rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <Image
              src={images.about || "/placeholder.svg"}
              alt="About Ooo Saathi Chal"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-8 text-center">
              <blockquote className="text-2xl font-medium italic text-white">
                "We&apos;re not just connecting seniors to technology; we're
                connecting them to each other."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
