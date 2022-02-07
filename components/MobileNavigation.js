import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/MobileNavigation.module.scss";

const MobileNavigation = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {/* Logo and button container */}
      <div id={styles.headerContainer}>
        <div id={styles.logo}>
          <Image
            src="/chawla-media-logo.png"
            alt="Chawla Media Logo"
            width={160}
            height={48}
          ></Image>
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
      <nav
        id={styles.navContainer}
        className={isActive ? `${styles.active}` : null}
      >
        <ul id={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" passHref>
              <a
                className={
                  router.pathname === "/"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#shop" passHref>
              <a
                className={
                  router.pathname === "/shop" ||
                  router.pathname === "shop.chawlamedia.com"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Shop
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#portfolio" passHref>
              <a
                className={
                  router.pathname === "/portfolio"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Portfolio
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#bookings" passHref>
              <a
                className={
                  router.pathname === "/bookings"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Bookings
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#contact" passHref>
              <a
                className={
                  router.pathname === "/contact"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Contact
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#about" passHref>
              <a
                className={
                  router.pathname === "/about"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                About Me
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#faq" passHref>
              <a
                className={
                  router.pathname === "/faq"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                FAQ
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;
