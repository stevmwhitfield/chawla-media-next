import Image from "next/image";
import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/About/About.module.scss";

const AboutPage = () => {
  return (
    <>
      <CustomHead
        title="About Me | Chawla Media"
        description="Learn about the founder of Chawla Media, Sunishth Chawla."
        url="https://www.chawlamedia.com/about-me"
      />
      <Layout>
        <section className="pageHeader">
          <h1>About Me</h1>
          <h2>Sunishth Chawla</h2>
        </section>
        <section className={styles.container}>
          <article id={styles.imageContainer}>
            <Image
              src="/sunishth-chawla.jpg"
              alt="Sunishth Chawla"
              width={500}
              height={500}
            />
          </article>
          <article id={styles.contentContainer}>
            <p>
              It all started when my dad would have me use his huge DSLRs to
              take pictures of the family. Every time I would take a picture, it
              would be blurry, uncentered, and nowhere near professional. Over
              the course of five years, I have developed the technique of
              photography; whether it be of cars, human subjects, or nature.
              Having just bought my first, &quot;very own&quot; camera, I have
              finally gotten the freedom to travel to many parts of the country
              that I never knew existed. Since then, I have been clicking away
              and satisfying not only my clientele, but my own self as well.
            </p>
            <p>
              Alongside being your photographer, I want to teach you what it is
              like to pick up a hobby like mine and actually be able to go forth
              with it. The process of picking up a camera and taking a picture
              is intricate enough, but there is a lot behind behind the scenes
              that goes on to capture that vivid shot that we want to show our
              friends, family, and the whole world.
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
