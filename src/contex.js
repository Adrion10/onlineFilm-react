import { createContext, useContext, useEffect, useState } from "react";
const ContextApp = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Ironman");
  const fetchMovies = async () => {
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fbbcbdfb33mshdb975f5e6272a03p1428ebjsn1627d5753bb6",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <ContextApp.Provider value={{ query, setQuery }}>
      {children}
    </ContextApp.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ContextApp);
};
export default AppProvider;
