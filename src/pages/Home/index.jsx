import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getMovies } from "../../constants";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(getMovies("popular"));
        const data = await res.json();
        setLoading(false);
        setMovies(data?.results);
      } catch (error) {
        setLoading(false);
        setMovies([]);
        setError(error);
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Popular Movies</div>
      <ul>
        {movies.map(({ id, title }) => (
          <NavLink key={id} to="details">{title}</NavLink>
        ))}
      </ul>
    </>
  );
};

export default Home;
