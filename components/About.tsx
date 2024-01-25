import Image from "next/image";
import React from "react";
import aboutUsPicture from "../public/img/aboutUsPicture.webp";
import { Link } from "react-scroll";
import Container from "./Container";

function About() {
  return (
    <Container classname="relative bg-[#005466] ">
      <section className="pt-12 md:pt-24">
        <div
          id="about"
          className="w-full flex md:h-screen flex-col md:flex-row items-center py-16 mx-auto max-w-7xl z-50">
          <div className="m-auto sm:w-1/2 gap-8 px-2 md:px-0 pb-12  lg:pl-12 ">
            <h2 className="py-4 text-7xl text-[#ff9100]"> About Us</h2>
            <p className="  text-white ">
              Meet Luis Lozada, the heart and soul behind the EmBARKadero Social
              Club. Armed with a Veterinary Medicine degree from the University
              of Ecuador, Luis further honed his expertise with a Master&apos;s
              in Small Animal Clinical Medicine from Sao Paulo University&apos;s
              School of Veterinary Medicine in Brazil. With over 18 years of
              journeying through the intricacies of dog behavior, Luis has
              amassed more than 1,000 hours of study in Ethology, the
              fascinating study of animal behavior. His passion and knowledge
              make every pooch&apos;s stay at EmBARKadero something truly
              special!
            </p>
          </div>
          <div className=" flex md:-space-x-24 relative group mx-auto md:h-[500px] max-w-[500px]">
            <Image
              // style={{ width: "auto", height: "auto" }}
              src={aboutUsPicture}
              className="group rounded-md border-4 border-[#ff9100] z-50 relative"
              width={300}
              height={300}
              alt="img"
            />
          </div>
        </div>
      </section>
      <div className="div-with-blob-svg"></div>
    </Container>
  );
}

export default About;
