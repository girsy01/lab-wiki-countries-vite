import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetailsPage = () => {
  const [country, setCountry] = useState(null);

  const { countryID } = useParams();

  function getCountryData() {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryID}`)
      .then(({ data }) => setCountry(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCountryData();
  }, [countryID]);

  if (!country) {
    return <p>Loading country details...</p>;
  }

  return (
    <div className="details">
      {/* <h2>Country Details</h2> */}
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code?.toLowerCase()}.png`}
        alt={`${country.name?.common} flag`}
      />
      <h1>{country.name?.common}</h1>
      <h3>Official name: {country.name?.official}</h3>

      {/* Table with styled class */}
      <table className="country-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital?.[0] || "N/A"}</td>
          </tr>
          <tr>
            <td>Region</td>
            <td>{country.region || "N/A"}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area || "N/A"} km²</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {country.borders && country.borders.length > 0 ? (
                <ul className="borders-list">
                  {country.borders.map((e) => (
                    <li key={e}>
                      <Link to={`/${e}`}>{e}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                "No borders"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetailsPage;
