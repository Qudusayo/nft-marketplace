import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import styles from "./Summary.module.scss";

export default function Summary({ isActive = false, title, children }) {
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div className={styles.Summary}>
      <div
        className={styles.SummaryHeader}
        onClick={() => setIsOpen((dropOpen) => !dropOpen)}
      >
        <h2>{title}</h2>
        {isOpen ? (
          <FaChevronUp size={12} fill="rgba(4, 4, 4, 0.35)" />
        ) : (
          <FaChevronDown size={12} fill="rgba(4, 4, 4, 0.35)" />
        )}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
