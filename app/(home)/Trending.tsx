import Link from 'next/link';
import React from 'react';

type TrendingCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TrendingCardProps) => {
  return (
    <Link
      //   href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href={'/'}
      className={`${className} sm:mt-0 sm:h-auto relative block mt-7 w-full h-96 hover:opacity-70`}
    >
      <div className="relative z-0 w-full h-full bg-wh-500">image</div>
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-gradient-gradual" />
      <div className="absolute bottom-0 left-0 p-3 z-2">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">Category</h4>
        <div className="mt-2 text-wh-100">post title</div>
      </div>
    </Link>
  );
};

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="px-8 py-2 text-sm font-bold bg-wh-900 text-wh-10">TRENDING</div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquam molestias suscipit nostrum officiis
          tempora hic, culpa qui voluptas, voluptatem vitae reiciendis? Deserunt commodi explicabo distinctio quia
          aliquam, quae dolor.
        </p>
      </div>

      {/* GRID */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2  sm:h-[600px]">
        <TrendingCard className="col-span-2 row-span-2 bg-wh-500" />
        <TrendingCard className="col-span-2 row-span-1 bg-wh-500" />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" />
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
