import { renderHook, waitFor } from "utils/test-utils";
import useMoviesByCategory from "./useMoviesByCategory";
import { STATUS, MOVIE_CATEGORY_OPTIONS, mockMovies } from "utils/constants";

describe("useMoviesByCategory", () => {
  const defaultProps = {
    status: STATUS.IDLE,
    error: null,
    movies: [],
  };

  it("Should return defaultProps initially", () => {
    const { result } = renderHook(() => useMoviesByCategory());

    expect(result.current).toEqual(defaultProps);
  });

  it("Should fetch movies for the given category", async () => {
    const { result } = renderHook(() =>
      useMoviesByCategory(MOVIE_CATEGORY_OPTIONS[0])
    );

    await waitFor(() => {
      expect(result.current).toEqual({
        ...defaultProps,
        status: STATUS.FULFILLED,
        movies: mockMovies.popular.results,
      });
    });
  });
});
