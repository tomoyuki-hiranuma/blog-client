import { AnyAction } from "redux";
import { SET_INITIAL_CONTENTS } from "../actions/postActions";

const initialState = {
  loading: false,
  contents: []
};

export const postsReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
  case SET_INITIAL_CONTENTS:
    return {
      ...state,
      contents: action.payload
    };
  default:
    return state;
  }
};