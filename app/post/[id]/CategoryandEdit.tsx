import React from 'react';

import { Editor } from '@tiptap/react';
import { FormattedPost } from '@/app/types';

import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import PencilSquareIcon from '@heroicons/react/24/solid/PencilSquareIcon';

type Props = {
  isEditable: boolean;
  handleIsEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
  post: FormattedPost;
};

const CategoryandEdit = ({
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
  post,
}: Props) => {
  const handleEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || '');
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  };
  return (
    <div className="flex items-center justify-between">
      <h4 className="px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900">{post?.category}</h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button type="button" onClick={handleCancelEdit}>
              <XMarkIcon className="w-6 h-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button type="button" onClick={handleEnableEdit}>
            <PencilSquareIcon className="w-6 h-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryandEdit;
