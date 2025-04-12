"use client";

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { isValidEmail } from '@/lib/utils';
import { addDocumentWithAutoId } from '@/lib/firebase';

export function CTA() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validate email
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Add email to waitlist collection in Firestore
      const result = await addDocumentWithAutoId('waitlist', {
        email,
        joinedAt: new Date(),
      });

      if (result.success) {
        setSuccess(true);
        setEmail('');
      } else {
        setError('Failed to join waitlist. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-primary text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our waitlist today and be among the first to experience the future of autonomous property management.
          </p>

          {success ? (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-md mx-auto">
              <svg
                className="h-12 w-12 text-green-400 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
              <p>
                Thanks for joining our waitlist. We'll notify you when PropCloud.io is ready for you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={error}
                  className="flex-grow bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
                />
                <Button
                  type="submit"
                  isLoading={isLoading}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Join Waitlist
                </Button>
              </div>
              {error && <p className="mt-2 text-red-300">{error}</p>}
            </form>
          )}

          <div className="mt-8 flex items-center justify-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-white/80"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white/80">
              We respect your privacy. Your information is secure.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
