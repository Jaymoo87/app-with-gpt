import React, { useState } from 'react';

import { Editor, EditorContent } from '@tiptap/react';
import EditorMenuBar from './EditorMenuBar';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
};

const Article = ({ contentError, editor, isEditable, setContent, title }: Props) => {
  const [role, setRole] = useState<string>('I am a helpful assistant.');
  if (!editor) return null;
  return (
    <article className="leading-8 text-wh-500">
      {/* AI GENERATOR */}
      {isEditable && (
        <div className="p-3 mb-3 border-2 rounded-md bg-wh-50">
          <h4 className="p-0 m-0"></h4>
          <p className="p-0 my-1 text-xs"></p>
          <div className="flex gap-5 justify-betweeen">
            <input
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
              className="w-full px-3 py-1 border-2 rounded-md bg-wh-50"
            />
            <button type="button" onClick={() => {}}>
              <RocketLaunchIcon className="w-8 h-8 text-accent-orange hover:text-wh-300" />
            </button>
          </div>
        </div>
      )}{' '}
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
