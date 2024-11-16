import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>WikiCountries: Your Guide to the World</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryID" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
