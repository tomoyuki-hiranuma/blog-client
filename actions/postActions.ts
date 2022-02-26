import { Post } from "../types/type";

export const SET_INITIAL_CONTENTS = 'SET_INITIAL_CONTENTS';
export const setInitialContents = (contents: Post[]) => {
  return {
    type: SET_INITIAL_CONTENTS,
    payload: contents
  };
};

export const SET_CONTENTS = 'SET_CONTENTS';
export const setContents = (contents: Post[], order: string) => {
  return {
    type: SET_CONTENTS,
    payload: { contents, order }
  };
};

export const SET_CONTENT = 'SET_CONTENT';
export const setContent = (content: Post) => {
  return {
    type: SET_CONTENT,
    payload: content
  };
};