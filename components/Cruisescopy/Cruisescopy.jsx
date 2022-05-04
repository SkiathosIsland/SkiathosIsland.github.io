import { useState, useEffect } from "react";
import { supabase } from "./client";
import styles from "./Cruises.module.scss";
import Cardholder from "./CardHolder/CardHolder";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia3Vyb3Nha2lyYWt1bjEiLCJhIjoiY2wyM2F1aHVuMW84MTNjbHBndnJieDR3dCJ9.lczoc6bcyIbLZGSKkqbQrA",
});

function CruisePage() {
  const router = useRouter();
  const [cruise, setCruise] = useState();
  useEffect(() => {
    fetchCruises;
  });

  const fetchCruises = async () => {
    const { data } = await supabase.from("cruises").select();
    setCruise(data);
  };

  return cruise(
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
          <Cardholder image={cruise.image} />
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
}

export default CruisePage;
