import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Gallery/HorizontalGallery.module.scss";
import { data } from "../../pages/api/data.js";

const HorizontalGallery = () => {
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    const buttonLeft = document.getElementById(styles.buttonLeft);
    const container = document.getElementById(styles.galleryContainer);
    container.scrollTo(0, 0);
    // buttonLeft.style.display = "none";
    buttonLeft.style.visibility = "hidden";
  }, []);

  useEffect(() => {
    const container = document.getElementById(styles.galleryContainer);
    const buttonLeft = document.getElementById(styles.buttonLeft);
    const buttonRight = document.getElementById(styles.buttonRight);

    if (scrollDirection === "") return;
    if (scrollDirection === "left") {
      container.scrollTo(container.scrollLeft - screen.width, 0);
    }
    if (scrollDirection === "right") {
      container.scrollTo(container.scrollLeft + screen.width, 0);
    }

    setTimeout(() => {
      checkScrollPosition(container, buttonLeft, buttonRight);
    }, 700);
    setScrollDirection("");

    return clearTimeout();
  }, [scrollDirection]);

  const checkScrollPosition = (container, buttonLeft, buttonRight) => {
    if (container.offsetWidth + container.scrollLeft >= container.scrollWidth) {
      // buttonRight.style.display = "none";
      buttonRight.style.visibility = "hidden";
    } else {
      // buttonRight.style.display = "unset";
      buttonRight.style.visibility = "visible";
    }
    if (container.offsetWidth + container.scrollLeft <= screen.width) {
      // buttonLeft.style.display = "none";
      buttonLeft.style.visibility = "hidden";
    } else {
      // buttonLeft.style.display = "unset";
      buttonLeft.style.visibility = "visible";
    }
  };

  return (
    <>
      <button id={styles.buttonLeft} onClick={() => setScrollDirection("left")}>
        Click to scroll left
      </button>
      <button
        id={styles.buttonRight}
        onClick={() => setScrollDirection("right")}
      >
        Click to scroll right
      </button>
      <div
        id={styles.galleryContainer}
        onClick={(e) => console.log("scroll left: " + e.target.scrollLeft)}
      >
        {data.map((image, i) => {
          let isVertical = image.height > image.width;
          return (
            <div
              key={i}
              className={
                isVertical
                  ? `${styles.imageContainer} ${styles.vertical}`
                  : `${styles.imageContainer}`
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                className={
                  isVertical
                    ? `${styles.galleryImage} ${styles.vertical}`
                    : `${styles.galleryImage}`
                }
              ></Image>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HorizontalGallery;
