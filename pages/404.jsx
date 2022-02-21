import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/404/PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <>
      <CustomHead
        title="Page Not Found"
        description="Error 404: page not found"
        url="https://www.chawlamedia.com/404"
      />
      <Layout>
        <div id={styles.container}>
          <span>
            <h1>Error 404</h1>
            <h2>Page not found.</h2>
          </span>
        </div>
      </Layout>
    </>
  );
};

export default PageNotFound;
