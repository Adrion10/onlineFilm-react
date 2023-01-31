import { createContext, useContext, useEffect, useState } from "react";
const ContextApp = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avengers");
  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    setIsLoading(true);
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fbbcbdfb33mshdb975f5e6272a03p1428ebjsn1627d5753bb6",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.d);
        setIsLoading(false);
        console.log(data.d);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <ContextApp.Provider value={{ query, setQuery, movies, isLoading }}>
      {children}
    </ContextApp.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ContextApp);
};
export default AppProvider;
