import { Post } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      className={`${className} sm:mt-0 sm:h-auto relative block mt-7 w-full h-96 hover:opacity-70`}
    >
      <div className="relative z-0 w-full h-full bg-wh-500">
        <Image
          fill
          style={{ objectFit: 'cover' }}
          alt="trending"
          src={post?.image}
          placeholder="blur"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw "
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-gradient-gradual" />
      <div className="absolute bottom-0 left-0 p-3 z-2">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">{post?.category}</h4>
        <div className="mt-2 text-wh-100">{post?.title}</div>
      </div>
    </Link>
  );
};

type TrendingProps = {
  trendingPosts: Array<Post>;
};

const Trending = ({ trendingPosts }: TrendingProps) => {
  return (
    <section className="pt-4 pb-10">
      <div className="flex items-center gap-3">
        <div className="px-8 py-4 text-sm font-bold bg-wh-900 text-wh-10">TRENDING</div>
        <p className="pb-4 text-sm">
          Welcome to our tech and travel blog, where we explore the latest technology trends and how they impact our
          journeys around the world. From virtual reality tours to sustainable travel options, we will keep you updated
          on the hottest topics and share our own experiences and insights. Join us on this exciting adventure and
          discover the intersection of tech and travel!
        </p>
      </div>

      {/* GRID */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2  sm:h-[600px]">
        <TrendingCard className="col-span-2 row-span-2 bg-wh-500" post={trendingPosts[0]} />
        <TrendingCard className="col-span-2 row-span-1 bg-wh-500" post={trendingPosts[1]} />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" post={trendingPosts[2]} />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" post={trendingPosts[3]} />
      </div>

      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores voluptas sapiente? Impedit at iste
        voluptas beatae, molestiae quisquam repellendus facere tempore provident. Amet nostrum earum ducimus! Nesciunt,
        at quo?
      </p>
      {/* FLEX */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className="bg-wh-500 h-96 basis-1/2"></div>
        <div className="flex flex-col gap-3 h-96 basis-1/2">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex gap-3 basis-1/2">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Trending;
