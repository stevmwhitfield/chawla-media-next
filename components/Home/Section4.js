import styles from "../../styles/Home/Section4.module.scss";

const Section4 = () => {
  return (
    <section id={styles.four}>
      <div id={styles.headerContainer}>
        <h2 id={styles.heading}>Don&apos;t just take my word for it</h2>
      </div>
      <div id={styles.testimonialContainer}>
        <article className={styles.testimonial}>
          <h1 className={styles.name}>Nick</h1>
          <h3 className={styles.position}>Nascar driver</h3>
          <p className={styles.quote}>
            “Without a doubt one of the best photo sessions I&apos;ve ever had.”
          </p>
        </article>
        <article className={styles.testimonial}>
          <h1 className={styles.name}>Nick</h1>
          <h3 className={styles.position}>Nascar driver</h3>
          <p className={styles.quote}>
            “Without a doubt one of the best photo sessions I&apos;ve ever had.”
          </p>
        </article>
        <article className={styles.testimonial}>
          <h1 className={styles.name}>Nick</h1>
          <h3 className={styles.position}>Nascar driver</h3>
          <p className={styles.quote}>
            “Without a doubt one of the best photo sessions I&apos;ve ever had.”
          </p>
        </article>
        <article className={styles.testimonial}>
          <h1 className={styles.name}>Nick</h1>
          <h3 className={styles.position}>Nascar driver</h3>
          <p className={styles.quote}>
            “Without a doubt one of the best photo sessions I&apos;ve ever had.”
          </p>
        </article>
        <article className={styles.testimonial}>
          <h1 className={styles.name}>Nick</h1>
          <h3 className={styles.position}>Nascar driver</h3>
          <p className={styles.quote}>
            “Without a doubt one of the best photo sessions I&apos;ve ever had.”
          </p>
        </article>
      </div>
    </section>
  );
};

export default Section4;
