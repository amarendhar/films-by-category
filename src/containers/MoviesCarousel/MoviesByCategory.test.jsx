import React from "react";
import { render, screen, waitFor, within } from "utils/test-utils";
import MoviesCarousel from ".";
import { getRating } from "utils/movieUtils";
import {
  getImageURL,
  mockMovies,
  MOVIE_CATEGORY_OPTIONS,
} from "utils/constants";

describe("MoviesCarousel", () => {
  it(`Should render with loading state initially`, () => {
    const { title, category } = MOVIE_CATEGORY_OPTIONS[0];
    render(<MoviesCarousel title={title} category={category} />);

    screen.getByText(`${title} Movies`);
    screen.getByTestId("loading");
    expect(screen.queryAllByTestId("list-item").length).toEqual(0);
  });

  it(`Should render with movies-list`, async () => {
    const movies = mockMovies.popular.results;
    const { category } = MOVIE_CATEGORY_OPTIONS[0];
    render(<MoviesCarousel category={category} />);

    await waitFor(() => {
      screen.getAllByTestId("list-item");
    });

    expect(screen.getAllByTestId("list-item").length).toEqual(movies.length);

    screen.getAllByTestId("list-item").forEach((listItem, key) => {
      const movie = movies[key];
      within(listItem).getByText(getRating(movie.vote_average));
      within(listItem).getByText(movie.title);
      expect(listItem.querySelector("img").src).toEqual(
        getImageURL(movie.poster_path)
      );
    });
  });

  it.skip("Should navigate to details-page onClick of list-item", async () => {
    const { user } = render(
      <MoviesCarousel {...MOVIE_CATEGORY_OPTIONS[0]} />,
      { route: `/` }
    );

    await waitFor(() => {
      screen.getAllByTestId("list-item");
    });
    await user.click(screen.getAllByTestId("list-item")[0]);

    screen.getByTestId("pdp-section");
  });
});
