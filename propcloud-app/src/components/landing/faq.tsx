"use client";

import { useState } from 'react';
import { Container } from '@/components/ui/container';

const faqs = [
  {
    question: 'What is PropCloud.io?',
    answer:
      'PropCloud.io is an autonomous property management platform for short-term rental hosts. We automate sales, operations, and guest communications to help hosts save time and increase revenue.',
  },
  {
    question: 'How does the waitlist work?',
    answer:
      'Join our waitlist by submitting your email on our website. We\'ll notify you when we\'re ready to onboard new users, with priority access given to those who joined earliest.',
  },
  {
    question: 'What platforms does PropCloud.io integrate with?',
    answer:
      'PropCloud.io integrates with all major booking platforms including Airbnb, VRBO, Booking.com, Expedia, and more. We also offer a direct booking engine for your website.',
  },
  {
    question: 'How much does PropCloud.io cost?',
    answer:
      'We offer flexible pricing plans based on the number of properties you manage. Our plans start at $29/month per property, with discounts for larger portfolios. Detailed pricing will be available at launch.',
  },
  {
    question: 'Do I need technical knowledge to use PropCloud.io?',
    answer:
      'Not at all! PropCloud.io is designed to be user-friendly with an intuitive interface. Our onboarding process guides you through setup, and our support team is always available to help.',
  },
  {
    question: 'Can I manage my team through PropCloud.io?',
    answer:
      'Yes, PropCloud.io includes comprehensive team management features. You can add team members, assign roles and permissions, manage cleaning staff, and coordinate maintenance personnel all from one dashboard.',
  },
  {
    question: 'How does the AI messaging system work?',
    answer:
      'Our AI messaging system uses advanced natural language processing to automatically respond to guest inquiries, provide check-in instructions, answer common questions, and more. You can customize the tone and content of messages, and the system knows when to escalate to a human team member.',
  },
  {
    question: 'Is my data secure with PropCloud.io?',
    answer:
      'Absolutely. We use industry-leading security practices, including encryption for all data, secure authentication, and regular security audits. Your data privacy is our top priority.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about PropCloud.io.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
