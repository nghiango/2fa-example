import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import PlusIcon from "@assets/images/plus.png";
import BackIcon from "@assets/images/back.png";
export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const navigateToAddMfa = () => {
    navigate("/add");
  };
	const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="header">
      {location.pathname !== "/add" ? (
        <>
          <div>Edit</div>
          <div>Tokens</div>
          <img
            onClick={navigateToAddMfa}
            className="header__add"
            src={PlusIcon}
            alt="plus-icon"
          />
        </>
      ) : (
        <>
          <img
            onClick={navigateToHome}
            className="header__back"
            src={BackIcon}
            alt="back-icon"
          />
          <div>Add Service</div>
					<div></div>
        </>
      )}
    </div>
  );
};
