import {
  Users,
  MessageSquare,
  Brain,
  Heart,
  Globe,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Interest-Based Groups",
      description:
        "Connect with like-minded seniors who share your passions and hobbies.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Voice-Enabled Chat",
      description:
        "Easy communication with voice messages and text-to-speech features.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI Companionship",
      description:
        "AI-powered companions to chat with anytime, providing emotional support.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Cross-Generational Connection",
      description:
        "Bridge the gap between generations by connecting with family members.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Regional Language Support",
      description:
        "Communicate in your preferred Indian language with full support.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Safe & Secure",
      description:
        "Privacy-focused platform designed with seniors' security in mind.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Features Designed for <span className="text-primary">Seniors</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform is built with accessibility and ease of use at its
            core, making digital connection simple and enjoyable.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
