"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import ThemeSwitch from "./ThemeSwitch";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            Ooo Saathi Chal
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="#features"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="#testimonials"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          {/* <ThemeSwitch /> */}
          <Button className="ml-4 rounded-full bg-primary text-lg font-medium text-primary-foreground hover:bg-primary/90">
            Join Now
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* <ThemeSwitch /> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container pb-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full rounded-full bg-primary text-lg font-medium text-primary-foreground hover:bg-primary/90">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
