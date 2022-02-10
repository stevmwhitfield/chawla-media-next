import Layout from "../components/Layout/Layout";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";

const HomePage = () => {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
};

export default HomePage;
