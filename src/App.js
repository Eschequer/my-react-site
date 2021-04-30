import React from "react";
import styles from "./App.module.scss";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Nav from "./components/Nav/Nav";
import OurWork from "./pages/AboutUs/OurWork";
import ContactUs from "./pages/AboutUs/ContactUs";

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
