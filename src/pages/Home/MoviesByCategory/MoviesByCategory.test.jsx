import React from "react";
import { render, screen, waitFor, within } from "utils/test-utils";
import MoviesByCategory from ".";
import { mockMovies, MOVIE_CATEGORY_OPTIONS } from "constants";

describe("MoviesByCategory", () => {
  it(`Should render with loading state initially`, () => {
    const { title, category } = MOVIE_CATEGORY_OPTIONS[0];
    render(<MoviesByCategory title={title} category={category} />);

    screen.getByText(`${title} Movies`);
    screen.getByTestId("loading");
    expect(screen.queryAllByTestId("list-item").length).toEqual(0);
  });

  it(`Should render with movies-list`, async () => {
    const { category } = MOVIE_CATEGORY_OPTIONS[0];
    render(<MoviesByCategory category={category} />);

    await waitFor(() => {
      screen.getAllByTestId("list-item");
    });

    expect(screen.getAllByTestId("list-item").length).toEqual(
      mockMovies.popular.results.length
    );

    screen.getAllByTestId("list-item").forEach((listItem, key) => {
      expect(
        within(listItem).getByText(
          `${mockMovies.popular.results[key].vote_average}/10`
        )
      );
    });
  });

  it("Should navigate to details-page onClick of list-item", async () => {
    const { user } = render(
      <MoviesByCategory {...MOVIE_CATEGORY_OPTIONS[0]} />,
      { route: "/" }
    );

    await waitFor(() => {
      screen.getAllByTestId("list-item");
    });
    await user.click(screen.getAllByTestId("list-item")[0]);

    screen.getByTestId("details-page");
  });
});
