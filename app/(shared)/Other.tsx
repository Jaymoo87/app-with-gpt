import React from 'react';
import Card from './Card';
import { Post } from '@prisma/client';

type OtherProps = {
  otherPosts: Array<Post>;
};

const Other = ({ otherPosts }: OtherProps) => {
  return (
    <section className="pt-4 mb-16">
      {' '}
      <hr className="border-1" />
      <p className="my-8 text-2xl font-bold">Other Interesting Posts</p>
      <div className="grid-cols-2 gap-16 sm:grid">
        <Card
          post={otherPosts[0]}
          imageHeight="h-80"
          isSmallCard={false}
          isLongForm
          className="mt-5 sm:mt-0 bg-wh-500"
        />
        <Card
          post={otherPosts[1]}
          imageHeight="h-80"
          isSmallCard={false}
          isLongForm
          className="mt-5 sm:mt-0 bg-wh-500"
        />
        <Card
          post={otherPosts[2]}
          imageHeight="h-80"
          isSmallCard={false}
          isLongForm
          className="mt-5 sm:mt-0 bg-wh-500"
        />
        <Card
          post={otherPosts[3]}
          imageHeight="h-80"
          isSmallCard={false}
          isLongForm
          className="mt-5 sm:mt-0 bg-wh-500"
        />
      </div>
    </section>
  );
};

export default Other;
