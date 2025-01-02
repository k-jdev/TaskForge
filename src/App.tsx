import "./App.css";
import Boards from "./pages/Boards";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/boards" element={<Boards />} />{" "}
      <Route path="/users" element={<Users />} />{" "}
    </Routes>
  );
}

export default App;
