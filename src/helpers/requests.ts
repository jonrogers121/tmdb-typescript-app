export const BASE_URL = 'https://api.themoviedb.org/3';

const createUrl = (base: string, path: any) => `${base}${path}api_key=${process.env.API_KEY}`;

export const getPopularMovies = () => [createUrl(BASE_URL, '/movie/popular?')];
export const getMovieDetails = (id: string) => [createUrl(BASE_URL, `/movie/${id}?`)];
export const getSearchResults = (term: string) => [
  createUrl(BASE_URL, `/search/movie?query=${term}&`)
];
