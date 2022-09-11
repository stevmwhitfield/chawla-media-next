import styles from "../../styles/Layout/Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { getCategories } from "../../lib/getCategories";
import { useState } from "react";
import { useEffect } from "react";

const Layout = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id={styles.pageWrapper}>
      <Header categories={categories} />
      <main id={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
