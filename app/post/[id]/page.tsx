import React from 'react';

import { prisma } from '@/app/api/client';
import { Post } from '@prisma/client';
import { FormattedPost } from '@/app/types';

import Sidebar from '@/app/(shared)/Sidebar';
import Content from '@/app/post/[id]/Content';

type PostProps = {
  params: { id: string };
};

export const revalidate = 60;

const getPost = async (id: string) => {
  const post: Post | null = await prisma.post.findUnique({
    where: { id },
  });
  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }
  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

const SinglePost = async ({ params }: PostProps) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);
  if (!post) {
    return <h1>Post Not Found</h1>;
  }
  return (
    <main className="px-10 leading-7">
      <div className="gap-10 md:flex nb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default SinglePost;
