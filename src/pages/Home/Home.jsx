import image from "../../assets/Home/nature-img.png";
import appartments from "../../data/appartments";
import Card from "../../Components/Card/Card.jsx";
import "./home.css";

function Home() {
  return (
    <main>
      <div className="top-img-and-title">
        <img src={image} alt="" className="img-home-header" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <section className="cards">
        {/* Map over appartments to render each appartment*/}
        {appartments.map((appartement, index) => (
          <Card
            id={appartement.id}
            image={appartement.cover}
            title={appartement.title}
            key={index}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
