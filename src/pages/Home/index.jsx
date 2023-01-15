import React from "react";
import MoviesByCategory from "./MoviesByCategory";
import { MOVIE_CATEGORY_OPTIONS } from "utils/constants";

/**
 * ToDo: NIT:
 *  https://developers.themoviedb.org/3/getting-started/append-to-response
 *    Can do multiple request in single API with append_to_response.
 *      eg: https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
 *
 */
const Home = () => {
  return (
    <>
      {MOVIE_CATEGORY_OPTIONS.map(({ title, category }) => {
        return (
          <MoviesByCategory key={category} title={title} category={category} />
        );
      })}
    </>
  );
};

export default Home;
