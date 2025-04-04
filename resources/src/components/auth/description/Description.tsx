import styles from "./Description.module.scss";

const Description = () => {
  return (
    <div className={styles.description}>
      <h1 className={styles.descriptionTitle}>Unlock Your Potential</h1>
      <p className={styles.descriptionSubtitle}>Join our community and take your skills to the next level.</p>
    </div>
  )
};

export default Description;
