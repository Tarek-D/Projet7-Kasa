import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DropdownCard from "../../Components/DropdownCard/DropdownCard.jsx";
import Gallery from "../../Components/Gallery/Gallery.jsx";
import Tag from "../../Components/Tag/Tag.jsx";
import appartments from "../../data/appartments.json";
import "./appartmentDetail.css";
import Rate from "../../Components/Rate/Rate.jsx";
import Host from "../../Components/Host/Host.jsx";

function AppartmentDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state;
  const appartment = appartments.find((appartment) => appartment.id === id);
  
  if (!appartment) {
    navigate("/error");
    return null;
  }
  const equipments = appartment.equipments.join("\n");
  
  return (
    <div>
      <Gallery images={appartment.pictures} />
    <div className="appartment-details">
      <div>
        <h1 className="appartment-title">{appartment.title}</h1>
        <span className="location-text">{appartment.location}</span>
        <div className="tag-list">
          {appartment.tags.map((tag) => (
            <Tag title={tag} />
          ))}
        </div>
        
      </div>
      <div>
          <Host name={appartment.host.name} img={appartment.host.picture} />
          <Rate numStars={appartment.rating} />
        </div>
    </div>
    <div className="description-equipment">
        <DropdownCard
          title="Description"
          description={appartment.description}
        />
        <DropdownCard title="Equipement" description={equipments} />
      </div>
    </div>
  );
}

export default AppartmentDetail;
