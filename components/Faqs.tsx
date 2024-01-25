import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "./Container";
import { Card, CardContent } from "../components/ui/card";
import { faqs } from "@/constant";

function Faqs() {
  return (
    <Container>
      <section id="faqs" className="relative bg-[#005466]">
        <div className="py-24">
          <div className="flex items-center justify-center relative z-50">
            <h1 className="text-3xl font-extrabold md:text-5xl lg:text-7xl text-white ">
              Our most frequent Questions!
            </h1>
          </div>
          <Card className="mt-24 rounded-lg border-2  max-w-3xl mx-auto z-50 relative ">
            <CardContent className="w-full">
              <div className=" relative  flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 z-50 ">
                <Accordion type="single" collapsible>
                  {faqs.map((question) => (
                    <AccordionItem
                      key={question.id}
                      value={`'item-'${question.id}`}>
                      <AccordionTrigger>{question.question}</AccordionTrigger>
                      <AccordionContent>{question?.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Container>
  );
}

export default Faqs;
