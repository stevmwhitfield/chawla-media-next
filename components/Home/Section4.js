import styles from "../../styles/Home/Section4.module.scss";

const Section4 = ({ testimonials }) => {
  return (
    <section id={styles.four}>
      <div id={styles.headerContainer}>
        <h2 id={styles.heading}>Don&apos;t just take my word for it</h2>
      </div>
      <div id={styles.testimonialContainer}>
        {testimonials.map((t) => {
          return (
            <article key={t._id} className={styles.testimonial}>
              <h1 className={styles.name}>{t.name}</h1>
              <h3 className={styles.position}>{t.occupation}</h3>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Section4;
