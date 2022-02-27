import Link from "next/link";
import Product from "./Product";

const ProductList = ({ products }) => {
  if (!products) return;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.permalink}`} passHref>
              <a>
                <Product name={product.name} price={product.price} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
