import React from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "components";
import useMoviesByCategory from "./useMoviesByCategory";
import { getImageURL } from "constants";
import styles from "./styles.scss";

// ToDo: NIT: Add `prop-types` npm to type-check the props.
const MoviesByCategory = ({ title, category }) => {
  const { loading, movies, error } = useMoviesByCategory({ category });

  return (
    <section
      data-testid="section"
      className={styles.section}
      role="group"
      aria-labelledby={category}
    >
      <h3
        id={category}
        className={styles["section-title"]}
      >
        {title} Movies
      </h3>
      <div className={styles.list}>
        {(loading || error) && (
          <div className={styles.status}>
            {loading ? <Loader /> : <div className={styles.error}>{error}</div>}
          </div>
        )}
        {movies?.length > 0 &&
          movies.map(({ id, title, poster_path, vote_average }) => (
            <NavLink
              key={id}
              data-testid="list-item"
              className={styles["list-item"]}
              aria-label={`View ${title}`}
              to={`p/${id}`}
            >
              <div className={styles["list-item-img"]}>
                <img src={getImageURL(poster_path)} alt={title} />
              </div>
              <div className={styles["list-item-info"]}>
                <h6>{vote_average}/10</h6>
                <h5>{title}</h5>
              </div>
            </NavLink>
          ))}
      </div>
    </section>
  );
};

export default MoviesByCategory;
