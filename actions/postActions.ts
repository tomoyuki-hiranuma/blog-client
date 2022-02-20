import { Post } from "../types/type";

export const SET_INITIAL_CONTENTS = 'SET_INITIAL_CONTENTS';
export const SORT_CONTENTS = 'SORT_CONTENTS';

export const setInitialContents = (contents: Post[]) => {
  return {
    type: SET_INITIAL_CONTENTS,
    payload: contents
  };
};

export const sortContents = (order: string) => {
  return {
    type: SORT_CONTENTS,
    payload: order
  };
};