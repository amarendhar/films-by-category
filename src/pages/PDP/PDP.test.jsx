import React from "react";
import { render, screen, waitFor } from "utils/test-utils";
import PDP from ".";
import { formateValue, getValues, getRating } from "utils/movieUtils";
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
    screen.getByText(movie.status);
    screen.getByText(movie.release_date);
    screen.getByText(getRating(movie.vote_average));
    screen.getByText(formateValue(movie.vote_count));
    screen.getByText(`${movie.runtime} mins`);
    screen.getByText(`$${formateValue(movie.budget)}`);
    screen.getByText(`$${formateValue(movie.revenue)}`);
    screen.getByText(getValues(movie.spoken_languages, ", "));
    screen.getByText(getValues(movie.genres, " / "));
    screen.getByText(getValues(movie.production_companies, ", "));
    screen.getByText("Wishlist");
    screen.getByText("Watch");
    expect(screen.getByTestId("product-view").querySelector("img").src).toEqual(
      getImageURL(movie.poster_path)
    );
  });
});
