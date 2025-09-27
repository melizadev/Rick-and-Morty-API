import Characters from "./components/Characters";
import Banner from "./components/Banner";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Episodes from "./components/Episodes";
import Navbar from "./components/Navbar";
import Locations from "./components/Locations";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/rick-and-morty-api/" element={<Banner />} />
        <Route path="/rick-and-morty-api/characters" element={<Characters />} />
        <Route path="/rick-and-morty-api/episodes" element={<Episodes />} />
        <Route path="/rick-and-morty-api/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
