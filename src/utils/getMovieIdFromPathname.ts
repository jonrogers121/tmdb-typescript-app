export const getMovieIdFromPathname = (path: string) => {
  return path.split('/').pop();
};
