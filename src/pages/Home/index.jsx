import React from "react";
import MoviesByCategory from "./MoviesByCategory";
import { MOVIE_CATEGORIES } from "../../constants";

const Home = () => {
  return (
    <>
      {Object.values(MOVIE_CATEGORIES).map((category) => {
        return <MoviesByCategory key={category} category={category} />;
      })}
    </>
  );
};

export default Home;
