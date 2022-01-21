import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../contex";
import "./singel.css";
import { Link } from "react-router-dom";

const Singel = () => {
  const { id } = useParams();
  console.log(id);
  const { movies } = useGlobalContext();

  const clickedMovie = movies.find((movie) => movie.id === id);
  console.log(clickedMovie);
  const {
    i: { imageUrl },
    l,
    rank,
  } = clickedMovie;
  return (
    <div className="singelMovie">
      <img src={imageUrl} alt="" />
      <div className="singelMovieInfo">
        <h2>{l}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima totam
          similique accusantium atque nobis inventore illum ipsum ducimus
          accusamus facere maiores incidunt unde nemo officia reprehenderit
          omnis nesciunt, aut tempora.
        </p>
        <span>{rank} </span>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Singel;
