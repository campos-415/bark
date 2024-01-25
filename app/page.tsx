import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ServiceList from "@/components/ServiceList";
import { service } from "@/constant";
import Loading from "./loading";
import TermsCheckBox from "@/components/TermsCheckBox";
import About from "@/components/About";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <>
      {service ? (
        <>
          <Hero />
          <About />
          <ServiceList items={service} />
          <Faqs />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
