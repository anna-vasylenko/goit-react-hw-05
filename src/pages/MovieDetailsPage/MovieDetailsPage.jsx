import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import { useEffect, useRef, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieById();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={goBackRef.current}>Go Back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>User Score: {movie.vote_average.toFixed(1)}</p>
      <div>
        <p>
          Overwiew <span>{movie.overview}</span>
        </p>

        <p>
          Genres
          <span> {movie.genres.map((genre) => genre.name).join(", ")}</span>
        </p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
