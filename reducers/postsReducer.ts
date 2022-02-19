import { AnyAction } from "redux";
import { SET_INITIAL_CONTENTS, SORT_CONTENTS } from "../actions/postActions";
import { Post, PostsState } from "../types/type";

const initialState: PostsState = {
  loading: false,
  contents: [],
  order: 'asc'
};

const sortData = (contents: Post[], order: string) => {
  switch(order) {
  case 'asc':
    return contents.slice().sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
        
      return date1.getTime() - date.getTime();
    });
  case 'desc':
    return contents.slice().sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
        
      return date.getTime() - date1.getTime();
    });
  default:
    return contents;
  }
};

export const postsReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
  case SET_INITIAL_CONTENTS:
    return {
      ...state,
      contents: action.payload
    };
  case SORT_CONTENTS:
    return {
      ...state,
      order: action.payload,
      contents: sortData(state.contents, action.payload)
    };
  default:
    return state;
  }
};