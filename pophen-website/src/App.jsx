import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Products from "./pages/Products/Products.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import CleanroomPanels from "./pages/CleanroomPanels/CleanroomPanels.jsx";
import CleanroomCeilings from "./pages/CleanroomCeilings/CleanroomCeilings.jsx";
import CleanroomDoors from "./pages/CleanroomDoors/CleanroomDoors.jsx";
import CleanroomWindows from "./pages/CleanroomWindows/CleanroomWindows.jsx";

function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cleanroompanels" element={<CleanroomPanels />} />
          <Route path="/cleanroomceilings" element={<CleanroomCeilings />} /> 
          <Route path="/cleanroomdoors" element={<CleanroomDoors />} />
          <Route path="/cleanroomwindows" element={<CleanroomWindows />} />
        </Routes> 
      </main>

      <Footer />
    </>
  );
}

export default App;