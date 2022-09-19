import styles from "./Button.module.scss";

export default function Button({ title, type, className }) {
  return (
    <button
      className={[
        styles.Button,
        className,
        type === "secondary" && styles.secondary,
      ].join(" ")}
    >
      {title}
    </button>
  );
}
