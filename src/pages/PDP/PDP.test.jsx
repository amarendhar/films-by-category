import React from "react";
import { render, screen, waitFor, within } from "utils/test-utils";
import PDP from ".";
import {
  getImageURL,
  mockMovies,
  MOVIE_CATEGORY_OPTIONS,
} from "utils/constants";

describe("PDP-Page", () => {
  it(`Should render with loading state initially`, () => {
    const { title, category } = MOVIE_CATEGORY_OPTIONS[0];
    render(<PDP title={title} category={category} />, {
      route: `/p/movieId`,
    });

    screen.getByTestId("loading");
    expect(screen.queryByTestId("product-title")).not.toBeInTheDocument();
    expect(screen.queryByTestId("product-view")).not.toBeInTheDocument();
  });

  it("Should render product with details", async () => {
    const movie = mockMovies.movieId;
    const { title, category } = MOVIE_CATEGORY_OPTIONS[0];
    render(<PDP title={title} category={category} />, {
      route: `/p/movieId`,
    });

    await waitFor(() => {
      screen.getByTestId("product-title");
    });

    screen.getByText(movie.overview);
    screen.getByText(movie.release_date);
    screen.getByText(movie.status);
    screen.getByText(`${movie.vote_average}/10`);
    screen.getByText("Add to Wishlist");
    expect(screen.getByTestId("product-view").querySelector("img").src).toEqual(
      getImageURL(movie.poster_path)
    );
  });
});
