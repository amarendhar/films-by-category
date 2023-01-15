import { rest } from "msw";
import { mockMovies } from "utils/constants";

const delay = 150;

const handlers = [
  rest.get("*/3/movie/:category", (req, res, ctx) => {
    const api_key = req.url.searchParams.get("api_key");
    const { category } = req.params;
    const moviesByCategory = mockMovies[category];

    if (!api_key) {
      return res(ctx.json(mockMovies.invalid));
    }

    if (moviesByCategory) {
      return res(ctx.json(moviesByCategory), ctx.delay(delay));
    } else {
      return res(ctx.json(mockMovies.notfound), ctx.delay(delay));
    }
  }),
  rest.get("*/3/:movieId", (req, res, ctx) => {
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
