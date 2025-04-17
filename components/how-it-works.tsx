import Image from "next/image";
import { images } from "@/lib/image-paths";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your profile with a few simple steps. No complicated forms.",
      image: images.howItWorks.signUp,
    },
    {
      number: "02",
      title: "Join Groups",
      description:
        "Find and join communities based on your interests and hobbies.",
      image: images.howItWorks.joinGroups,
    },
    {
      number: "03",
      title: "Connect & Share",
      description:
        "Start conversations, share stories, and build meaningful relationships.",
      image: images.howItWorks.connectShare,
    },
  ];

  return (
    <section id="how-it-works" className="bg-muted py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Getting started is simple. Follow these three easy steps to begin
            your journey.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {step.number}
              </div>
              <div className="mb-6 overflow-hidden rounded-xl">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={300}
                  height={300}
                  className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
              <p className="text-lg text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
