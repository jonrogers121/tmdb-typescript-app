import { useState } from "react";
import constate from "constate";

const useMovie = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return {
    formSubmitted,
    setFormSubmitted,
  };
};

const [MovieProvider, useMovieContext] =
  constate(useMovie);
export { MovieProvider, useMovieContext };
