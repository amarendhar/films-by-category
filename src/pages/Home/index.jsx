import React from "react";
import MoviesByCategory from "./MoviesByCategory";
import { MOVIE_CATEGORY_OPTIONS } from "constants";

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
