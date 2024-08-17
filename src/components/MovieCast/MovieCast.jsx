import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCastById();
  }, [movieId]);

  return (
    <div>
      <ul className={s.movieCast}>
        {cast.map((item) => (
          <li key={item.id} className={s.actorItem}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
