import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCirclePlus,
  faHeartCircleMinus,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Loader, Button, Tooltip } from "components";
import usePDP from "./usePDP";
import { formateValue, getValues, getRating } from "utils/movieUtils";
import { STATUS, getImageURL } from "utils/constants";
import styles from "./styles.scss";

// Details/Description/Product-Description-Page(PDP)
const PDP = () => {
  const { movieId } = useParams();
  const { status, movie, error, isAddedToWishlist, handleWishList } = usePDP({
    movieId,
  });

  return (
    <section
      data-testid="pdp-section"
      className={styles.section}
      role="group"
      aria-labelledby="product"
    >
      <div className={styles["product"]}>
        <Loader loading={status === STATUS.PENDING} error={error} />
        {status === STATUS.FULFILLED && movie && (
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
                  <span>Status</span>
                  <span>{movie.status}</span>
                  <span>Release Date</span>
                  <span>{movie.release_date}</span>
                  <span>Rating</span>
                  <span>{getRating(movie.vote_average)}</span>
                  <span>Votes</span>
                  <span>{formateValue(movie.vote_count)}</span>
                  <span>Duration</span>
                  <span>{movie.runtime} mins</span>
                  <span>Budget</span>
                  <span>${formateValue(movie.budget)}</span>
                  <span>Revenue</span>
                  <span>${formateValue(movie.revenue)}</span>
                  {movie.spoken_languages?.length > 0 && (
                    <>
                      <span>Languages</span>
                      <span>{getValues(movie.spoken_languages, ", ")}</span>
                    </>
                  )}
                  {movie.genres?.length > 0 && (
                    <>
                      <span>Genres</span>
                      <span>{getValues(movie.genres, " / ")}</span>
                    </>
                  )}
                  {movie.production_companies?.length > 0 && (
                    <>
                      <span>Production</span>
                      <span>{getValues(movie.production_companies, ", ")}</span>
                    </>
                  )}
                </div>
                <div className={styles["buttons-group"]}>
                  <Tooltip
                    content={
                      isAddedToWishlist
                        ? "Remove from Wishlist"
                        : "Add to Wishlist"
                    }
                  >
                    <Button onClick={handleWishList}>
                      <FontAwesomeIcon
                        icon={
                          isAddedToWishlist
                            ? faHeartCircleMinus
                            : faHeartCirclePlus
                        }
                        size="lg"
                        color="white"
                      />
                      <span>&nbsp;Wishlist</span>
                    </Button>
                  </Tooltip>
                  <Tooltip content="Watch this">
                    <a href={movie.homepage} target="_blank">
                      <Button>
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          size="lg"
                          color="white"
                        />
                        <span>&nbsp;Watch</span>
                      </Button>
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PDP;
