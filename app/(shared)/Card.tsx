import React from 'react';

import Link from 'next/link';

type CardProps = {
  className?: string;
  imageHeight: string;
  isSmallCard: boolean;
  isLongForm: boolean;
};

const Card = ({ className, imageHeight, isSmallCard = false, isLongForm = false }: CardProps) => {
  return (
    <div className={className}>
      <Link href={'/'} className="basis-full hover:opacity-70">
        <div className={`relative w-auto mb-3 ${imageHeight}`}>image</div>
      </Link>
      <div className="basis-full">
        <Link href={'/'}>
          <h4
            className={`font-bold hover:text-accent-green ${
              isSmallCard ? 'text-base line-clamp-2' : 'text-lg'
            } ${imageHeight}`}
          >
            image
          </h4>
        </Link>
        <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3`}>
          <h5 className="text-xs font-semibold">author</h5>
          <h6 className="text-xs text-wh-300">date</h6>
          <p className={`text-wh-500 ${isLongForm ? 'line-clamp-5' : 'line-clamp-3'}`}></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
