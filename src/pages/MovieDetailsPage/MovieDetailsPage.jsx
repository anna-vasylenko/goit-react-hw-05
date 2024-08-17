import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../services/api";
import s from "./MovieDetailPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");

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

  if (!movie) return;

  return (
    <div className={s.wrapper}>
      <Link to={goBackRef.current} className={s.link}>
        Go Back
      </Link>
      <div className={s.infoWrapper}>
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
        <div className={s.dscrWrapper}>
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
        </div>
      </div>
      <div className={s.information}>
        <p className={s.title}>Additional information</p>
        <ul className={s.list}>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
