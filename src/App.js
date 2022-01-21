import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Singel from "./components/singelMovie/Singel";

function App() {
  const [loading, isLoading] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Singel />} />
    </Routes>
  );
}

export default App;
