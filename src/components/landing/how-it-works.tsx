import { Container } from '@/components/ui/container';

const steps = [
  {
    number: '01',
    title: 'Connect Your Properties',
    description:
      'Easily connect your existing property listings from Airbnb, VRBO, Booking.com, and other platforms.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Configure Automation Rules',
    description:
      'Set up your preferred automation rules for pricing, messaging, cleaning, and maintenance.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Invite Your Team',
    description:
      'Add team members, cleaners, and maintenance staff to the platform with appropriate permissions.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Let PropCloud Work For You',
    description:
      'Sit back and watch as PropCloud automates your operations, communications, and optimizes your revenue.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How PropCloud Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple onboarding process.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8`}
                >
                  {/* Step Number and Icon */}
                  <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        {step.number}
                      </div>
                      <div className="bg-primary-light/10 p-4 rounded-full">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                    } text-center`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Connection Circle */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
