import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./card";
import { Product } from "../../types";

interface aboutUsCardProps {
  data: Product;
}
const ServiceCard = ({ data }: aboutUsCardProps) => {
  return (
    <Link
      href="/"
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg my-auto">
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
            <Image
              src={data?.images?.[0]}
              alt="Product Image"
              fill
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <div>
            <p className="font-semibold dark:text-primary/80 text-lg">
              {data?.name}
            </p>
            <p className="text-sm text-primary/80 dark:text-white py-2">
              {data?.category}
            </p>
          </div>
          <div className="flex items-center dark:text-primary/80 justify-between">
            {data?.price}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
