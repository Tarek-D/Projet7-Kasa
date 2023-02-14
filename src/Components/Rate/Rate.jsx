import React from 'react';
import redstar from "../../assets/Rate/star_rate_FF6060.svg";
import greystar from "../../assets/Rate/star_rate_E3E3E3.svg";

const Rate = ({ numStars }) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    // First loop creates red stars based on the "numStars" prop
    stars.push(
        <img key={i} src={redstar} alt="Red star" />
    );
  }
  // second loop creates the remaining grey stars to complete a total of five stars
  for (let i = numStars; i < 5; i++) {
    stars.push(
        <img key={i} src={greystar} alt="Grey star" />
    );
  }
  // Return the array of stars 
  return (
    <div>
      {stars}
    </div>
  );
};

export default Rate;