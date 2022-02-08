import styles from "../../styles/Layout/Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const Layout = (props) => {
  return (
    <div id={styles.pageWrapper}>
      <Header />
      <main id={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
