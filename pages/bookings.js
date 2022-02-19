import Image from "next/image";
import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Bookings/Bookings.module.scss";

const BookingsPage = () => {
  return (
    <>
      <CustomHead
        title="Bookings | Chawla Media"
        description="Find your ideal photoshoot."
        url="https://www.chawlamedia.com/bookings"
      />
      <Layout>
        <section className="pageHeader">
          <h1>Bookings</h1>
          <h2>Let's create something together</h2>
        </section>
        {/* Convert to component */}
        <section className={styles.container}>
          <article className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/data/mustang.webp"
                alt="mustang"
                width={640}
                height={360}
              />
            </div>
            <div className={styles.contentContainer}>
              <h2>Rollers</h2>
              <span>
                <p>3-4 locations</p>
                <p>60-120 minutes</p>
              </span>
              <h3>$130</h3>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/data/mustang.webp"
                alt="mustang"
                width={640}
                height={360}
              />
            </div>
            <div className={styles.contentContainer}>
              <h2>Rollers</h2>
              <span>
                <p>3-4 locations</p>
                <p>60-120 minutes</p>
              </span>
              <h3>$130</h3>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/data/mustang.webp"
                alt="mustang"
                width={640}
                height={360}
              />
            </div>
            <div className={styles.contentContainer}>
              <h2>Rollers</h2>
              <span>
                <p>3-4 locations</p>
                <p>60-120 minutes</p>
              </span>
              <h3>$130</h3>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src="/data/mustang.webp"
                alt="mustang"
                width={640}
                height={360}
              />
            </div>
            <div className={styles.contentContainer}>
              <h2>Rollers</h2>
              <span>
                <p>3-4 locations</p>
                <p>60-120 minutes</p>
              </span>
              <h3>$130</h3>
            </div>
          </article>
        </section>
        <section id={styles.footnote}>
          <p>* Additional fees may apply</p>
          <p>* 50% deposit is required for videoshoots</p>
          <p>* No refunds for cancellations</p>
        </section>
      </Layout>
    </>
  );
};

export default BookingsPage;
