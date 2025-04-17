import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/image-paths";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container flex flex-col items-center gap-8 text-center md:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Not Retired, Just <span className="text-primary">Refired</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
            India&apos;s first social networking platform designed exclusively
            for the elderly. Connect, share, and build meaningful relationships.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90">
            Join Now
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-medium border border-black/70"
          >
            Learn More
          </Button>
        </div>
        <div className="relative mt-8 w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl border border-b-black/30">
          <Image
            src={images.hero || "/placeholder.svg"}
            alt="Seniors connecting through Ooo Saathi Chal"
            width={1200}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
