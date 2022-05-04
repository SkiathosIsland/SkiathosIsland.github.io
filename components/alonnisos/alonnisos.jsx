import React from "react";
import styles from "../alonnisos/alonnisos.module.scss";

function alonnisos() {
  return (
    <div className={styles.alonnisos}>
      <div className={styles.textbox}>
        <h1>Trip to Alonissos!</h1>
        <h2>Small Tour on the island</h2>
      </div>

      <div className={styles.Words}>
        <h1>Alonissos</h1>
        <h2>
          Alonissos is considered to be the quietest of Sporades can, an ideal
          destination for relaxing holidays in nature, by the sea.Picturesque
          village, well-marked trails will delight hikers. For the kitchen you
          will lick your fingers, especially if you visit it you have to taste
          the Alonnisos tuna.Alonissos is known for its National Marine Park, a
          unique habitat with a variety of flora and fauna, such as the
          Mediterranean seal Monachus Monachus. Day trips are usually organized
          to locations within the park that are accessible to the public. There
          you can swim, dive or hike and observe the wildlife and impressive
          natural landscapes. The first images that visitors see in Alonissos,
          the largest settlement and port of the island, is called Patitiri,
          which took its name from the wine press, when the main occupation of
          the locals was the viticulture. Which is full of life and color,
          although especially less picturesque than Chora you can eat in the
          amazing taverns with views of what seas. Also, can visit the Alonissos
          Museum is the only pirate museum in the Aegean and exhibits include
          anchors, pirate trombones, handcuffs from slaves in the barn and other
          objects that you see only in the movies. Chora old capital of the
          island, or Old Alonissos, is an absolutely beautiful place at high
          altitude with small cafes overlooking Sporades, local art shops and a
          wide variety of accommodation, from hotels and rooms to rental villas.
          bus to visit this charming Country! Alonissos has something special
          that distinguishes it from all other Greek islands: the bottom.
          Hundreds of ancient and modern shipwrecks have been found on the
          seabed around Alonissos and of course the only underwater museum in
          the area.
        </h2>
        <div className={styles.images}>
          <img src="/alonnisos2.jpg" className={styles.img}></img>
          <img src="/αλοννησος.jpg" className={styles.img}></img>
        </div>
      </div>
    </div>
  );
}

export default alonnisos;
