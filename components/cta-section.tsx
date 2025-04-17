import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="rounded-3xl bg-primary p-8 text-center text-primary-foreground md:p-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Connect?
          </h2>
          <p className="mx-auto mb-8 max-w-[700px] text-xl md:text-2xl">
            Join thousands of seniors across India who are discovering the joy
            of digital connection.
          </p>
          <Button className="rounded-full bg-background px-8 py-6 text-lg font-medium text-primary hover:bg-background/90">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
}
