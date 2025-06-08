import "./index.css";
import React from "react";
import "remixicon/fonts/remixicon.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
