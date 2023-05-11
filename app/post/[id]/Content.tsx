'use client';

import React, { useState } from 'react';

import { FormattedPost } from '@/app/types';

import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import SocialLinks from '@/app/(shared)/SocialLinks';

type ContentProps = {
  post: FormattedPost;
};

const Content = ({ post }: ContentProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post?.title);
  const [titleError, setTitleError] = useState<string>('');
  const [content, setContent] = useState<string>(post?.content);
  const [contentError, setContentError] = useState<string>('');

  const handleSubmit = () => {};

  return (
    <div className="w-full max-w-full mb-10 prose">
      {/* BREADCRUMBS */}
      <h5 className="text-wh-300">{`Home ${post?.category} > ${post?.title}`}</h5>

      {/* CATEGORY AND EDIT */}

      <div className="flex items-center justify-between">
        <h4 className="px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900">{post?.category}</h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button onClick={() => console.log('cancel edit')}>
                <XMarkIcon className="w-6 h-6 text-accent-red" />
              </button>
            </div>
          ) : (
            <button onClick={() => console.log('make edit')}>
              <PencilSquareIcon className="w-6 h-6 text-accent-red" />
            </button>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* HEADER  */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="w-full p-3 border-2 rounded-md bg-wh-50"
                onChange={(e) => console.log('title change', e.target.value)}
                placeholder="Title"
                value={title}
              ></textarea>
            </div>
          ) : (
            <h3 className="mt-3 text-3xl font-bold">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="text-xs font-semibold">{post?.author}</h5>
            <h6 className="text-xs text-wh-300">{post?.createdAt}</h6>
          </div>
        </>
        {/* IMAGE  */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post.image}
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 85vw, (max-width: 1060px) 75vw, 60vw "
          />
        </div>
        {/* SUBMIT BUTTON  */}
        {isEditable && (
          <div className="flex justify-end">
            <button className="px-5 py-2 mt-5 font-semibold bg-accent-red hover:bg-wh-500 text-wh-10">Submit</button>
          </div>
        )}
      </form>
      {/* SOCIAL LINKS  */}
      <div className="hidden w-1/3 mt-10 md:block">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
