import { useState } from "react";
import constate from "constate";

const useSearch = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return {
    formSubmitted,
    setFormSubmitted,
  };
};

const [SearchProvider, useSearchContext] =
  constate(useSearch);
export { SearchProvider, useSearchContext };
