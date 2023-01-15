import {
  moviesByPopular,
  moviesByTopRated,
  moviesByUpcoming,
  moviesNotFound,
  moviesInvalidRequest,
} from "./mocks";

export const MOVIE_CATEGORIES = {
  POPULAR: "popular",
  TOP_RATED: "top_rated",
  UPCOMING: "upcoming",
};

export const mockMovies = {
  [MOVIE_CATEGORIES.POPULAR]: moviesByPopular,
  [MOVIE_CATEGORIES.TOP_RATED]: moviesByTopRated,
  [MOVIE_CATEGORIES.UPCOMING]: moviesByUpcoming,
  notfound: moviesNotFound,
  invalid: moviesInvalidRequest,
};

export const MOVIE_CATEGORY_OPTIONS = [
  { title: "Popular", category: MOVIE_CATEGORIES.POPULAR },
  { title: "Top Rated", category: MOVIE_CATEGORIES.TOP_RATED },
  { title: "Upcoming", category: MOVIE_CATEGORIES.UPCOMING },
];

export const API_KEY = "39e1bdb3431bd6252b6c6c3ed22d3b9c";
export const BASE_URL = "https://api.themoviedb.org/3/movie";
export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const ERROR_RESPONSE = "The resource you requested could not be found.";
export const getMoviesURL = (category) =>
  `${BASE_URL}/${category}?api_key=${API_KEY}`;
export const getImageURL = (path) => `${BASE_IMAGE_URL}/${path}`;
