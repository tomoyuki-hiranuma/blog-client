import { Post } from "../types/type";

export const SET_INITIAL_CONTENTS = 'SET_INITIAL_CONTENTS';

export const setInitialContents = (contents: Post[]) => {
  return {
    type: SET_INITIAL_CONTENTS,
    payload: contents
  };
};