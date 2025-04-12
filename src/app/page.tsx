import {
  Header,
  Hero,
  Features,
  FeatureSections,
  HowItWorks,
  About,
  FAQ,
  CTA,
  Footer
} from '@/components/landing';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FeatureSections />
      <HowItWorks />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
