import { sanityClient, urlFor } from "../lib/sanity";
import Image from "next/image";

const galleryQuery = `*[]`;
// NEED API KEY

const TestPage = ({ gallery }) => {
  console.log(gallery);
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      {/* {gallery.length !== 0
        ? gallery.map((image) => {
            return (
              <Image
                key={image.key}
                src={urlFor(image.ref).url()}
                alt={image.description}
              ></Image>
            );
          })
        : console.error("Failed to query gallery.")} */}
    </div>
  );
};

export default TestPage;

export async function getStaticProps() {
  const gallery = await sanityClient.fetch(galleryQuery);
  return { props: { gallery } };
}
