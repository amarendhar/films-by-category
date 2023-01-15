import React from "react";
import { useParams } from "react-router-dom";
import { Loader, Button } from "components";
import usePDP from "./usePDP";
import { STATUS, getImageURL } from "utils/constants";
import styles from "./styles.scss";

// Details/Description/Product-Description-Page(PDP)
const PDP = () => {
  const { movieId } = useParams();
  const { status, movie, error } = usePDP({ movieId });

  return (
    <section
      data-testid="pdp-section"
      className={styles.section}
      role="group"
      aria-labelledby="product"
    >
      <div className={styles["product"]}>
        <Loader loading={status === STATUS.PENDING} error={error} />
        {movie && (
          <>
            <h2
              id="product"
              data-testid="product-title"
              className={styles["pdp-section-title"]}
            >
              {movie.title}
            </h2>
            <div data-testid="product-view" className={styles["product-view"]}>
              <div className={styles["product-img"]}>
                <img src={getImageURL(movie.poster_path)} alt={movie.title} />
              </div>
              <div className={styles["product-details"]}>
                <div className={styles["product-description"]}>
                  <span>Overview</span>
                  <span>{movie.overview}</span>
                  <span>Release Date</span>
                  <span>{movie.release_date}</span>
                  <span>Status</span>
                  <span>{movie.status}</span>
                  <span>Rating</span>
                  <span>{movie.vote_average}/10</span>
                </div>
                <Button>Add to Wishlist</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PDP;
