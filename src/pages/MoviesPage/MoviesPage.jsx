import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { searchMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

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

  const handleSubmit = (values, actions) => {
    searchParams.set("query", values.search);
    setSearchParams(searchParams);
    actions.resetForm();
  };

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <div>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="search" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default MoviesPage;
