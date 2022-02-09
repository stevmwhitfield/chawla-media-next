import styles from "../../styles/Home/Section3.module.scss";

const Section3 = () => {
  return (
    <section id={styles.three}>
      <div id={styles.first} className={styles.container}>
        <div className={styles.overlay}>
          <h2 className={styles.text}>Stills</h2>
        </div>
      </div>
      <div id={styles.second} className={styles.container}>
        <div className={styles.overlay}>
          <h2 className={styles.text}>Stills</h2>
        </div>
      </div>
      <div id={styles.third} className={styles.container}>
        <div className={styles.overlay}>
          <h2 className={styles.text}>Stills</h2>
        </div>
      </div>
      <div id={styles.fourth} className={styles.container}>
        <div className={styles.overlay}>
          <h2 className={styles.text}>Stills</h2>
        </div>
      </div>
    </section>
  );
};

export default Section3;
