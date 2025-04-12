"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">PropCloud.io</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-primary">
              How It Works
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-primary">
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Join Waitlist</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#faq"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button className="w-full">Join Waitlist</Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
