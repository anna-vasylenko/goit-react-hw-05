import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.movieList}>
      {movies.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id.toString()}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
