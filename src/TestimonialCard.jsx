import styles from './TestimonialCard.module.css';

function TestimonialCard({ name, image, rating, review }) {
  return (
    <div className={styles.testimonial_card}>
      <img
        className={styles.rating}
        src={rating}
        alt="5 star rating"
      />
      <div className={styles.middle_row}>
        <img
          className={styles.image}
          src={image}
          alt="customer"
        />
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.review}>{review}</p>
    </div>
  )
}

export default TestimonialCard;