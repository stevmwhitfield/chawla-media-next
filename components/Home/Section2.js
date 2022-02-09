import Image from "next/image";
import styles from "../../styles/Home/Section2.module.scss";

const Section2 = () => {
  return (
    <section id={styles.two}>
      <div id={styles.imageContainer}>
        <Image
          src="/sunny-honda.png"
          alt="Sunishth in front of a Honda Accord"
          layout="fill"
        ></Image>
      </div>
      <div id={styles.contentContainer}>
        <h2 id={styles.contentHeader}>Hey, how’s it going?</h2>
        <p id={styles.contentBody}>
          This is an introduction to Chawla Media and Sunishth. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce lacinia odio at
          justo viverra, a rhoncus sapien laoreet. Donec vel ex sagittis,
          porttitor enim mattis, imperdiet ligula.
        </p>
        <button className={styles.button}>
          Let&apos;s Talk
          <span></span>
        </button>
      </div>
    </section>
  );
};

export default Section2;
