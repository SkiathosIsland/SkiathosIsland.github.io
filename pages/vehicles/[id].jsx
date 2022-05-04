import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseCreate";
import styles from "./id.module.scss";
import Calendar from "../../components/hooks/Calender";
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY =
  "pk_test_51KvDrpLTYBGrsoXz8bqKS8AZ9jW8J5oATglsaHAPi1r8cLcF7d5MMMXJrdwTMbwezIEtb544Yv99W3ab4uFzWeUy00NUU6YKwL";

const stripePromise = loadStripe(PUBLIC_KEY);
function id() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState();

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const get_vehicles_by_id = async () => {
    const { data } = await supabase
      .from("vehicles")
      .select()
      .match({ id: router.query?.id });
    setVehicles(data[0]);
  };

  useEffect(() => {
    (async () => {
      router.query?.id && (await get_vehicles_by_id());
    })();
  }, [router.query?.id]);

  return vehicles ? (
    <div>
      <div className={styles.box}></div>
      <div className={styles.vehicles}>
        <img src={vehicles.image} />
        <h1>{vehicles.title}</h1>
        <h2>{vehicles.text}</h2>
        <h2>{vehicles.price}</h2>
        <div className={styles.datepicker}>
          <h3>Pick a date</h3>
          <Calendar></Calendar>
          <i class="fa-solid fa-calendar-day"></i>
        </div>

        <form action="/api/checkout_sessions" method="POST">
          <section className={styles.section1}>
            <button
              type="submit"
              role="link"
              stripe={stripePromise}
              className={styles.checkout}
            >
              Checkout
            </button>
          </section>
          <style jsx>
            {`
              section {
                background: #ffffff;
                display: flex;
                flex-direction: column;
                width: 400px;
                height: 112px;
                border-radius: 6px;
                justify-content: space-between;
              }
              button {
                height: 36px;
                background: #556cd6;
                border-radius: 4px;
                color: white;
                border: 0;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
              }
              button:hover {
                opacity: 0.8;
              }
            `}
          </style>
        </form>
      </div>
    </div>
  ) : (
    <p>loading...</p>
  );
}

export default id;
