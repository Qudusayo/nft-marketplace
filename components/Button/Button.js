import styles from "./Button.module.scss";

export default function Button({ title, type, className, children }) {
  return (
    <button
      className={[
        styles.Button,
        className,
        type?.includes("secondary") && styles.secondary,
        type?.includes("small") && styles.smallBtn,
      ].join(" ")}
    >
      {title || children}
    </button>
  );
}
