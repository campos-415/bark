"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import { imagesLink } from "@/constant";
import Autoplay from "embla-carousel-autoplay";

function CarouselContainer() {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <div className="pt-24 md:pt-0 h-[100dvh] flex flex-row items-center justify-center rounded-lg text-center">
      <Container classname="px-8 sm:px-0 pb-12 md:pb-0 ">
        <div className=" py-8">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-[#ff9100] font-extrabold">EmBARKadero</h1>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-medium text-black dark:text-white">
          Where Every Day is a Dog Day!
          </h2>
        </div>
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {imagesLink.map((container, id) => (
              <>
                <CarouselItem key={id}>
                  <div
                    style={{ backgroundImage: `${container?.url}` }}
                    className="rounded-lg aspect-square md:aspect-[3.4/1] md:mx-[40px] overflow-hidden md:bg-contain md:bg-no-repeat bg-center bg-cover w-full ">
                    {" "}
                    <div className="h-full flex flex-col justify-center items-center text-center ">
                      <div className="font-bold text-3xl sm:text-5xl lg-text-6xl sm:max-w-xl max-w-xs  text-white dark:text-white bg-secondary/60 p-4 rounded-lg">
                        {container.containerName}
                        <Button className="w-full py-6 text-xl">
                          {container.buttonContent}
                          <ArrowRight className="w-6 h-6 " />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
}

export default CarouselContainer;
