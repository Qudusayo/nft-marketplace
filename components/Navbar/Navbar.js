import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import Button from "../Button/Button";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <h2>
        <Link href="/">Meta Angels</Link>
      </h2>
      <div className={styles.SearchBox}>
        <span>Search by Meta Angels</span>
        <RiSearchLine size={15} className={styles.SearchBoxIcon} />
      </div>
      <Button
        title={
          <span>
            Connect <span>Wallet</span>
          </span>
        }
        className={styles.Button}
        type="secondary"
      />
    </nav>
  );
}
