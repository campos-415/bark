'use client'
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Avatar, AvatarFallback } from "./avatar";
import Image from "next/image";
import { AvatarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { ReviewProps } from "@/types";


function ReviewCard({ id, name, image, review, stars, date, readMore }: ReviewProps) {
  const [isActive, setIsActive] =  useState(false)
  const reviewstart:number = 5;

  return (
    <Card className="m-2 mx-auto max-w-xs md:ml-4">
      <CardHeader className="p-4">
        <Avatar>
          <Image
            src={
              "https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" ||
              image
            }
            alt="User Image"
            height={150}
            width={150}
          />
          <AvatarFallback>
            <AvatarIcon className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
        <p className="dark:text-accent ">{name}</p>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <p
          className={`text-black dark:text-white text-xs  ${
            !isActive ? "overflow-hidden max-h-32" : "overflow-scroll max-h-max"
          }`}>
          {review}
        </p>
        <div className="flex items-center justify-between w-24 pt-2">
          {Array.from({ length: stars }, (_, i) => (
            <StarFilledIcon key={i} className="h-4 w-4 text-yellow-500" />
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-2 pt-0 flex items-center justify-between">
        <p className="dark:text-accent">{date}</p>
        {readMore && (
          <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "see less" : "see more"}
          </button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ReviewCard;
