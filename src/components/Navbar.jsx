import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>WikiCountries</h2>
      </Link>
    </div>
  );
}

export default Navbar;
