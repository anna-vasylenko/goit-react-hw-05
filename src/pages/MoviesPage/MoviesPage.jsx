import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        const data = await searchMovie(query);
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieByQuery();
  }, [searchParams]);

  const handleSubmit = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
