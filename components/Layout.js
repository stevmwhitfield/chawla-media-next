import styles from "../styles/Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";
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
