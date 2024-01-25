import Hero from "@/components/Hero";
import ServiceList from "@/components/ServiceList";
import { service } from "@/constant";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceList items={service} />
      <Faqs />
      <Reviews />
      <Footer />
    </>
  );
}
