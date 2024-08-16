import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsById = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReviewsById();
  }, [movieId]);

  return (
    <div>
      {!reviews.length && <h3>We don't have any reviews for this movie</h3>}
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
