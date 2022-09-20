import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <span>&copy; Meta Angels {(new Date()).getFullYear()}</span>
      <div>
        <span>Terms</span>
        <span>Built by Qudusayo</span>
      </div>
    </footer>
  );
}
