import HorizontalGallery from "../Gallery/HorizontalGallery";
import styles from "../../styles/Home/Section1.module.scss";

const Section1 = ({ gallery }) => {
  return (
    <section id={styles.one}>
      <div id={styles.intro}>
        <h1>Sunishth Chawla</h1>
        <h2>- Photographer | Editor | Creator -</h2>
      </div>
      <HorizontalGallery gallery={gallery} />
    </section>
  );
};

export default Section1;
