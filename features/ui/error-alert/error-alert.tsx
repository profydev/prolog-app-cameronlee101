import { Button } from "../button";
import styles from "./error-alert.module.scss";

type ErrorAlertProps = {
  suffix: string;
};

export function ErrorAlert({ suffix }: ErrorAlertProps) {
  return (
    <div className={styles.container}>
      <div className={styles.alertMessage}>
        <img
          src="/icons/alert-circle.svg"
          alt="Alert Circle Icon"
          className={styles.icon}
        />
        <p>There was a problem while loading {suffix}</p>
      </div>
      <div>
        <Button
          className={styles.tryAgainButton}
          onClick={() => {
            window.location.reload();
          }}
        >
          <p>Try Again</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/arrow-right.svg"
            alt="Arrow Right Icon"
            className={styles.icon}
          />
        </Button>
      </div>
    </div>
  );
}
