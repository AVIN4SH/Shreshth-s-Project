import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="py-20 md:py-32 bg-gradient-to-b from-background to-background/50"
      >
        <div className="container">
          <div className="mx-auto mb-16 max-w-[800px] text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions or want to learn more? We&apos;re here to help.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            {/* Main card with form and contact info */}
            <div className="rounded-3xl border bg-card shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left side - Contact form */}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-semibold mb-6">
                    Send a Message
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-lg font-medium"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="text-lg rounded-lg border-muted/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-lg font-medium"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="text-lg rounded-lg border-muted/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-lg font-medium"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[150px] text-lg rounded-lg border-muted/50 focus:border-primary"
                      />
                    </div>
                    <Button className="rounded-full bg-primary px-8 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Right side - Contact info with gradient background */}
                <div className="bg-gradient-to-br from-primary/90 to-primary/70 text-white p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">Email Us</h3>
                        <p className="text-white/80 hover:text-white transition-colors">
                          contact@ooosaathichal.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">Call Us</h3>
                        <p className="text-white/80 hover:text-white transition-colors">
                          +91 987xx xx210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium">Visit Us</h3>
                        <p className="text-white/80">
                          123 Vijay Nagar,
                          <br />
                          Indore, Madhya Pradesh
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl border bg-card/50 p-4 h-[200px] flex items-center justify-center overflow-hidden">
                      <iframe
                        src={`https://maps.google.com/maps?q=Indore&z=12&output=embed`}
                        width="100%"
                        height="100%"
                        className="rounded-xl border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
