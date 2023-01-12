import React from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "../../../components";
import useMoviesByCategory from "./useMoviesByCategory";
import styles from "./styles.scss";

// ToDo: NIT: Use `prop-types` npm to type-check the props.
const MoviesByCategory = ({ category }) => {
  const { loading, movies, error } = useMoviesByCategory({ category });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <>
      <h3 className={styles.title}>{category} Movies</h3>
      <ul>
        {movies.map(({ id, title }) => (
          <NavLink key={id} to={`details/${id}`}>
            {title}
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default MoviesByCategory;
