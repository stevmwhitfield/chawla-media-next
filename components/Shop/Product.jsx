import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Shop/Product.module.scss";

const Product = ({ img, name, categories, price, slug }) => {
  console.log(img);
  return (
    <div className={styles.card}>
      <Link href={slug} passHref>
        <a>
          <div className={styles.content}>
            <div className={styles.thumbnail}>
              <Image src={img.url} layout={"fill"} objectFit={"cover"} />
              <div className={styles.imageWrapper}>
                <Image src={img.url} layout={"fill"} objectFit={"contain"} />
              </div>
            </div>
            <p className={styles.category}>
              {categories
                .filter((category) => category.name !== "Sets")
                .map((category) => category.name)
                .join(", ")}
            </p>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price.formatted_with_symbol}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Product;
