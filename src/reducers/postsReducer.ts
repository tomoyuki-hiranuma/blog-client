import { AnyAction } from "redux";
import { SET_INITIAL_CONTENTS, SET_CONTENTS } from "../actions/postActions";
import { PostsState } from "../types/type";

const initialState: PostsState = {
  loading: false,
  contents: [],
  order: 'asc'
};

export const postsReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
  case SET_INITIAL_CONTENTS:
    return {
      ...state,
      contents: action.payload
    };
  case SET_CONTENTS:
    return {
      ...state,
      order: action.payload.order,
      contents: action.payload.contents
    };
  default:
    return state;
  }
};