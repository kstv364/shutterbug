import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./../StateProvider";
import { auth, db } from "../firebase";
import { Button, Avatar } from "@material-ui/core";

export const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
  
  }, []);

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
              Hello {user?.name || "Guest"}
            </span>
            <Avatar
              src={user?.userPhotoUrl}
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
