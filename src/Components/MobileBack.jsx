import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function MobileBack({ link, customIcon }) {
  return (
    <Link to={link || "/menu"}>
      <div className="mobile-back">
        <FontAwesomeIcon icon={customIcon || faArrowLeft} />
      </div>
    </Link>
  );
}

export default MobileBack;
