# films-by-category
Films by category with Details/Description/Product-Description-Page(PDP) and Wish-List page.

### How to run project
- install NodeJS from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- `npm i`
- `npm start`

Open [http://localhost:3000](http://localhost:3000) in browser to view.

### `npm start`
Run the project in development mode.

### `npm run mock`
Run the project with mock-data and mock-fetch.

### `npm run  test`
Run test cases in watch mode.

### `npm run  build`
Builds the app for production to the `build` folder.

### Technology Stack used
`ReactJS, Redux (ReduxJS-Toolkit), SCSS`

### Description
- Used `https://www.themoviedb.org/` free Public-API.
- `Home-Page` render 3-carousels for `Popular, Top Rated, and Upcoming`
- OnClick of any `tile` from the carousel takes you to the `Details/Description/Product-Description-Page(PDP)`, which renders more information about the selected Item.
  - OnClick of `Wishlist-Button` you can add/remove items into/from `wishlist`, and while doing it you can see the count in the header.
  - OnClick of `Watch-Button`, you will go to external-link to watch the item in new-tab.

### Problems
- There is no way to do TheMovieDB-API call with multiple movieIDs (eg: http://api.themoviedb.org/3/movie/10,11,12?api_key=api_key)
  - So can't render wishlist-page independently by just using movieIDs-list, let's say on refresh.
