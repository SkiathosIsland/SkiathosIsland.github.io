import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Cruises.module.scss";
import Cardholder from "./CardHolder/CardHolder";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Cruise = (index) => {
  const [data, setData] = useState();

  const get_users = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };

  useEffect(async () => {
    await get_users();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.cruisepage}>
        <h1> Our Cruises!</h1>
        <h2>Choose one of your Cruises for your preferred experience!</h2>
      </div>
      {/* <div className={styles.choose}>
        <h1>Choose one of the Cruises below!</h1>
      </div> */}

      <div className={styles.holder}>
        <div className={styles.data}>
          {data?.map((item, index) => (
            <Cardholder
              image={"/about.jpg"}
              title={item.name}
              body={item.email}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cruise;
