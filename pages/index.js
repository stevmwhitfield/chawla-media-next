import Layout from "../components/Layout/Layout";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";

const HomePage = () => {
  return (
    <Layout>
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default HomePage;

// Page layout
// <Header />
// <Section1 /> -> <Gallery direction="horizontal" />
// <Section2 /> -> <Button type="default"/>
// <Section3 />
// <Section4 /> -> <Testimonial />
// <Footer />
