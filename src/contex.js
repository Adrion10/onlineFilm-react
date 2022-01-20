import { createContext, useContext } from "react";

const AppProvider = () => {
  const fetchMovies = async () => {
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ac15c909abmshc1f9e05404f21bap1c4186jsnc8db3c9e6c8a",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
export default AppProvider;
