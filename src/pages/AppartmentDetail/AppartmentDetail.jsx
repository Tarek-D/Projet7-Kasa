import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import DropdownCard from "../../Components/DropdownCard/DropdownCard.jsx";
import Gallery from "../../Components/Gallery/Gallery.jsx";
import Tag from "../../Components/Tag/Tag.jsx";
import appartments from "../../data/appartments.json";
import "./appartmentDetail.css";
import Rate from "../../Components/Rate/Rate.jsx";
import Host from "../../Components/Host/Host.jsx";

function AppartmentDetail() {
  const location = useLocation() || "default-id";
  const navigate = useNavigate();
  const id = location.state;
  const { iduseParams } = useParams();
  console.log(iduseParams);
  // ISSUE TO FIX IF ACCESSING FROM URL, USER DOESNT HAVE USE LOCATON STATE 
  
  const appartment = appartments.find((appartment) => appartment.id === id);
  const appartmentRef = useRef(appartment)

  useEffect(() => {
    if (!appartmentRef.current) {
      navigate("/error");
    }
  }, [navigate]);

  if (!appartment) {
    return null;
  }
  const equipments = appartment.equipments.map((equipment, index) => (
    <>
      {equipment}
      <br />
    </>
  ));
  
  return (
    <main>
    <div>
      <Gallery images={appartment.pictures} />
    <div className="appartment-details">
      <div>
        <h1 className="appartment-title">{appartment.title}</h1>
        <span className="location-text">{appartment.location}</span>
        <div className="tag-list">
          {appartment.tags.map((tag, index) => (
            <Tag title={tag} key={index}/>
          ))}
        </div>
        
      </div>
      <div className="host-and-rate">
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
    </main>
  );
}

export default AppartmentDetail;
