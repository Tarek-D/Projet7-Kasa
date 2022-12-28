import image from "../../assets/Home/Section1.png";
import appartments from "../../data/appartments";
import Card from "../../Components/Card/Card.jsx";
import "./home.css";

function Home() {
  return (
    <main>
    <div>
      <img src={image} alt="" className="img-home-header" />
      <section className="cards">
        { appartments.map((appartement, index) => (
          <Card
            id={appartement.id}
            image={appartement.cover}
            title={appartement.title}
            key={index}
          />
          
        ))}
      </section>
    </div>
    </main>
  );
}

export default Home;