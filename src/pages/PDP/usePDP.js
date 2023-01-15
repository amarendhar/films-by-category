import { useEffect, useState } from "react";
// import { getMovieURL } from "utils/constants";
import _fetch from "utils/_fetch";

const usePDP = ({ movieId } = {}) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        // const res = await fetch(getMovieURL(movieId));
        const res = await _fetch("movieId");
        const data = await res.json();
        setLoading(false);
        data?.id
          ? setMovie(data)
          : setError(data?.status_message || ERROR_RESPONSE);
      } catch (error) {
        setLoading(false);
        setMovie(null);
        setError(error);
        console.error(error);
      }
    };

    fetchMovies();
  }, [movieId]);

  return {
    loading,
    movie,
    error,
  };
};

export default usePDP;
