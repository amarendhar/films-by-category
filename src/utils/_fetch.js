import { mockMovies } from "constants";

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
      const moviesByCategory = mockMovies[category];

      if (moviesByCategory) {
        _res(constructResJSON(moviesByCategory));
      } else {
        _res(constructResJSON(mockMovies.notfound));
      }
    }, 100);
  });

export default _fetch;
