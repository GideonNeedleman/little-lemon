import DishCard from './DishCard';
import styles from './Home.module.css';
import TestimonialCard from './TestimonialCard';
import star from './assets/5 stars.png';
import { Link } from 'react-router-dom';

function Home () {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.content}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to='/reservations/form'>
              <button className={styles.button_yellow}>Reserve a Table</button>
            </Link>
          </div>
          <img className={styles.hero_image} src={require("./assets/restauranfood.jpg")} alt="A tray filled with delicious bruschetta" />
        </div>
      </section>
      <section className={styles.specials}>
        <div className={styles.specials_head}>
          <h1>This week's specials!</h1>
          <div>
            <button className={styles.button_yellow}>Online Menu</button>
          </div>
        </div>
        <div className={styles.dishcards}>
          <DishCard
            image={require("./assets/greek salad.jpg")}
            name={"Greek Salad"}
            price={"$12.99"}
            description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "}
          />
          <DishCard
            image={require("./assets/bruschetta.png")}
            name={"Bruschetta"}
            price={"$5.99"}
            description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "}
          />
          <DishCard
            image={require("./assets/lemon dessert.jpg")}
            name={"Lemon Dessert"}
            price={"$5.00"}
            description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
          />
        </div>
      </section>
      <section className={styles.testimonials}>
        <h1>
          Testimonials
        </h1>
        <div className={styles.testimonial_row}>
          <TestimonialCard
            name="David S."
            image={require('./assets/person1.jpg')}
            rating= {star}
            review="Best mediterranean salad in the city!"
          />
          <TestimonialCard
            name="Carl M."
            image={require('./assets/person2.jpg')}
            rating={star}
            review="My favorite new restaurant in the area."
          />
          <TestimonialCard
            name="Linda D."
            image={require('./assets/person3.jpg')}
            rating={star}
            review="I love the online reservation feature, saves so much time for me and the girls"
          />
          <TestimonialCard
            name="Melinda G."
            image={require('./assets/person4.jpg')}
            rating={star}
            review="I eat here every Sunday after church. Never going anywhere else!"
          />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.about_content}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia quisquam fugiat veniam sit! Aspernatur saepe fugit dolorum ipsum? Cum.</p>
        </div>
        <div className={styles.about_images}>
          <img src={require('./assets/Mario and Adrian A.jpg')} alt="Mario and Adrian working together" className={styles.about_image1} />
          <img src={require('./assets/Mario and Adrian b.jpg')} alt="Mario and Adrian working together" className={styles.about_image2} />
        </div>
      </section>
    </>
  )
}

export default Home;