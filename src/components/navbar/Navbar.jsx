import React from "react";
import "./navbar.scss";
import {
  DarkMode,
  DarkModeOutlined,
  LanguageOutlined,
  NotAccessible,
  NotificationAdd,
  NotificationsTwoTone,
  SearchOffRounded,
  SearchOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            English
          </div>
          <div className="item">
            <DarkModeOutlined />
          </div>
          <div className="item">
            <DarkMode />
          </div>
          <div className="item">
            <DarkModeOutlined />
          </div>
          <div className="item">
            <NotificationsTwoTone  className="icon"/>
            <span>3</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
