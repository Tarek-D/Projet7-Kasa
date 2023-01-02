import { useParams } from "react-router-dom";
import { useEffect,  useState } from "react";
import DropdownCard from "../../Components/DropdownCard/DropdownCard.jsx";
import Gallery from "../../Components/Gallery/Gallery.jsx";
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
    location: ""
  });

  const { id } = useParams();

  useEffect(() => {
    appartments.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id])

  const equipments = logement.equipments.map((equipment) => (
    <>
      {equipment}
      <br />
    </>
  ));

  if (logement.title === undefined){
    return <Error />
  }



  /*
  let mapEquipement = logement.equipments.map((l, index) => {
    <><p> {logement.equipments[index]} </p> <br/></>
  })
  */


  /*
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
 
  */

  return (
    <main>
      <div>
        <Gallery images={logement.pictures} />
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
          <DropdownCard title="Equipement" description={equipments} />             
        </div>
      </div>
    </main>

  );
}

export default AppartmentDetail;
