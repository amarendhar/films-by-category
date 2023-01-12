import { renderHook, waitFor } from "@testing-library/react";
import useMoviesByCategory from "./useMoviesByCategory";
import { mockMovies, MOVIE_CATEGORIES } from "../../../constants";

describe("useMoviesByCategory", () => {
  const initialProps = {
    loading: false,
    movies: [],
    error: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should return initial state", () => {
    const { result } = renderHook(() => useMoviesByCategory());

    expect(result.current).toEqual(initialProps);
  });

  it("Should fetch movies for the given category", async () => {
    const { result } = renderHook(() =>
      useMoviesByCategory({ category: MOVIE_CATEGORIES.POPULAR })
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
