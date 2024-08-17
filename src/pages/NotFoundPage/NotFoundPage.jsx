import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h2>OOPS!</h2>
      <p>We can't find the page you're looking for!</p>
      <Link to="/" className={s.link}>
        BACK TO THE HOME PAGE
      </Link>
    </div>
  );
};

export default NotFoundPage;
