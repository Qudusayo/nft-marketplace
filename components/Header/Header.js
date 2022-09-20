import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.Header}>
      <Navbar />
      <main>
        <div className={styles.ProjectInfo}>
          <h2 className="">Meta Angels</h2>
          <div className={styles.ProjectInfoAbout}>
            <span className="">
              10,000 unique Meta Angels, each a membership card to our engaged,
              valuable community. <span className={styles.more}>Read more</span>
            </span>
            <div className={styles.ProjectInfoButtons}>
              <Button title="List Your Meta Angels" type="primary" />
              <Button title="Explore" type="secondary" />
            </div>
          </div>
        </div>
        <div className={styles.imageGallery}>
          <img
            src="https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7281.jpeg"
            alt="metaangels#7281"
            className=""
          />
          <span className="">Meta Angels #7281</span>
        </div>
      </main>
    </div>
  );
}
