import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import moviesByCategoryReducer from "./slices/moviesByCategorySlice";
import movieByIdReducer from "./slices/movieByIdSlice";
import wishlistReducer from "./slices/wishlistSlice";

const isDev = process.env.NODE_ENV !== "production";
const middlewares = [];

if (isDev) {
  middlewares.push(reduxLogger);
}

export const rootReducer = {
  moviesByCategory: moviesByCategoryReducer,
  movieById: movieByIdReducer,
  wishlist: wishlistReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});
