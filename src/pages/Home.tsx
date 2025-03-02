import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

function Home() {
  return (
    <div className="mx-40">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
