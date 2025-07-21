import React from "react";
import HeroCarousel from "../components/Home/HeroCarousel";
import Stats from "../components/Home/Stats";
import ProductsSection from "../components/Home/ProductsSection";
import UssdBanner from "../components/Home/Ussdbanner";
import MarqueeTestimonials from "../components/Home/Testimonials";
import { Helmet } from "react-helmet-async";

function Landing() {
  return (
    <div>
      <Helmet>
        <title>
          {" "}
          Bestpoint Savings & Loans – Mobile Banking, Loans, Remittance in Ghana
        </title>
        <meta
          name="description"
          content="Access affordable loans, mobile banking via *277#, and trusted savings options with Bestpoint – Ghana’s reliable financial partner."
        />
      </Helmet>
      <HeroCarousel />
      <Stats />
      <ProductsSection />
      <UssdBanner />
      <MarqueeTestimonials />
    </div>
  );
}

export default Landing;
