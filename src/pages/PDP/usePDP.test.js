import { renderHook, waitFor } from "utils/test-utils";
import usePDP from "./usePDP";
import { STATUS, mockMovies } from "utils/constants";

describe("usePDP", () => {
  const defaultProps = {
    status: STATUS.IDLE,
    error: null,
    movie: null,
  };

  it("Should return defaultProps initially", () => {
    const { result } = renderHook(() => usePDP());

    expect(result.current).toEqual(defaultProps);
  });

  it("Should fetch movie-details for the given movieId", async () => {
    const { result } = renderHook(() => usePDP({ movieId: "movieId" }));

    await waitFor(() => {
      expect(result.current).toEqual({
        ...defaultProps,
        status: STATUS.FULFILLED,
        movie: mockMovies.movieId,
      });
    });
  });
});
