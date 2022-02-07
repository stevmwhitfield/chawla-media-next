import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/DesktopNavigation.module.scss";

const DesktopNavigation = () => {
  const router = useRouter();
  return (
    <>
      <div id={styles.headerContainer}>
        <div id={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src="/chawla-media-logo.png"
                alt="Chawla Media Logo"
                width={170}
                height={52}
              ></Image>
            </a>
          </Link>
        </div>
        <nav id={styles.navContainer}>
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
              <Link href="/portfolio" passHref>
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
              <Link href="/bookings" passHref>
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
              <Link href="/contact" passHref>
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
              <Link href="/about-me" passHref>
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
              <Link href="/faq" passHref>
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
        <div id={styles.shop}>
          <button className="button">
            <Link href="/shop" passHref>
              <a>
                SHOP
                <span></span>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
