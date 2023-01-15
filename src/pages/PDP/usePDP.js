import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchMovieById, selectMovieById } from "store/slices/movieByIdSlice";

const usePDP = ({ movieId } = {}) => {
  const dispatch = useAppDispatch();
  const { status, error, data } = useAppSelector(selectMovieById);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieById(movieId));
    }
  }, [movieId]);

  return {
    status,
    error,
    movie: data?.id ? data : null,
  };
};

export default usePDP;
