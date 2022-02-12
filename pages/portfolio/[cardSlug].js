import Layout from "../../components/Layout/Layout";
import PortfolioGallery from "../../components/Gallery/PortfolioGallery";
import { sanityClient } from "../../lib/sanity";

// const cardsQuery = `*[_type=="portfolioCard" && slug.current=="random-photoshoots"] {
//     title,
//     type,
// }`;

const slugQuery = `*[_type=="portfolioCard"] {
  "slug": slug.current
}`;

// const galleryQuery = `*[_type=="gallery" && slug.current=="random-photoshoots"] {
//     list[] {
//     _key,
//     description,
//     "width": image.asset->metadata.dimensions.width,
//     "height": image.asset->metadata.dimensions.height,
//     "src": image.asset->url
//   }
// }`;

const CardPage = ({ card, gallery }) => {
  console.log(gallery);
  return (
    <Layout>
      <div className="pageHeader">
        <h1>{card.title}</h1>
        <h2>{card.type}</h2>
      </div>
      <PortfolioGallery gallery={gallery} />
    </Layout>
  );
};

export default CardPage;

export async function getStaticProps({ params }) {
  const cards = await sanityClient.fetch(
    `*[_type=="portfolioCard" && slug.current==$slug] {
    title,
    type,
}`,
    { slug: `${params.cardSlug}` }
  );
  const gallery = await sanityClient.fetch(
    `*[_type=="gallery" && slug.current==$slug] {
    list[] {
    _key,
    description,
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height,
    "src": image.asset->url
  }
}`,
    { slug: `${params.cardSlug}` }
  );
  return { props: { card: cards[0], gallery: gallery[0].list } };
}

export async function getStaticPaths() {
  const cards = await sanityClient.fetch(slugQuery);
  return {
    paths: cards.map((card) => {
      const cardSlug = card.slug;
      return {
        params: { cardSlug },
      };
    }),
    fallback: false,
  };
}
