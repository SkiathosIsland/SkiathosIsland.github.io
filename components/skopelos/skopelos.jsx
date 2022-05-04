import React from "react";
import styles from "../skopelos/skopelos.module.scss";

function skopelos() {
  return (
    <div className={styles.skopelos}>
      <div className={styles.textbox}>
        <h1>Trip to Skopelos!</h1>
        <h2>Small Tour on the island</h2>
      </div>

      <div className={styles.Words}>
        <h1>Skopelos</h1>
        <h2>
          Skopelos is the greenest island of Greece the name Skopelos first
          appeared in the texts of the War in the 2nd century and it's probably
          due to the many reefs of skopelos around the island. Here, the green
          of the pine trees and the dense forest are mixed with the endless blue
          of the sea and the sky, they imagine the unparalleled beauty of
          nature. Visitors will find themselves in the idyllic island of a small
          paradise in the heart of Greece. It became particularly famous in
          recent years thanks to the Hollywood musical Mamma Mia filmed on the
          island. In Skopelos you will discover stunning scenery, beautiful
          streets, picturesque villages and dreamy beaches. The traditional
          architecture of the Sporades is based on a model of Northern Herculean
          architecture and the Thessaloniki-Macedonian style modified to fit the
          conditions and needs of the community. Wherever you are in the village
          or port, every walk always has a natural end. Surely if you walk on
          the Island you have to go for a walk in the castle of Skopelos is a
          13th century building from which the view of Alonissos is disarmed on
          the other side of the open Aegean. Popular with couples and families,
          Skopelos offers a variety of charming bars, restaurants and cultural
          attractions covering many of its villages, and those who visit always
          enjoy Skopelitiki cheese pie, one of the most famous cheese pies in
          all of Greece. There is Glossa, the second largest settlement of the
          island, or "tall village" as Papadiamantis often calls it. Macedonian
          influences are evident in the architecture of its houses, while the
          stone-paved steps lead up the uphill, each step revealing another
          impressive sea view. Looking at sunset from above is a very normal
          experience.Like amazing beaches one of them is Agios Ioannis who is a
          famous tourist destination for shooting the film Mamma Mia here, St.
          John of Castries is perched on a rock 100 meters above sea level.
          There are more 200 stairs carved into the rock that you need to climb
          to get here - however, the magic view will reward you.
        </h2>
        <div className={styles.images}>
          <img src="/skopelos1.jpg" className={styles.img}></img>
          <img src="/skopelos2.jpg" className={styles.img}></img>
        </div>
      </div>
    </div>
  );
}

export default skopelos;
