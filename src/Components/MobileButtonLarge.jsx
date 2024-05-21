import { Link } from "react-router-dom";

function MobilebuttonLarge({ text, route, onClick }) {
  return (
    <Link to={route}>
      <div className="mobile-button-large" onClick={onClick}>
        <p className="button-text">{text}</p>
      </div>
    </Link>
  );
}

export default MobilebuttonLarge;
