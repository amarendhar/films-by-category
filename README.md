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

### `npm run test`
Run test cases in watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### Technology Stack used
- `ReactJS, Redux, Redux-Logger, SASS, Jest, React-Testing-Library, msw, fortawesome`
- `ReduxJS-Toolkit`
  - It's a great toolkit, by default it comes with tools such as `redux-thunk, redux-promise-middleware & immer`, which reduces boiler-plate-code dramatically, hence easy to manage redux-state.
- `Redux-Logger`
  - Used to console-log the redux-actions for development/debugging purpose.
- `msw (Mock-Service-Worker)`
  - Used to mock API-calls in testing-environment, it's an API mocking library uses Service-Worker-API to intercept actual requests.
- `SASS`
  - Used to write css-code.
- `Jest and React-Testing-Library`
  - Used to write test-cases for React-Components and Hooks.
- `fortawesome`
  - Used to render icons such as `Wishlist and Play/Watch`.

### Description
- `https://www.themoviedb.org/` free Public-API is used.
- `Home-Page` render 3-carousels for `Popular, Top Rated, and Upcoming`
- OnClick of any `tile` from the carousel takes you to the `Details/Description/Product-Description-Page(PDP)`, which renders more information about the selected Item such as `Overview, Status, Release Date, Rating, Votes, Duration, Budget, Revenue, Languages, Genres, Production, Wishlist-Button, and Watch-Button`.
  - `Wishlist-Button` adds/remove items into/from `wishlist`, and updates wishlist count in the header.
  - `Watch-Button` will go to external-link to watch the item in new-tab.
- `_fetch-polyfill` will be used with `mock-data`, when running the app in `mock-environment` with `npm run mock`,

### Problems
- There is no way to do TheMovieDB-API call with multiple movieIDs (eg: http://api.themoviedb.org/3/movie/10,11,12?api_key=api_key)
  - So can't render wishlist-page independently by just using movieIDs-list, let's say on refresh.
