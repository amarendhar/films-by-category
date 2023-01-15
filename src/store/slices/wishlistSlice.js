import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistIds: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlistIds.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlistIds = state.wishlistIds.filter(
        (movieId) => movieId !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist;

export default wishlistSlice.reducer;
