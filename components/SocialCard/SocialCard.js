import { SiDiscord, SiTwitter, SiInstagram } from "react-icons/si";

import styles from "./SocialCard.module.scss";

export default function SocialCard() {
  return (
    <div className={styles.SocialCard}>
      <Icon
        Icon={SiTwitter}
        name="Twitter"
        tag="@meta_angels"
        className="mb-14"
      />
      <Icon
        Icon={SiInstagram}
        name="Instagram"
        tag="@metaangelsnft"
        className="mb-14"
      />
      <Icon Icon={SiDiscord} name="Discord" tag="metaangels" className="mb-3" />
    </div>
  );
}

function Icon({ Icon, name, tag, className }) {
  return (
    <div className={styles.SocialInfo}>
      <Icon size={55} fill="rgb(8, 8, 154)" />
      <div className="ml-5">
        <span className={styles.SocialTitle}>{name}</span>
        <span className={styles.SocialTag}>{tag}</span>
      </div>
    </div>
  );
}
