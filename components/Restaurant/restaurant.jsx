import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./restaurant.module.scss";
import Cardholder from "./CardHolder/CardHolder";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia3Vyb3Nha2lyYWt1bjEiLCJhIjoiY2wyM2F1aHVuMW84MTNjbHBndnJieDR3dCJ9.lczoc6bcyIbLZGSKkqbQrA",
});

const CruisePage = () => {
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
        <h1> Our Restaurants!</h1>
        <h2>Make a reservation with the restaurant of your liking.</h2>
      </div>
      <div className={styles.holder}>
        <div className={styles.data}>
          {data?.map((item, index) => (
            <Cardholder
              image={"/restaurantback.jpg"}
              title={item.name}
              body={item.email}
              key={index}
            />
          ))}
        </div>
        <div className={styles.map}>
          <Map
            style="mapbox://styles/kurosakirakun1/cl23jl8nj000l14nv9qgc0cr1/draft"
            containerStyle={{
              height: "96vh",
              width: "50vw",
            }}
            center={[23.448161, 39.173261]}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            ></Layer>
          </Map>
        </div>
      </div>
    </div>
  );
};

export default CruisePage;
