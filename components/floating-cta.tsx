"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button className="rounded-full bg-primary px-6 py-6 text-lg font-medium text-primary-foreground shadow-lg hover:bg-primary/90">
        Join Now
      </Button>
    </div>
  );
}
