import "./card.css";
import { Link } from "react-router-dom";

function Card({ id, image, title }) {
  return (
    <Link to={`/AppartmentDetail/${id}`} state ={id}>
      <div className="card" id={id}>
        <img src={image} alt="" />
        <p className="card-title">{title}</p>
      </div>
    </Link>
  );
}

export default Card;