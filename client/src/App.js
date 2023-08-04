import React from "react";
import axios from "axios";
import Home from "./components/home/Home.jsx";
import { Route } from "react-router-dom";
import Landing from "./components/landing/Landing.jsx";
import Footer from "./components/footer/Footer.jsx";
import Created from "./components/created/Created.jsx";
import Form from "./components/form/Form.jsx";

// axios.defaults.baseURL = nueva_direccionDeploy
axios.defaults.baseURL = "http://localhost:3002";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/home" render={() => <Footer />} />
      <Route exact path="/created/:tag" render={() => <Created />} />
      <Route exact path="/createActivity" render={() => <Form />} />
    </>
  );
}

export default App;
