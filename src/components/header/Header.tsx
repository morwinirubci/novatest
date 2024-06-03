import logo from "../../assets/img/logo.webp";
import { NavLink } from "react-router-dom";

import "./Header.css";
import Button from "../button/Button";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top">
            <NavLink to="/">
              <img className="logo" src={logo} alt="Logo" />
            </NavLink>
            <Button classlist={'header__btn btn'} link={"contacts"}>Подключить подписку</Button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
