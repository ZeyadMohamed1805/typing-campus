import styles from "./Actions.module.scss";

const Actions = () => {
  return (
    <section className={styles.actionsSection}>
      <div className={styles.actionsWrapper}>
        <h2 className={styles.actionsTitle}>Start Your Journey Today!</h2>
        <p className={styles.actionsDescription}>
          Join thousands of learners improving their skills. Get started now and take the first step toward success.
        </p>
        <div className={styles.actionsButtonGroup}>
          <button>Join Now!</button>
        </div>
      </div>
    </section>
  );
};

export default Actions;
