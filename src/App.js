import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Singel from "./components/singelMovie/Singel";
import Footer from "./components/Footer/Footer";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loading, isLoading] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Singel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
