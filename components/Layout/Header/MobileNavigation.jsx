import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../../styles/Layout/Header/MobileNavigation.module.scss";

const MobileNavigation = ({ categories }) => {
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
          <Link href="/">
            <a>
              <Image
                src="/chawla-media-logo.png"
                alt="Chawla Media Logo"
                width={160}
                height={48}
              ></Image>
            </a>
          </Link>
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
          {categories.map((category) => {
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
    </>
  );
};

export default MobileNavigation;
