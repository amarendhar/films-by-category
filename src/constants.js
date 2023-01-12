export const API_KEY = "39e1bdb3431bd6252b6c6c3ed22d3b9c";
export const BASE_URL = "https://api.themoviedb.org/3/movie";
export const MOVIE_CATEGORIES = {
  POPULAR: "popular",
  TOPRATED: "toprated",
  UPCOMING: "upcoming",
};
export const ERROR_RESPONSE = "The resource you requested could not be found.";
export const getMoviesURL = (category) =>
  `${BASE_URL}/${category}?api_key=${API_KEY}`;
