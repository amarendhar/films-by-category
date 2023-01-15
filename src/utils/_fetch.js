import { mockMovies } from "utils/constants";

const constructResJSON = (data) => {
  return {
    json: () =>
      new Promise((res, rej) => {
        res(data);
      }),
  };
};

// ToDo: Temporary code till development is done, to avoid maximum calls reached on movies-API.
const _fetch = (value) =>
  new Promise((_res, _rej) => {
    setTimeout(() => {
      const moviesByCategory = mockMovies[value];

      if (moviesByCategory) {
        _res(constructResJSON(moviesByCategory));
      } else {
        _res(constructResJSON(mockMovies.notfound));
      }
    }, 100);
  });

export default _fetch;
