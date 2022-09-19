import Link from "next/link";
// Style
import styles from "./Navbar.module.css";
// Icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { GiRazor } from "react-icons/gi";
// Data
import { nav } from "../src/data";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.logoLink}>
            <GiRazor className={styles.logoIcon} />
            Garber
          </a>
        </Link>
      </div>

      <nav>
        <ul className={styles.navbar}>
          {nav.map((item, idx) => {
            return (
              <li key={idx} className={styles.navItem}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.mobile}>
        <RiMenu4Fill className={styles.icon} />
        <RiCloseFill className={styles.icon} />
      </div>
    </div>
  );
}
