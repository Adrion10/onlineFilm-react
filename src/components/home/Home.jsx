import "./home.css";
import Search from "../search/Search";
import Movies from "../movies/Movies";

const Home = () => {
  return (
    <div className="home">
      <Search />
      <Movies />
    </div>
  );
};

export default Home;
