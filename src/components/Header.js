import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./../StateProvider";
import { auth } from "../firebase";

export const Header = () => {
  const [{ user }] = useStateValue();
  const history = useHistory();
  const login = () => {
    if (user) {
      auth.signOut();
    } else {
      history.push("/login");
    }
  };
  return (
    <nav className="header">
      <div className="header__items">
        {" "}
        <img
          onClick={(e) => history.push("/")}
          className="header__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
          alt="logo"
        />
        <div onClick={(e) => history.push("/login")} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello {user?.email || "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
