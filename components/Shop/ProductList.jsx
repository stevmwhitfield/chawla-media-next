import Product from "./Product";
import styles from "../../styles/Shop/ProductList.module.scss";

const ProductList = ({ products }) => {
  if (!products) return;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Product
                img={product.image}
                name={product.name}
                categories={product.categories}
                price={product.price}
                slug={`/products/${product.permalink}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
