import { sanityClient } from "../lib/sanity";
import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/FAQ/FAQ.module.scss";

const dataQuery = `
  *[_type=="faq"] {
    _id,
    question,
    answer
  }
`;

const FAQPage = ({ data }) => {
  return (
    <>
      <CustomHead
        title="FAQ | Chawla Media"
        description="Find the answers to some of my most commonly asked questions."
        url="https://www.chawlamedia.com/faq"
      />
      <Layout>
        <section className="pageHeader">
          <h1>Frequently Asked Questions</h1>
          <h2>Answers to Common Questions</h2>
        </section>
        <section className={styles.container}>
          {/* Map props to cards */}
          {data.map((d) => {
            return (
              <article className={styles.questionContainer}>
                <h2>{d.question}</h2>
                <p>{d.answer}</p>
              </article>
            );
          })}
        </section>
      </Layout>
    </>
  );
};

export default FAQPage;

export async function getStaticProps() {
  const data = await sanityClient.fetch(dataQuery);
  return { props: { data } };
}
