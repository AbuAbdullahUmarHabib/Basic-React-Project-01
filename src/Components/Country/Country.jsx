import React from "react";
import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Name: {country.name.common}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>Continents: {country.continents.continents}</p>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited} className="btn">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
