import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { postsReducer } from '../reducers/postsReducer';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch