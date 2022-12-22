import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="error-page">
      <h1 className="error-page-title">404</h1>
      <p className="error-description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <span className="error-link">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </span>
    </div>
  );
}

export default Error;