import React from "react";
import { render } from "utils/test-utils";
import Home from ".";
import MoviesByCategory from "./MoviesByCategory";
import { MOVIE_CATEGORY_OPTIONS } from "utils/constants";

jest.mock("./MoviesByCategory", () =>
  jest.fn(() => <div>MoviesByCategory</div>)
);

describe("Home Page", () => {
  it(`Should invoke MoviesByCategory for every category in the list`, () => {
    render(<Home />);

    expect(MoviesByCategory.mock.calls.length).toEqual(
      MOVIE_CATEGORY_OPTIONS.length
    );
    MOVIE_CATEGORY_OPTIONS.forEach(({ title, category }) => {
      expect(MoviesByCategory).toHaveBeenCalledWith(
        {
          title,
          category,
        },
        {}
      );
    });
  });
});
