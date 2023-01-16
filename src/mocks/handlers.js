import { rest } from "msw";
import { mockMovies } from "utils/constants";

const delay = 150;

const handlers = [
  rest.get("*/3/movie/:param", (req, res, ctx) => {
    const api_key = req.url.searchParams.get("api_key");
    const { param } = req.params;
    const isMovieId = !isNaN(Number(param));
    let response = mockMovies[param];
    
    if (isMovieId) {
      response = mockMovies.movieById;
    }

    if (!api_key) {
      return res(ctx.json(mockMovies.invalid));
    }

    if (response) {
      return res(ctx.json(response), ctx.delay(delay));
    } else {
      return res(ctx.json(mockMovies.notfound), ctx.delay(delay));
    }
  }),
  rest.get("*/3/movie/:movieId", (req, res, ctx) => {
    const api_key = req.url.searchParams.get("api_key");
    const { movieId } = req.params;
    const moviesByCategory = mockMovies.movieById;

    if (!api_key) {
      return res(ctx.json(mockMovies.invalid));
    }

    if (moviesByCategory) {
      return res(ctx.json(moviesByCategory), ctx.delay(delay));
    } else {
      return res(ctx.json(mockMovies.notfound), ctx.delay(delay));
    }
  }),
];

export default handlers;
