import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Stats } from "@/components/sections/Stats";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      {/* Hero Banner Section */}
      <Hero />

      {/* Social Proof Logo Grid */}
      <TrustedBy />

      {/* Modern Services Masonry Grid */}
      <Services />

      {/* Staggered Overlapping Why Choose Us Cards */}
      <WhyChoose />

      {/* Horizontal Scroll Deliverables Section */}
      <WhatYouGet />

      {/* Core Tech Features Grid */}
      <Features />

      {/* Count-up Stat Numbers Banner */}
      <Stats />

      {/* Filterable Portfolio Grid */}
      <Portfolio />

      {/* Premium Pricing Tables */}
      <Pricing />

      {/* Rotated Sideways Text Testimonial Pillars */}
      <Testimonials />

      {/* Accordion FAQ Grid */}
      <FAQ />

      {/* Vibrant Gradient Contact Call-To-Action */}
      <CTA />
    </>
  );
}
