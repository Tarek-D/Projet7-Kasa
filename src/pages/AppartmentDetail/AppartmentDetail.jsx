import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DropdownCard from "../../Components/DropdownCard/DropdownCard.jsx";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import Tag from "../../Components/Tag/Tag.jsx";
import appartments from "../../data/appartments.json";
import "./appartmentDetail.css";
import Rate from "../../Components/Rate/Rate.jsx";
import Host from "../../Components/Host/Host.jsx";
import Error from "../Error/Error";

function AppartmentDetail() {
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: "",
    rating: "",
    host: { name: "", picture: "" },
    location: "",
  });

  const { id } = useParams();

  useEffect(() => {
    appartments.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id]);

  const equipments = logement.equipments.map((equipment, index) => (
    <>
      {equipment}
      <br key={index} />
    </>
  ));

  if (logement.title === undefined) {
    return <Error />;
  }

  return (
    <main>
      <div>
        <Carousel images={logement.pictures} />
        <div className="appartment-details">
          <div>
            <h1 className="appartment-title">{logement.title}</h1>
            <span className="location-text">{logement.location}</span>
            <div className="tag-list">
              {logement.tags.map((tag, index) => (
                <Tag title={tag} key={index} />
              ))}
            </div>
          </div>
          <div className="host-and-rate">
            <Host name={logement.host.name} img={logement.host.picture} />
            <Rate numStars={logement.rating} />
          </div>
        </div>
        <div className="description-equipment">
          <DropdownCard
            title="Description"
            description={logement.description}
          />
          <DropdownCard
            title="Equipement"
            description={equipments}
            key={equipments.index}
          />
        </div>
      </div>
    </main>
  );
}

export default AppartmentDetail;
