import styles from "./loading-indicator.module.scss";

export function LoadingIndicator() {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/loading-circle.svg"
        alt="loading circle"
        className={styles.loadingCircle}
        data-test="loading-indicator"
      />
    </div>
  );
}
