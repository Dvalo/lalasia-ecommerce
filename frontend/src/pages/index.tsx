import type { NextPage } from "next";
import About from "../components/About";
import Benefits from "../components/Benefits/Benefits";
import FullWidthCallout from "../components/FullWidthCallout";
import Hero from "../components/Hero";
import Page from "../components/Page";
import ProductsCarousel from "../components/Products/ProductsCarousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { homeHero } from "../mocks/heroMock";
import { popularProducts } from "../mocks/productsMock";
import { testimonials } from "../mocks/testimonialsMock";

const Home: NextPage = () => {
  return (
    <Page title="Lalasia | Furniture Store">
      <Hero
        title={homeHero.title}
        description={homeHero.description}
        image={homeHero.image}
        graphics={homeHero.graphics}
      />
      <Benefits />
      <ProductsCarousel
        eyebrow={popularProducts.eyebrow}
        title={popularProducts.title}
        description={popularProducts.description}
        slides={popularProducts.slides}
      />
      <About />
      <TestimonialsCarousel
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        description={testimonials.description}
        slides={testimonials.slides}
      />
      <FullWidthCallout
        title="Join with me to get special discount"
        ctaText="Learn More"
        ctaUrl="/"
      />
    </Page>
  );
};

export default Home;
