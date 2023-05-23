import "./Header";
import "./Header.css";
import Commerce_Hub from "./Commerce_Hub.png";
const Header = () => {
  return (
    <div className="Header">
      <a href="index.html" className="LogoName">
        <img src={Commerce_Hub} alt="Commerce Hub" className="Logo" />
        Commerce Hub
      </a>
    </div>
  );
};

export default Header;
