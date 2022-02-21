import { sanityClient } from "../lib/sanity";
import BookingsCard from "../components/Bookings/BookingsCard";
import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Bookings/Bookings.module.scss";

// TODO
// Use dynamic cards
//   Change cards to components
//   Pull card content from Sanity

const cardsQuery = `
  *[_type=="bookingsCard"] | order(_createdAt) {
    _id
    name,
    details,
    price,
    "url":image.asset->url,
    alt
  }
`;

const BookingsPage = ({ cards }) => {
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
          <h2>Let&apos;s create something together</h2>
        </section>
        {/* Convert to component */}
        <section className={styles.container}>
          {cards.map((card) => {
            return (
              <BookingsCard
                key={card._id}
                imageSrc={card.url}
                imageAlt={card.alt}
                title={card.name}
                details={card.details}
                price={card.price}
              />
            );
          })}
          {/* <BookingsCard
            imageSrc="/bookings-1.jpg"
            imageAlt="Mustang"
            title="Stills"
            details="3-4 locations, 60-120 minutes"
            price={130}
          />
          <BookingsCard
            imageSrc="/bookings-2.jpg"
            imageAlt="Mustang"
            title="Rollers"
            details="3-4 locations, 60-120 minutes"
            price={130}
          />
          <BookingsCard
            imageSrc="/bookings-3.jpg"
            imageAlt="Mustang"
            title="Portraits"
            details="3-4 locations, 60-120 minutes"
            price={130}
          />
          <BookingsCard
            imageSrc="/bookings-4.jpg"
            imageAlt="Mustang"
            title="Cinematics"
            details="3-4 locations, 60-120 minutes"
            price={130}
          /> */}
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

export async function getStaticProps() {
  const cards = await sanityClient.fetch(cardsQuery);
  return { props: { cards } };
}
