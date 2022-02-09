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
      buttonRight.style.visibility = "hidden";
    } else {
      buttonRight.style.visibility = "visible";
    }
    if (container.offsetWidth + container.scrollLeft <= screen.width) {
      buttonLeft.style.visibility = "hidden";
    } else {
      buttonLeft.style.visibility = "visible";
    }
  };

  return (
    <>
      <div id={styles.buttonContainer}>
        <button
          id={styles.buttonLeft}
          onClick={() => setScrollDirection("left")}
        >
          <span></span>
        </button>
        <button
          id={styles.buttonRight}
          onClick={() => setScrollDirection("right")}
        >
          <span></span>
        </button>
      </div>
      <div id={styles.galleryContainer}>
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
                className={isVertical ? `${styles.vertical}` : null}
              ></Image>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HorizontalGallery;
