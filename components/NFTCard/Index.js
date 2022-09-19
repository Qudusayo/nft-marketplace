import styles from "./NFTCard.module.scss";

export default function NFTCard({ image, name, price, bid }) {
  return (
    <div className={styles.NFTCard}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div className={styles.pricingInfo}>
        <div>
          <span>Mirrored</span>
          <span>{price}</span>
        </div>
        <div>
          <span>Highest bid</span>
          <span>{bid}</span>
        </div>
      </div>
      <button>Buy now</button>
    </div>
  );
}
