import { sanityClient } from "../lib/sanity";
import Layout from "../components/Layout/Layout";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import styles from "../styles/Portfolio/Portfolio.module.scss";

const cardQuery = `*[_type=="portfolioCard"] {
  _id,
  title,
  type,
  "src": image.asset->url,
  "url": slug.current
}`;

const PortfolioPage = ({ cards }) => {
  return (
    <Layout>
      <section className="pageHeader">
        <h1>Portfolio</h1>
        <h2>Explore my previous works</h2>
      </section>
      <section id={styles.cardsContainer}>
        {cards.map((card, i) => {
          return (
            <PortfolioCard
              key={card._id}
              title={card.title}
              type={card.type}
              imgSrc={card.src}
              imgAlt={card.title}
              url={card.url}
            />
          );
        })}
      </section>
    </Layout>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  const cards = await sanityClient.fetch(cardQuery);
  return { props: { cards } };
}
