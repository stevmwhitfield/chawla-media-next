import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/Layout/Header/DesktopNavigation.module.scss";

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
              <Link href="/categories/prints" passHref>
                <a
                  className={
                    router.pathname === "/categories/prints"
                      ? `${styles.navLink} ${styles.active}`
                      : `${styles.navLink}`
                  }
                >
                  Prints
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/categories/posters" passHref>
                <a
                  className={
                    router.pathname === "/categories/posters"
                      ? `${styles.navLink} ${styles.active}`
                      : `${styles.navLink}`
                  }
                >
                  Posters
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
          </ul>
        </nav>
        <div id={styles.shop}>
          <button className="button">
            <Link href="/cart" passHref>
              <a>
                {/* Add number of items in cart */}
                CART<span></span>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
