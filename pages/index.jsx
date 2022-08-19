import commerce from "../lib/commerce";
import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import ProductList from "../components/Shop/ProductList";
import CategoryList from "../components/Shop/CategoryList";

const ShopHomePage = ({ merchant, products, categories }) => {
  return (
    <>
      <CustomHead
        title="Shop | Chawla Media"
        description="Purchase exclusive prints of your favorite photos."
        url="https://shop.chawlamedia.com/"
      />
      <Layout>
        {/* <h1>{merchant.data[0].name}</h1> */}
        {/* <h2>Categories</h2> */}
        {/* <CategoryList categories={categories} /> */}
        {/* <h2>Products</h2> */}
        <section className="pageHeader">
          <h1>Featured Items</h1>
        </section>
        <section>
          <ProductList products={products} />
        </section>
      </Layout>
    </>
  );
};

export default ShopHomePage;

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();
  return { props: { merchant, products, categories } };
}
