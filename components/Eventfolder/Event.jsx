import React from "react";
import styles from "./Event.module.scss";

function event() {
  // const images = ["/wedding2.jpg", "/021.jpg", "/aaaa.jpg"];
  // let numbers = [0, 1, 2];
  return (
    <div className={styles.events}>
      <iframe
        width="100%"
        height="1190px"
        background-size="cover"
        background-position="center"
        src="/html/bg1.html"
      ></iframe>
      <div className={styles.wrapper}>
        <h1>Event closing in skiathos !</h1>

        <button>
          <h2>Cruise day Event!</h2>
        </button>

        <button>
          <h3>Wedding!</h3>
        </button>
        <button>
          <h4>Organize a Party!</h4>
        </button>
      </div>

      <div className={styles.display}>
        {/* <img src={images[numbers]}></img> */}
      </div>
    </div>
  );
}

export default event;
