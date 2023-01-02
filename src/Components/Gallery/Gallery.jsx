import React, { useState } from 'react';
import arrowback from "../../assets/Arrows/arrow_back.svg"
import arrowforward from "../../assets/Arrows/arrow_forward.svg"
import "./gallery.css"

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="image-carousel">
            { images.length > 1 && 
        <div className="btn-previous" onClick={handlePreviousClick}><img src={arrowback} alt="" /></div>
      }
      <img src={images[currentIndex]} className="gallery" alt={"Carousel image " + currentIndex} />
      { images.length > 1 && 
        <p className="carousel-counter">{currentIndex + 1}/{images.length}</p>
      }
       { images.length > 1 && 
        <div className="btn-next" onClick={handleNextClick}><img src={arrowforward} alt="" /></div>
      }
    </div>
  );
}

export default Gallery;