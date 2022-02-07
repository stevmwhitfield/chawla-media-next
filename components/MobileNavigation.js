import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/MobileNavigation.module.scss";

const MobileNavigation = () => {
  const [isActive, setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {/* Logo and button container */}
      <div id={styles.headerContainer}>
        <div id={styles.logo}>
          <Image src="/chawla-media-logo.png" width={160} height={48}></Image>
        </div>
        <div
          id={styles.navButton}
          className={isActive ? `${styles.active}` : null}
          onClick={clickHandler}
        >
          <div className={styles.line}></div>
          <div
            id={styles.close}
            className={isActive ? `${styles.active}` : null}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
      {/* Nav container */}
      <div id={styles.navContainer}>
        <ul id="navList">
          <li className="navItem">
            <Link href="/" passHref>
              <a>
                Home
                {/* PLACE IN <a> TAG
                    className={
                    router.pathname === "/"
                        ? `${styles.navLink} ${styles.active}`
                        : `${styles.navLink}`
                    } 
                */}
              </a>
            </Link>
          </li>
          <li className="navItem">
            <Link href="#shop" passHref>
              <a>Shop</a>
            </Link>
          </li>
          <li className="navItem">
            <Link href="#portfolio" passHref>
              <a>Portfolio</a>
            </Link>
          </li>
          <li className="navItem">
            <Link href="#bookings" passHref>
              <a>Bookings</a>
            </Link>
          </li>
          <li className="navItem">
            <Link href="#contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
          <li className="navItem">
            <Link href="#about" passHref>
              <a>About Me</a>
            </Link>
          </li>
          <li className="navItem">
            <Link href="#faq" passHref>
              <a>FAQ</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
