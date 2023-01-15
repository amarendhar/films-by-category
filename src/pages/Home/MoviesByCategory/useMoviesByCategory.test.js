import { renderHook, waitFor } from "@testing-library/react";
import useMoviesByCategory from "./useMoviesByCategory";
import { mockMovies, MOVIE_CATEGORY_OPTIONS } from "utils/constants";

describe("useMoviesByCategory", () => {
  const defaultProps = {
    loading: false,
    movies: [],
    error: false,
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
        loading: false,
        movies: mockMovies.popular.results,
        error: false,
      });
    });
  });
});
