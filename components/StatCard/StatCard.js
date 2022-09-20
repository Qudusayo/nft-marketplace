import styles from "./StatCard.module.scss";

export default function StatCard() {
  return (
    <div className={styles.StatCard}>
      <StatData value="Stats" />
      <StatData title="From" value="0.055 ETH" />
      <StatData title="Items" value="10.2K" />
      <StatData title="Owners" value="5.1K" />
      <StatData title="Volume" value="3K ETH" />
    </div>
  );
}

function StatData({ title, value }) {
  return (
    <div className={styles.StatData}>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
}
