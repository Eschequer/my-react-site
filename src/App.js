import React from "react";
import styles from "./App.module.scss";
import { useLocation } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutUs from "./pages/AboutUs/AboutUs";
import Nav from "./components/Nav/Nav";
import OurWork from "./pages/OurWork/OurWork";
import ContactUs from "./pages/ContactUs/ContactUs";
import WorkDetail from "./pages/WorkDetail/WorkDetail";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className={styles.App}>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <WorkDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
