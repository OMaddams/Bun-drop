import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function MobileBack() {
  return (
    <Link to={"/menu"}>
      <div className="mobile-back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    </Link>
  );
}

export default MobileBack;
