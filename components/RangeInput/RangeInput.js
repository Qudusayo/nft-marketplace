import styles from "./RangeInput.module.scss";

export default function RangeInput({
  minValue,
  maxValue,
  minValCtrl,
  maxValCtrl,
  showUnit,
  style,
}) {
  return (
    <div className={styles.RangeInput} style={style}>
      <div className={styles.RangeInputForm}>
        <span>Lowest</span>
        <div className={styles.RangeInputFormInput}>
          <input
            size={""}
            style={{ width: "100%" }}
            placeholder="0"
            value={minValue}
            onChange={minValCtrl}
          />
          {showUnit && <span>ETH</span>}
        </div>
      </div>
      <div className={styles.RangeInputForm}>
        <span>Highest</span>
        <div className={styles.RangeInputFormInput}>
          <input placeholder="0" value={maxValue} onChange={maxValCtrl} />
          {showUnit && <span>ETH</span>}
        </div>
      </div>
    </div>
  );
}
