import "./host.css";
import React from 'react'

function Host({name, img}) {
    const nameParts = name.split(' ');

    return (
        <div className="host">
          {nameParts.map((part, index) => (
            // Render in two lines
            <React.Fragment key={index}>
              {part}
              {index < nameParts.length - 1 && <br />}
            </React.Fragment>
          ))}
          <img src={img} alt={"photo de " + name} />
        </div>
      );
}

export default Host;



