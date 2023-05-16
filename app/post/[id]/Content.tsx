'use client';

import React, { useState } from 'react';

import { FormattedPost } from '@/app/types';

import Image from 'next/image';
import SocialLinks from '@/app/(shared)/SocialLinks';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorMenuBar from './EditorMenuBar';
import CategoryandEdit from './CategoryandEdit';
import Article from './Article';

type ContentProps = {
  post: FormattedPost;
};

const Content = ({ post }: ContentProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post?.title);
  const [titleError, setTitleError] = useState<string>('');
  const [tempTitle, setTempTitle] = useState<string>(title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError('');
    setTitle(e.target.value);
  };

  const [content, setContent] = useState<string>(post?.content);
  const [contentError, setContentError] = useState<string>('');
  const [tempContent, setTempContent] = useState<string>(content);

  const date = new Date(post?.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
  const formattedDate = date.toLocaleDateString('en-US', options);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (content) setContentError('');
    setContent(e.target.value);
  };

  const handleIsEditable = (boolean: boolean) => {
    setIsEditable(boolean);
    editor?.setEditable(boolean);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError('');
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
    editorProps: {
      attributes: {
        class: 'prose prose-sm xl:prose-2xl focus:outline-none w-full max-w-full shadow-md shadow-lg p-4 rounded-md',
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === '') setTitleError('required field');
    if (editor?.isEmpty) setContentError('required field');
    if (title === '' || editor?.isEmpty) return;

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const data = await response.json();

    handleIsEditable(false);
    setTempTitle('');
    setTempContent('');
    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <div className="w-full max-w-full mb-10 prose">
      {/* BREADCRUMBS */}
      <h5 className="text-wh-300">{`Home > ${post?.category} > ${post?.title}`}</h5>

      {/* CATEGORY AND EDIT */}
      <CategoryandEdit
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />

      <form onSubmit={handleSubmit}>
        {/* HEADER  */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="w-full p-3 border-2 rounded-md bg-wh-50"
                onChange={handleTitleChange}
                placeholder="Title"
                value={title}
              ></textarea>
              {titleError && <p className="mt-1 text-primary-500">{titleError}</p>}
            </div>
          ) : (
            <h3 className="mt-3 text-3xl font-bold">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="text-xs font-semibold">{post?.author}</h5>
            <h6 className="text-xs text-wh-300">{formattedDate}</h6>
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
        <Article
          contentError={contentError}
          editor={editor}
          isEditable={isEditable}
          setContent={setContent}
          title={title}
        />

        <EditorContent editor={editor} />
        {/* SUBMIT BUTTON  */}
        {isEditable && (
          <div className="flex justify-end">
            <button type="submit" className="px-5 py-2 mt-5 font-semibold bg-accent-red hover:bg-wh-500 text-wh-10">
              SUBMIT
            </button>
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
