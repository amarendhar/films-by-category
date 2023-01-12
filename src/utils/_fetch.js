import moviesByPopular from "../mocks/moviesByPopular";
import moviesByTopRated from "../mocks/moviesByTopRated";
import moviesByUpcoming from "../mocks/moviesByUpcoming";
import moviesNotFound from "../mocks/moviesNotFound";
import { MOVIE_CATEGORIES } from "../constants";

const movies = {
  [MOVIE_CATEGORIES.POPULAR]: moviesByPopular,
  [MOVIE_CATEGORIES.TOPRATED]: moviesByTopRated,
  [MOVIE_CATEGORIES.UPCOMING]: moviesByUpcoming,
};

const constructResJSON = (data) => {
  return {
    json: () =>
      new Promise((res, rej) => {
        res(data);
      }),
  };
};

// ToDo: Temporary code till development is done, to avoid maximum calls reached on movies-API.
const _fetch = (category) =>
  new Promise((_res, _rej) => {
    setTimeout(() => {
      const moviesByCategory = movies[category];

      if (moviesByCategory) {
        _res(constructResJSON(moviesByCategory));
      } else {
        _res(constructResJSON(moviesNotFound));
      }
    }, 100);
  });

export default _fetch;
