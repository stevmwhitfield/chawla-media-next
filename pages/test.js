import { sanityClient } from "../lib/sanity";
import Image from "next/image";

const galleryQuery = `*[_type=="gallery" && name=="Home Gallery"] {
  list[] {
    _key,
    description,
    "src": image.asset->url
  }
}`;

const TestPage = ({ gallery }) => {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Test Page</h1>
      {gallery[0].list.map((item) => {
        console.log(item.src);
        console.log(item.description);
        return (
          <div
            key={item._key}
            width={750}
            height={500}
            style={{ position: "relative", width: "750px", height: "500px" }}
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

export default TestPage;

export async function getStaticProps() {
  const gallery = await sanityClient.fetch(galleryQuery);
  return { props: { gallery } };
}
