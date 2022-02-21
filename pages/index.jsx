import CustomHead from "../components/Head/Head";
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
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height,
    "src": image.asset->url
  }
}`;

const testimonialsQuery = `*[_type=="testimonials"] {
  _id,
  name,
  occupation,
  quote
}`;

const HomePage = ({ gallery, testimonials }) => {
  return (
    <>
      <CustomHead
        title="Chawla Media"
        description="Chawla Media offers professional photography, editing, and content creation services in the Orlando area. Book your photoshoot today or browse past shoots."
        url="https://www.chawlamedia.com/"
      />
      <Layout>
        <Section1 gallery={gallery[0].list} />
        <Section2 />
        <Section3 />
        <Section4 testimonials={testimonials} />
      </Layout>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const gallery = await sanityClient.fetch(galleryQuery);
  const testimonials = await sanityClient.fetch(testimonialsQuery);
  return { props: { gallery, testimonials } };
}
