import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS, ERROR_RESPONSE, getMovieByIdURL } from "utils/constants";
import _fetch from "utils/_fetch";

const initialState = { status: STATUS.IDLE, error: null, data: {} };

export const fetchMovieById = createAsyncThunk(
  "movieById/fetchMovieById",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetch(getMovieByIdURL(movieId));
      // const response = await _fetch(`movieId=${movieId}`);
      const data = await response.json();

      if (!data?.id || data?.status_message) {
        throw new Error(data?.status_message || ERROR_RESPONSE);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const movieByIdSlice = createSlice({
  name: "movieById",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  /**
   * The `extraReducers` field lets the slice handle actions defined elsewhere,
   *  including actions generated by createAsyncThunk or in other slices.
   */
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.status = STATUS.PENDING;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = STATUS.FULFILLED;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = STATUS.REJECTED;
        state.data = {};
        state.error = action.payload;
      });
  },
});

export const selectMovieById = (state) => state.movieById;

export default movieByIdSlice.reducer;
