import Collapse from "../../Components/Collapse/Collapse.jsx";
import image from "../../assets/About/Section1.png";
import "./about.css";

const altDescription = "photo d'un massif de montagne";
const abouts = {
  Fiabilité:
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  Respect:
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  Service:
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  Sécurité:
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

function About() {
  return (
    <main>
    <div className="about-section">
      <img src={image} alt={altDescription} />
      {/* maps through the "abouts" object using the "Object.entries()" 
      method to generate a "Collapse" component for each title-description pair, 
      with a unique key "index" and "id" prop */}
      {Object.entries(abouts).map(([key, value], index) => (
        <Collapse key={index} id={index} title={key} description={value} />
      ))}
    </div>
    </main>
  );
}

export default About;