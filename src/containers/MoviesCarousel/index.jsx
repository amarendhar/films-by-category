import React from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "components";
import useMoviesByCategory from "./useMoviesByCategory";
import { STATUS, getImageURL } from "utils/constants";
import { getRating } from "utils/movieUtils";
import styles from "./styles.scss";

// ToDo: NIT: Add `prop-types` npm to type-check the props.
const MoviesCarousel = ({ title, category, selectedMovies }) => {
  const { status, movies, error } = useMoviesByCategory({ category });
  const moviesList =
    selectedMovies?.length > 0
      ? selectedMovies
      : status === STATUS.FULFILLED && movies?.length > 0
      ? movies
      : [];

  return (
    <section
      data-testid="section"
      className={styles.section}
      role="group"
      aria-labelledby={category}
    >
      <h3 id={category} className={styles["section-title"]}>
        {title} Movies
      </h3>
      <div className={styles["list-wrapper"]}>
        <div className={styles.list}>
          <Loader loading={status === STATUS.PENDING} error={error} />
          {moviesList.length > 0 &&
            moviesList.map(({ id, title, poster_path, vote_average }) => (
              <NavLink
                key={id}
                data-testid="list-item"
                className={styles["list-item"]}
                aria-label={`View ${title}`}
                to={`/p/${id}?category=${category}`}
              >
                <div className={styles["list-item-img"]}>
                  <img src={getImageURL(poster_path)} alt={title} />
                </div>
                <div className={styles["list-item-info"]}>
                  <h5>{title}</h5>
                  <h6>{getRating(vote_average)}</h6>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesCarousel;
