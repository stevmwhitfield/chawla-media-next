import commerce from "../lib/commerce";
import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import CategoryList from "../components/Shop/CategoryList";

const CategoriesPage = ({ categories }) => {
  return (
    <>
      <CustomHead
        title="Categories | Chawla Media"
        description="Purchase exclusive prints of your favorite photos."
        url="https://shop.chawlamedia.com/"
      />
      <Layout>
        <h1>Categories</h1>
        <CategoryList categories={categories} />
      </Layout>
    </>
  );
};

export default CategoriesPage;

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  return { props: { categories } };
}
