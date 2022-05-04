import React from "react";
import styles from "./Profile.module.scss";
import Calendar from "../hooks/Calender";
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";

function Profile() {
  // const [msg, setMsg] = useState("Please open!!!");
  // const [toggle, setToggle] = useState(false);

  // if (msg) {
  //   setToggle(true);
  // }

  return (
    <div className={styles.wrapper}>
      <iframe
        width={window.innerWidth}
        height={window.innerHeight}
        src="/html/bg1.html"
      ></iframe>
      <div className={styles.container}>
        <div className={styles.history}>
          <h1> History</h1>
        </div>
        <div className={styles.buttonstyle}>
          <div className={styles.buttonstyler}>
            <button>Reservation 1 / product name </button>
            <h3>
              Cruise Trip
              <br />
              <br />
              <Date />
            </h3>
          </div>
          <div className={styles.buttonstyler}>
            <button>Reservation 2 / product name </button>
            <h3>
              Cruise Trip
              <br />
              <br />
              <Date />
            </h3>
          </div>
          <div className={styles.buttonstyler}>
            <button>Reservation 3 / product name </button>
            <h3>
              Cruise Trip
              <br />
              <br />
              <Date />
            </h3>
          </div>
          <div className={styles.buttonstyler}>
            <button>Reservation 4 / product name </button>
            <h3>
              Cruise Trip
              <br />
              <br />
              <Date />
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.tickets}>
          <h1> Your Reservations</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
