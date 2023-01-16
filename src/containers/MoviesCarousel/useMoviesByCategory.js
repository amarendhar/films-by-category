import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  fetchMoviesByCategory,
  selectMoviesByCategory,
} from "store/slices/moviesByCategorySlice";

const useMoviesByCategory = ({ category } = {}) => {
  const dispatch = useAppDispatch();
  const { status, error, data } = useAppSelector(selectMoviesByCategory);

  useEffect(() => {
    if (category) {
      dispatch(fetchMoviesByCategory(category));
    }
  }, [category]);
  
  return {
    status,
    error,
    movies: data?.results || [],
  };
};

export default useMoviesByCategory;
