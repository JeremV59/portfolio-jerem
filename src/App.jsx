import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Competences from "./components/competences/Competences";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Competences></Competences>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default App;
