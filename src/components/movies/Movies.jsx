import "./movies.css";
import { useGlobalContext } from "../../contex";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <div className="movies">
      {movies.map((movie) => {
        const {
          id,
          i: { imageUrl },
          l,
          rank,
        } = movie;
        return (
          <Link to={`movies/${id}`} key={id}>
            <div className="movieBox">
              <img src={imageUrl} alt="movie" />
              <div className="movieInfo">
                <p>{l}</p>
                <span>{rank}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
