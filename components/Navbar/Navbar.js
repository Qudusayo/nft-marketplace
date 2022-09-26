import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";

import CustomConnectBtn from "../CustomConnectBtn/CustomConnectBtn";

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
      <CustomConnectBtn />
    </nav>
  );
}
