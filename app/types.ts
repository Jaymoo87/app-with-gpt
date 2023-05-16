export type FormattedPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  category: string;
  content: string;
  author: string;
  image: string;
  snippet: string;
};

export type CharacterData = {
  id: string;
  name: string;
  class: string;
  race: string;
  weapon: string;
  creator: string;
  image: string;
  originStory: string;
  createdAt: string;
  updatedAt: string;
};
