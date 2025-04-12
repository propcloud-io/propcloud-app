import { Container } from '@/components/ui/container';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for team image - replace with actual image */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Team Image</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About PropCloud.io
            </h2>
            
            <p className="text-lg text-gray-600">
              PropCloud.io was founded by a team of property management experts and technology innovators who recognized the need for a truly autonomous solution in the short-term rental industry.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600">
              We're on a mission to transform property management through intelligent automation, helping hosts save time, increase revenue, and deliver exceptional guest experiences.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="text-lg text-gray-600">
              We envision a future where property management is effortless, allowing hosts to focus on growth and guest satisfaction rather than operational complexities.
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600 text-center">Properties Managed</div>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-gray-600 text-center">Average Revenue Increase</div>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-gray-600 text-center">Customer Satisfaction</div>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-600 text-center">Integration Partners</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
