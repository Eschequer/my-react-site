import React from "react";
import styles from "./App.module.scss";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <div className={styles.App}>
      <h1>My Site Project!</h1>
      <AboutUs />
    </div>
  );
}

export default App;
