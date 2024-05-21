import MobileButton from "./MobileButton";
import HamburgerMenu from "../Assets/burger.png";
function Header() {
  return (
    <div className="header-container">
      <h1 className="logo-text">Bun drop</h1>
      <MobileButton img={HamburgerMenu} />
    </div>
  );
}
export default Header;
