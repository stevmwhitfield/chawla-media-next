import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Shop/Product.module.scss";

const Product = ({ img, name, price, slug }) => {
	return (
		<div className={styles.card}>
			<Link href={slug} passHref>
				<a>
					<div className={styles.content}>
						<div className={styles.thumbnail}>
							<Image src={img} layout="responsive" width={640} height={360} />
						</div>
						<p className={styles.title}>{name}</p>
						<p className={styles.price}>{price.formatted_with_symbol}</p>
					</div>
				</a>
			</Link>
			<div className={styles.divider}></div>
			<div className={styles.wrapper}>
				<button className={styles.button}>Add to cart</button>
			</div>
		</div>
	);
};

export default Product;
