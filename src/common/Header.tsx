import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import PlusIcon from "@assets/icons/plus.svg";
import BackIcon from "@assets/icons/back.svg";

const HeaderListPage = () => {
  const navigate = useNavigate();
  const navigateToAddMfa = () => {
    navigate("/add");
  };
  return (<>
      <div className="header">
        <div className="header__text">Edit</div>
        <div className="header__title">Tokens</div>
        <img
          onClick={navigateToAddMfa}
          className="header__icon-right"
          src={PlusIcon}
          alt="plus-icon"
        />
      </div>
    </>

  );
};

const HeaderAddMfaPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <img
          onClick={navigateToHome}
          className="header__icon-left"
          src={BackIcon}
          alt="back-icon"
        />
        <div className="header__title">Add Service</div>
        <div></div>
      </div>
    </>

  );
};
export const Header = () => {
  const location = useLocation();
  const getHeader = () => {
    switch (location.pathname) {
      case "/add":
        return <HeaderAddMfaPage/>;
      case "/":
        return <HeaderListPage/>;
      default:
        return <HeaderListPage/>;
    }
  };
  return (
    getHeader()
  );
};
