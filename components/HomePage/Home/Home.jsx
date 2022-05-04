import React from "react";
import styles from "./Home.module.scss";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className={styles.Homepage}>
      <div className={styles.textbox}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              scale: [0.6, 1, 1],
              opacity: 1,
              transition: {
                duration: 1.8,
              },
            },
          }}
        >
          <h1>WELCOME TO SKIATHOS!</h1>

          <p>
            The first skiathos booking website for Cruises, as well as
            Motorbike/Car Rentals and Restaurant Reservations,<br></br>
          </p>
          <a href="" className={styles.herobtn}>
            Visit Us To know More
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
