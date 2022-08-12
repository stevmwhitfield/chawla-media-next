import Product from "./Product";
import styles from "../../styles/Shop/ProductList.module.scss";

const ProductList = ({ products }) => {
	if (!products) return;

	return (
		<ul className={styles.list}>
			{products.map((product) => {
				return (
					<li key={product.id}>
						<Product
							img={product.image.url}
							name={product.name}
							price={product.price}
							slug={`/products/${product.permalink}`}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ProductList;
