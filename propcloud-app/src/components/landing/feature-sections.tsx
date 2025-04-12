import { Container } from '@/components/ui/container';

const featureSections = [
  {
    title: 'Sales Automation',
    description:
      'Maximize your bookings and revenue with our comprehensive sales automation tools.',
    features: [
      'Direct Booking Engine capabilities',
      'Lead Management System',
      'Dynamic Pricing Intelligence',
      'OTA Channel Management',
    ],
    image: '/placeholder-image.jpg',
    imageAlt: 'Sales Automation Dashboard',
    reverse: false,
  },
  {
    title: 'Operations Automation',
    description:
      'Streamline your property management operations with intelligent workflows and task management.',
    features: [
      'Cleaning Management',
      'Maintenance Coordination',
      'Quality Assurance',
      'Team Communication',
    ],
    image: '/placeholder-image.jpg',
    imageAlt: 'Operations Automation Dashboard',
    reverse: true,
  },
  {
    title: 'Communications Automation',
    description:
      'Deliver exceptional guest experiences with automated, personalized communication.',
    features: [
      'AI-Powered Messaging',
      'Automated Message Sequences',
      'Guest Support Portal',
      'Review Management',
    ],
    image: '/placeholder-image.jpg',
    imageAlt: 'Communications Automation Dashboard',
    reverse: false,
  },
];

export function FeatureSections() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Automation Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PropCloud.io offers end-to-end automation for every aspect of your property management business.
          </p>
        </div>

        <div className="space-y-24">
          {featureSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12`}
            >
              {/* Image Column */}
              <div className="lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
                  {/* Placeholder for feature image - replace with actual image */}
                  <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-400">{section.imageAlt}</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {section.title}
                </h3>
                <p className="text-lg text-gray-600">{section.description}</p>

                <ul className="space-y-3">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
