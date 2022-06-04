import { useMemo } from "react";
import { getPopularMovies } from "../helpers/requests";
import useFetch from "./useFetch";

const usePopularMovies = () => {
  const request: any = useMemo(() => getPopularMovies(), []);
  return useFetch(request);
};

export default usePopularMovies;