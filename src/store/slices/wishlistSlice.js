import { createSlice } from "@reduxjs/toolkit";
import { hasItem } from "utils/movieUtils";

export const initialState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (!hasItem(state.wishlistItems, action.payload.id)) {
        state.wishlistItems.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist;

export default wishlistSlice.reducer;
