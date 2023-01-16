import { renderHook, waitFor, act } from "utils/test-utils";
import usePDP from "./usePDP";
import { STATUS, mockMovies } from "utils/constants";

describe("usePDP", () => {
  const defaultProps = {
    status: STATUS.IDLE,
    error: null,
    movie: null,
    isAddedToWishlist: false,
    handleWishList: expect.any(Function),
    wishlistItems: [],
  };

  it("Should return defaultProps initially", () => {
    const { result } = renderHook(() => usePDP());

    expect(result.current).toEqual(defaultProps);
  });

  it("Should fetch movie-details for the given movieId", async () => {
    const { result } = renderHook(() => usePDP({ movieId: mockMovies.movieById.id }));

    await waitFor(() => {
      expect(result.current).toEqual({
        ...defaultProps,
        status: STATUS.FULFILLED,
        movie: mockMovies.movieById,
      });
    });
  });

  it("Should add/remove movie from wishlist", async () => {
    const { result } = renderHook(() => usePDP({ movieId: mockMovies.movieById.id }));

    expect(result.current.isAddedToWishlist).toEqual(false);

    act(() => {
      result.current.handleWishList();
    });
    expect(result.current.isAddedToWishlist).toEqual(true);

    act(() => {
      result.current.handleWishList();
    });
    expect(result.current.isAddedToWishlist).toEqual(false);
  });
});
