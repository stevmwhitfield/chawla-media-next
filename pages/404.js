import Header from "../components/Header";
import styles from "../styles/PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div id={styles.container}>
        <span>
          <h1>Error 404</h1>
          <h2>Page not found.</h2>
        </span>
      </div>
    </>
  );
};

export default PageNotFound;
