export interface Post {
  content: string;
  data: {
      title: string;
      date: string;
      draft: boolean;
      category: string;
      tags: string[];
  };
}

export interface PostCard {
  content: string;
  data: {
    title: string;
    date: string;
    draft: boolean;
    category: string;
    tags: string[];
};
}