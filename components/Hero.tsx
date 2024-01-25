import { ArrowBigRight, ArrowRight, ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import CarouselContainer from "./CarouselContainer";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Container from "./Container";

function Hero() {
  return (
    <section id="home">
      
      <CarouselContainer />
      <div className="div-with-wave-svg "></div>
    </section>
  );
}

export default Hero;
