import { renderHook, waitFor } from "@testing-library/react";
import usePDP from "./usePDP";
import { mockMovies } from "utils/constants";

describe("usePDP", () => {
  const defaultProps = {
    loading: false,
    movie: null,
    error: false,
  };

  it("Should return defaultProps initially", () => {
    const { result } = renderHook(() => usePDP());

    expect(result.current).toEqual(defaultProps);
  });

  it("Should fetch movie-details for the given movieId", async () => {
    const { result } = renderHook(() => usePDP({ movieId: "movieId" }));

    await waitFor(() => {
      expect(result.current).toEqual({
        loading: false,
        movie: mockMovies.movieId,
        error: false,
      });
    });
  });
});
