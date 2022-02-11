import Layout from "../components/Layout/Layout";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import { sanityClient } from "../lib/sanity";

const galleryQuery = `*[_type=="gallery" && name=="Home Gallery"] {
  list[] {
    _key,
    description,
    "src": image.asset->url
  }
}`;

const HomePage = ({ gallery }) => {
  return (
    <Layout>
      <Section1 gallery={gallery[0].list} />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  const gallery = await sanityClient.fetch(galleryQuery);
  return { props: { gallery } };
}
