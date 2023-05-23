import "./Header";
import styles from "./Header.module.css";
import Commerce_Hub from "./Commerce_Hub.png";
const Header = () => {
  return (
    <div className={styles.Header}>
      <a href="index.html" className={styles.LogoName}>
        <img src={Commerce_Hub} alt="Commerce Hub" className={styles.Logo} />
        Commerce Hub
      </a>
    </div>
  );
};

export default Header;
