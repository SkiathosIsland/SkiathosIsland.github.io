import styles from "./CardHolder.module.scss";

const Cardholder = ({ image, title, body, price }) => {
  return (
    <div className={styles.cardholder}>
      <div className={styles.cardcontainer}>
        <div className={styles.imagecontainer}>
          <img src={image} alt="" />
        </div>
        <div className={styles.cardcontent}>
          <div className={styles.cardtitle}>
            <h3>{title}</h3>
          </div>
          <div className={styles.cardbody}>
            <p>{body}</p>
          </div>
          <div className={styles.cardbody}>
            <p>{price}</p>
          </div>

          <a className={styles.btn_container} href={"/cruises/1"}>
            <button>
              <a>Book now!</a> <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cardholder;
