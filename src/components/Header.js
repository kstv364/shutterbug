import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./../StateProvider";
import { auth } from "../firebase";
import { Button, Avatar } from "@material-ui/core";

export const Header = () => {
  const [{ user }, dispatch] = useStateValue();
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
        <div className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello {user?.displayName || user?.email || "Guest"}
            </span>
            <Avatar
              src={user?.photoURL}
              onClick={(e) => user && history.push("/profile")}
              alt="user"
            ></Avatar>
            <Button onClick={login} className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
