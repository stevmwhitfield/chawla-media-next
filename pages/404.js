import Layout from "../components/Layout/Layout";
import styles from "../styles/PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <Layout>
      <div id={styles.container}>
        <span>
          <h1>Error 404</h1>
          <h2>Page not found.</h2>
        </span>
      </div>
    </Layout>
  );
};

export default PageNotFound;
