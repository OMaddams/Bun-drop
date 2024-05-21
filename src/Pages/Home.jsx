import LogoColor from "../Assets/logo-color.png";
import MobilebuttonLarge from "../Components/MobileButtonLarge";
const Home = () => {
  return (
    <>
      <div className="hero-container">
        <img src={LogoColor} />
        <MobilebuttonLarge text={"Menu"} />
      </div>
    </>
  );
};
export default Home;
