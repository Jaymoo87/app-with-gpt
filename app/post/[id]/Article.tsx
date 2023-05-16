import React, { useState } from 'react';

import { Editor, EditorContent } from '@tiptap/react';
import EditorMenuBar from './EditorMenuBar';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { SiOpenai } from 'react-icons/si';
import Link from 'next/link';

type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
};

const Article = ({ contentError, editor, isEditable, setContent, title }: Props) => {
  const [role, setRole] = useState<string>('I am a dungeon master that loves origin stories.');

  if (!editor) return null;

  const postAiContent = async () => {
    editor.chain().focus().setContent('Generating AI Content. Wait a Moment...').run();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        role,
      }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };
  return (
    <article className="leading-8 text-wh-500">
      {/* AI GENERATOR */}
      {isEditable && (
        <div className="p-3 mb-3 border-2 rounded-md bg-wh-50">
          <h4 className="flex justify-between p-0 m-0 mb-2">Hi! Adjust My Attitude If You Need To</h4>
          <div className="flex gap-5 justify-betweeen">
            <input
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-full px-3 py-1 border-2 rounded-md bg-wh-50"
            />
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="w-8 h-8 text-accent-orange hover:text-wh-300" />
            </button>
          </div>
          <span className="flex justify-start p-0 mt-3 text-sm">
            powered by{' '}
            <Link href="https://openai.com/">
              {' '}
              <SiOpenai className="mx-2 mt-1" />
            </Link>
          </span>
        </div>
      )}
      <div className={isEditable ? 'border-2 rounded-md bg-wh-50 p-3' : 'w-full max-w-full'}>
        {isEditable && (
          <>
            {' '}
            <EditorMenuBar editor={editor} />
            <hr className="mt-2 mb-5 border-1" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
};

export default Article;
