import movieByIdReducer, {
  initialState,
  fetchMovieById,
} from "./movieByIdSlice";
import movieById from "mocks/movieById";
import moviesNotFound from "mocks/moviesNotFound";
import { STATUS } from "utils/constants";

describe(`MovieById Reducer`, () => {
  it(`Should handle state initial`, () => {
    expect(movieByIdReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it(`Should handle state pending`, () => {
    expect(
      movieByIdReducer(initialState, {
        type: fetchMovieById.pending,
      })
    ).toEqual({
      ...initialState,
      status: STATUS.PENDING,
    });
  });

  it(`Should handle state fulfilled`, () => {
    expect(
      movieByIdReducer(initialState, {
        type: fetchMovieById.fulfilled,
        payload: movieById,
      })
    ).toEqual({
      ...initialState,
      status: STATUS.FULFILLED,
      data: movieById,
    });
  });

  it(`Should handle state rejected`, () => {
    expect(
      movieByIdReducer(initialState, {
        type: fetchMovieById.rejected,
        payload: moviesNotFound.status_message,
      })
    ).toEqual({
      ...initialState,
      status: STATUS.REJECTED,
      error: moviesNotFound.status_message,
    });
  });
});
