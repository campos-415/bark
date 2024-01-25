import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Avatar, AvatarFallback } from "./avatar";
import Image from "next/image";
import { AvatarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { StarIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function ReviewCard() {
  return (
    <Card className="m-2 mx-auto max-w-xs">
      <CardHeader className="p-4">
        <Avatar>
          <Image src="" alt="" />
          <AvatarFallback>
            <AvatarIcon className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
        <p className="dark:text-accent ">Cesar Campos</p>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <p className="text-black dark:text-white text-xs">
          I boarded my 8 year old schnauzer for 3 weeks. I was a little concern
          about how my dog would react to be together with other dogs. I was
          pleasantly suprised on how the trained employees worked with my dog. I
          would highly recommend Embarkcadero.
        </p>
        <div className="flex items-center justify-between w-24 pt-2">
          <StarFilledIcon className="h-4 w-4 text-yellow-500" />
          <StarFilledIcon className="h-4 w-4 text-yellow-500" />
          <StarFilledIcon className="h-4 w-4 text-yellow-500" />
          <StarFilledIcon className="h-4 w-4 text-yellow-500" />
          <StarFilledIcon className="h-4 w-4 text-yellow-500" />
        </div>
      </CardContent>
      <CardFooter className="p-2 pt-0">
        <p className="dark:text-accent">6 years ago</p>
      </CardFooter>
    </Card>
  );
}

export default ReviewCard;
