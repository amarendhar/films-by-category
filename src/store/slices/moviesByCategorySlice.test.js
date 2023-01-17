import moviesByCategoryReducer, {
  initialState,
  fetchMoviesByCategory,
} from "./moviesByCategorySlice";
import moviesByPopular from "mocks/moviesByPopular";
import moviesNotFound from "mocks/moviesNotFound";
import { STATUS } from "utils/constants";

describe(`MoviesByCategory Reducer`, () => {
  it(`Should handle state initial`, () => {
    expect(moviesByCategoryReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it(`Should handle state pending`, () => {
    expect(
      moviesByCategoryReducer(initialState, {
        type: fetchMoviesByCategory.pending,
      })
    ).toEqual({
      ...initialState,
      status: STATUS.PENDING,
    });
  });

  it(`Should handle state fulfilled`, () => {
    expect(
      moviesByCategoryReducer(initialState, {
        type: fetchMoviesByCategory.fulfilled,
        payload: moviesByPopular,
      })
    ).toEqual({
      ...initialState,
      status: STATUS.FULFILLED,
      data: moviesByPopular,
    });
  });

  it(`Should handle state rejected`, () => {
    expect(
      moviesByCategoryReducer(initialState, {
        type: fetchMoviesByCategory.rejected,
        payload: moviesNotFound.status_message,
      })
    ).toEqual({
      ...initialState,
      status: STATUS.REJECTED,
      error: moviesNotFound.status_message,
    });
  });
});
