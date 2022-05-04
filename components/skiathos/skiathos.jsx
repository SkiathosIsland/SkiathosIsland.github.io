import React from "react";
import styles from "../skiathos/skiathos.module.scss";

function skopelos() {
  return (
    <div className={styles.skopelos}>
      <div className={styles.textbox}>
        <h1>Trip to Skiathos!</h1>
        <h2>Small Tour on the island</h2>
      </div>

      <div className={styles.Words}>
        <h1>Skiathos</h1>
        <h2>
          It is rumored that the name of Skiathos comes from the words "shadow"
          and "atos", and it is said that on a clear day you can see Mount Athos
          lost deep in the horizon. It is an island of Greece located in the
          Aegean Sea, part of the Sporades archipelago.It has an area of about
          47 sq. miles and its population is 6 000. Many people know it as the
          island of Alexandros Papadiamantis, the great Greek writer who was
          born and raised here. Skiathos invites you to enter its climate as it
          is the closest island of Sporades to mainland Greece. Cosmic, ideal
          for everyone that count enthusiastic friends from around the world.
          Enjoy a holiday in Skiathos, one of the most magical Greek islands.
          Famous for its stunning natural landscape, beautiful beaches,
          delicious food and nightlife along with sea experiences, walked
          through the town in the alleys of Papadiamantis. The beauty of
          Skiathos stretches everywhere explore works from the 14th century.
          Like a less fortified castle on a rocky peninsula at the northern tip
          of Skiathos, it was basically a refuge for locals during piracy. It
          remained the center of the island during the Middle Ages and the
          Turkish Republic. It is a well-known destination for tourists today
          that is accessible with the tourist boats that exist in the port or
          with your vehicle. It is an ideal island for nature and entertainment
          lovers offering dozens of different ways to spend the most magical
          holidays. With the enchanted beaches with the lush waters that one of
          them is known as the unique beach of Skiathos, Lalaria is ideal for
          day boat trips with the shiny pebbles and their otherworldly beauty.
          From swimming on a lush green beach that if you are lovers of
          unparalleled natural beauty, the beach of Koukounaries with golden
          sand, dense forest and salt water lake on the west side of Skiathos
          will surely enchant you. Like, the green islet of Tsougria that is
          expensive opposite Skiathos. Covered with dense vegetation and pine
          trees, along with many beautiful deserted beaches. The island is just
          3.5 km from the port of Skiathos and is definitely the most famous as
          dozens of yachts and sailing boats tie here in the summer. Since the
          island is accessed by tourist boats, try local delicacies in the
          wonderful restaurants that the island provides and explore the flora
          and fauna of the island!
        </h2>
        <div className={styles.images}>
          <img src="/skiathos1.jpg" className={styles.img}></img>
          <img src="/skiathos2.jpg" className={styles.img}></img>
        </div>
      </div>
    </div>
  );
}

export default skopelos;
