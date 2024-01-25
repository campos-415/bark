import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import ReviewCard from "./ui/ReviewCard";
import Container from "./Container";
import Image from "next/image";
import reviewImage from "../public/img/reviews.svg";
import { reviews } from "@/constant";
import { BsYelp } from "react-icons/bs";
import Link from "next/link";
function Reviews() {
  return (
    <Container>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium text-center text-black dark:text-white p-8 ">
        See What others are saying!
      </h1>
      <div className="flex flex-col md:flex-row  mx-auto">
        <div className="flex flex-col items-center justify-center p-2">
          <Image src={reviewImage} alt="" width={500} height={500} />
          <Link target="_blank" href="https://www.yelp.com/biz/embarkadero-social-club-san-francisco">
            <Card className="mt-6 hover:scale-105 hover:cursor-pointer hover:shadow-lg active:scale-100 select-none ">
              <CardContent className="p-4 flex items-center justify-between">
                <BsYelp className="h-6 w-6" />
                See More Reviews on Our Yelp Page
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 ">
          {reviews.map((review, i) => (
            <ReviewCard
              key={i}
              name={review.name}
              image={review.image}
              review={review.review}
              stars={review.stars}
              date={review.date}
              readMore={review.readMore}
              id={review.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Reviews;
