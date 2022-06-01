import styles from "../styles/Article.module.css";

export default function NewsIntro(props) {
  return (
    <section className={styles.container}>
      <p data-aos="fade-up" data-aos-delay="200">
        {props.description}
      </p>
    </section>
  );
}
