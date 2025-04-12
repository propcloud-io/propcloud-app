import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { isValidEmail } from '@/lib/utils';
import { addDocumentWithAutoId } from '@/lib/firebase';
import { sendEmail } from '@/lib/email'; // Import email utility

export function Hero() {
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
        // Send confirmation email
        await sendEmail({
          to: email,
          subject: 'Welcome to the PropCloud.io Waitlist!',
          body: 'Thank you for joining the waitlist. We will notify you when we launch!'
        });

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
    // Enhance the Hero section with a visually striking background and animations
    <section className="py-20 bg-gradient-to-b from-blue-50 to-gray-50 relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}></div>
      <div className="relative z-10">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Autonomous Property Management for Short-Term Rentals
              </h1>
              <p className="text-xl text-gray-600">
                Save time and increase revenue with our all-in-one platform that automates sales, operations, and guest communications.
              </p>

              {/* Waitlist Form */}
              <div className="mt-8">
                {success ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <p className="text-green-800">
                      Thanks for joining our waitlist! We'll notify you when we launch.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error}
                        className="flex-grow"
                      />
                      <Button type="submit" isLoading={isLoading}>
                        Join Waitlist
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free early access for waitlist members</span>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                {/* Placeholder for property image - replace with actual image */}
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Property Management Dashboard Image</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
