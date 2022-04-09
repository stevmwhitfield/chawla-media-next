import Image from "next/image";
import styles from "../../styles/Bookings/BookingsCard.module.scss";

const BookingsCard = ({ imageSrc, imageAlt, title, details, price }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={imageAlt} width={640} height={426.667} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{title}</h2>
        <span>
          {details === null
            ? ""
            : details.split(", ").map((line, i) => {
                return <p key={i}>{line}</p>;
              })}
        </span>
        <h3>{price}</h3>
      </div>
    </article>
  );
};

export default BookingsCard;
