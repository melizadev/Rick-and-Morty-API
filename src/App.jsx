import Characters from "./components/Characters";
import Banner from "./components/Banner";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Episodes from "./components/Episodes";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Rick-and-Morty-API/" element={<Banner />} />
        <Route path="/Rick-and-Morty-API/characters" element={<Characters />} />
        <Route path="/Rick-and-Morty-API/episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
