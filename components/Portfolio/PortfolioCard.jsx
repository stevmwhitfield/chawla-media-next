import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Portfolio/PortfolioCard.module.scss";

const PortfolioCard = ({ title, type, imgSrc, imgAlt, url }) => {
  return (
    <article className={styles.card}>
      <Link href={`/portfolio/${url}`} passHref>
        <a>
          <div className={styles.contentContainer}>
            <h1>{title}</h1>
            <h3>{type}</h3>
          </div>
          <div className={styles.imageContainer}>
            <Image src={imgSrc} alt={imgAlt} layout="fill"></Image>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default PortfolioCard;
