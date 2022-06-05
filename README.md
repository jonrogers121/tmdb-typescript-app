### Running the app

To fire up the project run `yarn` and then `yarn start` in the root directory

### ES Linting

To run a linting check, run `yarn lint`, or run `yarn format` to check and fix formatting errors. `yarn lint` has also been added to github actions, so will run as a pre-check on any pull request to the main branch

### End to End testing

To check the output, playwright is installed for end to end testing. This checks for outputs on the home page and the search page. To activate these tests run `yarn test:e2e`

### Styling

This app uses styled components.

### Demo

A demo of the app is available at tmdb-test-app.netlify.app. To run locally you will need to add a TVDB api key to an .env file

### Performance improvements

The api call uses useMemo to enable caching on api requests and make the app more perfomant. A future improvement would be to add lazy loading to the movie cards on the home and search results page
