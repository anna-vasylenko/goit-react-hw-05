import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
