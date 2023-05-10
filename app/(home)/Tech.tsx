import React from 'react';
import Card from '../(shared)/Card';
import { Post } from '@prisma/client';

type TechProps = {
  techPosts: Array<Post>;
};

const Tech = ({ techPosts }: TechProps) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-4">
        <h4 className="px-5 py-2 text-sm font-semibold bg-accent-orange text-wh-900">HOT</h4>
        <p className="text-2xl font-bold">Latest News and Tech</p>
      </div>

      <div className="grid-cols-2 grid-rows-3 my-5 sm:grid gap-x-8 gap-y-8 ">
        {/* LARGE CARD */}
        <Card
          post={techPosts[0]}
          imageHeight="h-96"
          isSmallCard={false}
          isLongForm
          className="col-span-1 row-span-3 bg-wh-500"
        />
        {/* SMALL CARDS */}
        <Card
          post={techPosts[1]}
          isSmallCard
          isLongForm={false}
          imageHeight="h-48"
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0"
        />
        <Card
          post={techPosts[2]}
          isSmallCard
          isLongForm={false}
          imageHeight="h-48"
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0"
        />
        <Card
          post={techPosts[3]}
          isSmallCard
          isLongForm={false}
          imageHeight="h-48"
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0"
        />
      </div>
      {/* FLEX */}
      {/* <div className="flex items-center justify-between gap-5">
        <div className="bg-wh-500 h-96 basis-1/2"></div>
        <div className="flex flex-col gap-3 h-96 basis-1/2">
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Tech;
