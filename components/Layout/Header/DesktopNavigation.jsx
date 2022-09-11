import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/Layout/Header/DesktopNavigation.module.scss";

const DesktopNavigation = ({ categories }) => {
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
            {/* {categories.map((category) => {
              if (category.children.length > 0) {
                return (
                  <li
                    key={category.id}
                    className={`${styles.navItem} ${styles.hasSubmenu}`}
                  >
                    <Link href={`/categories/${category.slug}`} passHref>
                      <a
                        className={
                          router.pathname === `/categories/${category.slug}`
                            ? `${styles.navLink} ${styles.active}`
                            : `${styles.navLink}`
                        }
                      >
                        {category.name}
                      </a>
                    </Link>
                    <ul className={styles.submenu}>
                      {category.children.map((child) => {
                        return (
                          <li key={child.id} className={styles.submenuItem}>
                            <Link
                              href={`/categories/${category.slug}/${child.slug}`}
                              passHref
                            >
                              <a
                                className={
                                  router.pathname ===
                                  `/categories/${category.slug}`
                                    ? `${styles.navLink} ${styles.active}`
                                    : `${styles.navLink}`
                                }
                              >
                                {child.name}
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={category.id} className={styles.navItem}>
                    <Link href={`/categories/${category.slug}`} passHref>
                      <a
                        className={
                          router.pathname === `/categories/${category.slug}`
                            ? `${styles.navLink} ${styles.active}`
                            : `${styles.navLink}`
                        }
                      >
                        {category.name}
                      </a>
                    </Link>
                  </li>
                );
              }
            })} */}
            {categories.map((category) => {
              return (
                <li
                  key={category.id}
                  className={`${styles.navItem} ${styles.hasSubmenu}`}
                >
                  <Link href={`/categories/${category.slug}`} passHref>
                    <a
                      className={
                        router.pathname === `/categories/${category.slug}`
                          ? `${styles.navLink} ${styles.active}`
                          : `${styles.navLink}`
                      }
                    >
                      {category.name}
                    </a>
                  </Link>
                </li>
              );
            })}
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
