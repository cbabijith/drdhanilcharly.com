import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import About from "@/components/sections/about";
import Expertise from "@/components/sections/expertise";
import Services from "@/components/sections/services";
import DislocationSpotlight from "@/components/sections/dislocation-spotlight";
import Testimonials from "@/components/sections/testimonials";
import Gallery from "@/components/sections/gallery";
import BlogPreview from "@/components/sections/blog-preview";
import CtaBand from "@/components/sections/cta-band";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <Services />
      <DislocationSpotlight />
      <Testimonials />
      <Gallery />
      <BlogPreview />
      <CtaBand />
      <Contact />
    </>
  );
}
