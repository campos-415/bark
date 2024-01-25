import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card';
import ReviewCard from './ui/ReviewCard';
import Container from './Container';
import Image from 'next/image';
import reviewImage from  "../public/img/reviews.svg"
function Reviews() {
  return (
    <Container>
      <Card className="mt-8 py-4 mx-auto flex flex-col">
        <CardHeader className="text-2xl md:text-4xl lg:text-6xl font-medium text-center text-black dark:text-white">
          See What others are saying!
        </CardHeader>
        <div className='flex flex-col md:flex-row  mx-auto'>

          <div className='flex items-center justify-center'>
            <Image src={reviewImage} alt="" width={500} height={500} />
          </div>
        <CardContent className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 ">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </CardContent>
        </div>
      </Card>
    </Container>
  );
}

export default Reviews