import React from "react";
import styles from "./Home3.module.scss";
import Link from "next/link";
function Home() {
  return (
    // <div className={styles.wrapper}>
    //   <iframe
    //     width={window.innerWidth}
    //     height={window.innerHeight}
    //     src="/html/bg1.html"
    //   ></iframe>
    <div className={styles.Services}>
      <h1>Our Services</h1>
      <p>Choose one of our services.</p>
      <div className={styles.flex_cont}>
        <a className={styles.Servicescol} href="/cruises">
          <div className={styles.image}>
            <img
              src="/skiathos/1.jpg"
              className={styles.img}
              to="/cruises"
            ></img>
          </div>
          <div className={styles.layer}>
            <h3>Cruise Trip</h3>
          </div>
        </a>
        <a className={styles.Servicescol} href="/vehicles">
          <div className={styles.image}>
            <img src="/rental.jpg" className={styles.img}></img>
          </div>
          <div className={styles.layer}>
            <h3>Rental</h3>
          </div>
        </a>
        <a className={styles.Servicescol} href="/restaurant">
          <div className={styles.image}>
            <img src="/skiathos/restaurrant.jpg" className={styles.img}></img>
          </div>
          <div className={styles.layer}>
            <h3>Reservation</h3>
          </div>
        </a>
      </div>

      <h2 className={styles.Cruises}>Cruises</h2>

      <h2 className={styles.Vehicles}>Vehicles</h2>
      <h2 className={styles.Restaurants}>Restaurants</h2>
    </div>
    // </div>
  );
}

export default Home;
