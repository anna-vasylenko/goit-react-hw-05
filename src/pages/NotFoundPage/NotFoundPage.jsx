import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>OOPS!</h2>
      <p>WE can't find the page you're looking for!</p>
      <Link to="/">BACK TO HOME</Link>
    </div>
  );
};

export default NotFoundPage;
