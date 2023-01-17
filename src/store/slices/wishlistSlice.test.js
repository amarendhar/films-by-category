import wishlistReducer, {
  initialState,
  addToWishlist,
  removeFromWishlist,
} from "./wishlistSlice";
import movieById from "mocks/movieById";

describe(`Wishlist Reducer`, () => {
  it(`Should handle state initial`, () => {
    expect(wishlistReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it(`Should add/remove items to/from wishlist`, () => {
    const item1 = movieById;
    let state = wishlistReducer(initialState, addToWishlist(item1));
    expect(state).toEqual({ wishlistItems: [item1] });

    const item2 = { ...movieById, id: 2 };
    state = wishlistReducer(state, addToWishlist(item2));
    expect(state).toEqual({ wishlistItems: [item1, item2] });

    state = wishlistReducer(state, removeFromWishlist(item2.id));
    expect(state).toEqual({
      wishlistItems: [item1],
    });

    state = wishlistReducer(state, removeFromWishlist(item1.id));
    expect(state).toEqual({
      wishlistItems: [],
    });
  });
});
