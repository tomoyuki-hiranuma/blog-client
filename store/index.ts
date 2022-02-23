import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { postsReducer } from '../reducers/postsReducer';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: process.env.NODE_ENV === 'production' ? (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk) : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch