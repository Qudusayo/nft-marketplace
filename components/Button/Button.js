import styles from "./Button.module.scss";

export default function Button({
  title,
  type,
  className,
  children,
  clickFunction,
}) {
  return (
    <button
      className={[
        styles.Button,
        className,
        type?.includes("secondary") && styles.secondary,
        type?.includes("small") && styles.smallBtn,
      ].join(" ")}
      onClick={clickFunction}
    >
      {title || children}
    </button>
  );
}
