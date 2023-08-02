import styles from './DishCard.module.css';
import scooter from './assets/scooter_icon.svg';

function DishCard({ image, name, price, description }) {
  return (
    <div className={styles.dishcard}>
      <img src={image} alt="picture of dish" className={styles.hero_image}/>
      <div className={styles.text_box}>
        <div className={styles.top_line}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{price}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.order}>
          <a href="#">
            Order a delivery
            <img src={scooter} alt="scooter icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default DishCard;