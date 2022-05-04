import React from "react";
import styles from "./Home4.module.scss";

function Home4() {
  return (
    <div className={styles.Destinations}>
      <h1>Our Destinations</h1>
      <p>This are some of our destinations.</p>
      <div className={styles.flex_cont}>
        <div className={styles.Destinationscol}>
          <a href="/skopelos">
            <img src="/SKOPELOs.jpg" />
          </a>
          <h3>
            <a href="/skopelos">SKOPELOS</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquet turpis nulla.
          </p>
        </div>
        <div className={styles.Destinationscol}>
          <a href="/alonnisos">
            <img src="/αλοννησος.jpg" />
          </a>
          <h3>
            <a href="/alonnisos">ALONNISOS</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquet turpis nulla.
          </p>
        </div>
        <div className={styles.Destinationscol}>
          <a href="/skiathos">
            <img src="/skiathos/aaa.png" />
          </a>
          <h3>
            <a href="/skiathos">Around the island</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquet turpis nulla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home4;
