import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState(null);

  function getCountriesData() {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then(({ data }) => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => getCountriesData(), []);

  if (!countries) return <p>Loading data...</p>;

  return (
    <div>
      {countries.map((e) => (
        <Link key={e.alpha3Code} to={`/${e.alpha3Code}`}>
          <div className="list-item">
            <img
              src={` https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
            />
            <p>{e.name.common}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default HomePage;
