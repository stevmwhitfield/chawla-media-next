import commerce from "../../lib/commerce";
import ProductList from "../../components/Shop/ProductList";

const CategoryPage = ({ category, products }) => {
  return (
    <>
      <h1>{category.name}</h1>
      <ProductList products={products} />
    </>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const category = await commerce.categories.retrieve(slug, { type: "slug" });
  const { data: products } = await commerce.products.list({
    category_slug: slug,
  });

  return { props: { category, products } };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}
