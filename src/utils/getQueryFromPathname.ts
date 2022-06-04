export const getQueryFromPathname = (path: string) => {
  return path.split('/').pop();
};
