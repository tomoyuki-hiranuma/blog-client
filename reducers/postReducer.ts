import { AnyAction } from "redux";
import { SET_CONTENT } from "../actions/postActions";

const initialState = {
  content: "",
  data: {},
};

export const postReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
  case SET_CONTENT:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};