import styles from "../../../styles/Layout/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footerContainer}>
      <span id={styles.copyright}>
        © Chawla Media 2022. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
