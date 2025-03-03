import "./App.css";
import Boards from "./pages/Boards";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import bgImage from "./assets/background.png";
function App() {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(34, 6, 82, 0) 70%, rgba(34, 6, 82, 1)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/boards" element={<Boards />} />{" "}
        <Route path="/users" element={<Users />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
