import styles from "./Register.module.scss";

const Register = () => {
  return (
    <form className={styles.registerForm}>
      <div className={styles.section}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="First Name" required />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="Email" required />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;
