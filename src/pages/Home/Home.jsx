import image from "../../assets/Home/Section1.png";
import appartments from "../../data/appartments";
import Card from "../../Components/Card/Card.jsx";
import "./home.css";

function Home() {
  return (
    <div>
      <img src={image} alt="" />
      <section className="cards">
        { appartments.map((appartement) => (
          <Card
            id={appartement.id}
            image={appartement.cover}
            title={appartement.title}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;