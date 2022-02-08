import HorizontalGallery from "../components/Gallery/HorizontalGallery";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <h1>Home Page.</h1>
      <HorizontalGallery />
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
