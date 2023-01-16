import React from "react";
import { render } from "utils/test-utils";
import Home from ".";
import MoviesCarousel from "containers/MoviesCarousel";
import { MOVIE_CATEGORY_OPTIONS } from "utils/constants";

jest.mock("containers/MoviesCarousel", () => jest.fn(() => <div>MoviesCarousel</div>));

describe("Home Page", () => {
  it(`Should invoke MoviesCarousel for every category in the list`, () => {
    render(<Home />);

    expect(MoviesCarousel.mock.calls.length).toEqual(
      MOVIE_CATEGORY_OPTIONS.length
    );
    MOVIE_CATEGORY_OPTIONS.forEach(({ title, category }) => {
      expect(MoviesCarousel).toHaveBeenCalledWith(
        {
          title,
          category,
        },
        {}
      );
    });
  });
});
