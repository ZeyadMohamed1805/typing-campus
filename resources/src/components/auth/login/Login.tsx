import styles from "./Login.module.scss";
import googleIcon from "../../../../icons/google.svg";
import linkedinIcon from "../../../../icons/linkedin.svg";

const Login = () => {
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };

  const handleLinkedInSignIn = () => {
    console.log("LinkedIn Sign-In clicked");
  };

  return (
    <form className={styles.loginForm}>
      
      <div className={styles.section}>
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

      <div className={styles.divider}>or</div>

      <div className={styles.thirdPartySection}>
        <button
          type="button"
          className={styles.thirdPartyButton}
          onClick={handleGoogleSignIn}
        >
          <img src={googleIcon} alt="Google Logo" />
          Continue with Google
        </button>

        <button
          type="button"
          className={styles.thirdPartyButton}
          onClick={handleLinkedInSignIn}
        >
          <img src={linkedinIcon} alt="LinkedIn Logo" />
          Continue with LinkedIn
        </button>
      </div>
    </form>
  );
};

export default Login;
