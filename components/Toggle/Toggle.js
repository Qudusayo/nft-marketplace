import React from "react";
import styles from "./Toggle.module.scss";

export default function Toggle({ label, title }) {
  return (
    <label htmlFor={label} className={styles.Toggler}>
      <span className={styles.TogglerTitle}>{title}</span>
      <div className={styles.container}>
        <div className={styles.toggleSwitch}>
          <input
            type="checkbox"
            className={styles.checkbox}
            name={label}
            id={label}
          />
          <div className={styles.label}>
            <span className={styles.inner} />
            <span className={styles.switch}></span>
          </div>
        </div>
      </div>
    </label>
  );
}
