export interface Post {
  content: string;
  data: {
      title: string;
      date: string;
      draft: boolean;
      slug: string;
      category: string;
      tags: string[];
  };
}

export interface PostsState {
  loading: boolean,
  contents: Post[],
  order: string,
}