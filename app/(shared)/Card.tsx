import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@prisma/client';

type CardProps = {
  className?: string;
  imageHeight: string;
  isSmallCard: boolean;
  isLongForm: boolean;
  post: Post;
};

const Card = ({ className, imageHeight, isSmallCard = false, isLongForm = false, post }: CardProps) => {
  const { id, title, author, createdAt, image, snippet, updatedAt } = post || {};
  const date = new Date(createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className={className}>
      <div className="relative z-0 w-full h-full bg-wh-500">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`} className="basis-full hover:opacity-70">
          <Image
            fill
            style={{ objectFit: 'cover' }}
            alt="trending"
            src={post?.image}
            placeholder="blur"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw "
          />
        </Link>
      </div>
      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          <h4
            className={`font-bold hover:text-accent-green ${
              isSmallCard ? 'text-base line-clamp-2' : 'text-lg'
            } ${imageHeight}`}
          >
            {title}
          </h4>
        </Link>
        <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3`}>
          <h5 className="text-xs font-semibold">{author}</h5>
          <h6 className="text-xs text-wh-300">{formattedDate}</h6>
        </div>
        <p className={`text-wh-100 ${isLongForm ? 'line-clamp-5' : 'line-clamp-3'}`}>{snippet}</p>
      </div>
    </div>
  );
};

export default Card;
