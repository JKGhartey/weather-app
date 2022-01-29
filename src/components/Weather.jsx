import React from "react";

const Weather = ({
  city,
  country,
  temp_celsius,
  temp_max,
  temp_min,
  description,
  weatherIcon,
  main,
  error,
}) => {
  return (
    <div className="container">
      <div className="cards">
        <h1>
          {city},{country}{" "}
        </h1>
        <h5 className="py-4">
          <i className={`wi ${weatherIcon} display-1`}></i>
        </h5>
        <h1 className="py-2">{temp_celsius}&deg;</h1>

        {/* Show max and min Temp */}
        {minmaxTemp(temp_min, temp_max)}

        <h4 className="py-3">{description} </h4>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}

export default Weather;
