import { useState } from "react";
import constate from "constate";

const useHome = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return {
    formSubmitted,
    setFormSubmitted,
  };
};

const [HomeProvider, useHomeContext] =
  constate(useHome);
export { HomeProvider, useHomeContext };
