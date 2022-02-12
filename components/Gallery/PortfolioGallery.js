import Image from "next/image";
import styles from "../../styles/Gallery/PortfolioGallery.module.scss";

const PortfolioGallery = ({ gallery }) => {
  return (
    <div id={styles.galleryContainer}>
      {gallery.map((item) => {
        let isVertical = item.height > item.width;
        return (
          <div
            key={item._key}
            className={
              isVertical
                ? `${styles.imageContainer} ${styles.vertical}`
                : `${styles.imageContainer}`
            }
          >
            <Image
              src={item.src}
              alt={item.description}
              title={item.description}
              layout="fill"
            ></Image>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioGallery;
