import "./App.css";
import { Fragment } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./Componant/navbar/Nav";
import Home from "./Componant/home/Home";
import About from "./Componant/about/About";
import Benefits from "./Componant/benefits/Benefits";
import Onlinestore from "./Componant/onlineStore/Onlinestore";
import Contact from "./Componant/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Home />
        <About />
        <Benefits />
        <Onlinestore />
        <Contact />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
