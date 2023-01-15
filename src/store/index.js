import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import moviesByCategorySlice from './slices/moviesByCategorySlice'
import movieByIdSlice from './slices/movieByIdSlice'

const isDev = process.env.NODE_ENV !== "production";
const middlewares = [];

if (isDev) {
  middlewares.push(reduxLogger);
}

export const rootReducer = {
  moviesByCategory: moviesByCategorySlice,
  movieById: movieByIdSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});
