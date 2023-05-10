import React from 'react';

import Card from 'app/(shared)/Card';
import { Post } from '@prisma/client';

type TravelProps = {
  travelPosts: Array<Post>;
};

const Travel = ({ travelPosts }: TravelProps) => {
  return (
    <div className="mt-10">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-4">
        <h4 className="px-5 py-2 text-sm font-semibold bg-accent-green text-wh-900">TRAVEL</h4>
        <p className="text-2xl font-bold">Amazing Destinations</p>
      </div>

      {/* CARDS ROW */}

      <div className="justify-between gap-8 sm:flex">
        <Card
          post={travelPosts[0]}
          imageHeight="h-80"
          isSmallCard={false}
          isLongForm={false}
          className="mt-5 basis-1/3 sm:mt-0 bg-wh-500"
        />
        <Card
          post={travelPosts[1]}
          imageHeight="h-80"
          isSmallCard={false}
          isLongForm={false}
          className="mt-5 basis-1/3 sm:mt-0 bg-wh-500"
        />
        <Card
          post={travelPosts[2]}
          imageHeight="h-80"
          isSmallCard={false}
          isLongForm={false}
          className="mt-5 basis-1/3 sm:mt-0 bg-wh-500"
        />
      </div>
      <Card
        post={travelPosts[3]}
        imageHeight="h-80"
        isSmallCard={false}
        isLongForm={false}
        className="items-center justify-between gap-3 mb-5 sm:flex mt-7 bg-wh-500"
      />
    </div>
  );
};

export default Travel;
