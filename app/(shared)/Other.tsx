import React from 'react';
import Card from './Card';

type Props = {};

const Other = (props: Props) => {
  return (
    <section className="pt-4 mb-16">
      {' '}
      <hr className="border-1" />
      <p className="my-8 text-2xl font-bold">Other Interesting Posts</p>
      <div className="grid-cols-2 gap-16 sm:grid">
        <Card imageHeight="h-80" isSmallCard={false} isLongForm className="mt-5 sm:mt-0 bg-wh-500" />
        <Card imageHeight="h-80" isSmallCard={false} isLongForm className="mt-5 sm:mt-0 bg-wh-500" />
        <Card imageHeight="h-80" isSmallCard={false} isLongForm className="mt-5 sm:mt-0 bg-wh-500" />
        <Card imageHeight="h-80" isSmallCard={false} isLongForm className="mt-5 sm:mt-0 bg-wh-500" />
      </div>
    </section>
  );
};

export default Other;
