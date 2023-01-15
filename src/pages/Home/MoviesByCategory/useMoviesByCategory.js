import { useEffect, useState } from "react";
// import { getMoviesURL } from "constants";
import _fetch from "utils/_fetch";

const useMoviesByCategory = ({ category } = {}) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!category) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        // const res = await fetch(getMoviesURL(category));
        const res = await _fetch(category);
        const data = await res.json();
        setLoading(false);
        data?.results
          ? setMovies(data?.results)
          : setError(data?.status_message || ERROR_RESPONSE);
      } catch (error) {
        setLoading(false);
        setMovies([]);
        setError(error);
        console.error(error);
      }
    };

    fetchMovies();
  }, [category]);

  return {
    loading,
    movies,
    error,
  };
};

export default useMoviesByCategory;
