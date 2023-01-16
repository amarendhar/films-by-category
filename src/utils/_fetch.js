import { mockMovies } from "utils/constants";

const constructResJSON = (data) => {
  return {
    json: () =>
      new Promise((res, rej) => {
        res(data);
      }),
  };
};

// ToDo: Temporary fetch-polyfill with mock-data till development is done, to avoid maximum calls reached on movies-API.
const _fetch = (value) =>
  new Promise((_res, _rej) => {
    setTimeout(() => {
      let response = mockMovies[value];

      if (value.includes("movieId")) {
        const movieId = Number(value.replace("movieId=", ""));
        response = { ...mockMovies.movieById, id: movieId };
      }

      if (response) {
        _res(constructResJSON(response));
      } else {
        _res(constructResJSON(mockMovies.notfound));
      }
    }, 100);
  });

export default _fetch;
