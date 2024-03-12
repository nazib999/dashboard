import React from "react";
import "./wiget.scss";
import {
  AccountBalance,
  KeyboardArrowUp,
  MonetizationOn,
  MoneyOffCsredRounded,
  PersonOutline,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";

const Wiget = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutline
            className="icon"
            style={{ color: "white", background: "red" }}
          />
        ),
      };

      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "See all orders",
        icon: (
          <MoneyOffCsredRounded
            className="icon"
            style={{ color: "white", background: "purple" }}
          />
        ),
      };

      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "See all earning",
        icon: (
          <MonetizationOn
            className="icon"
            style={{ color: "white", background: "yellow" }}
          />
        ),
      };

      break;
    case "balence":
      data = {
        title: "BALENCE",
        isMoney: true,
        link: "See balence",
        icon: (
          <AccountBalance
            className="icon"
            style={{ color: "white", background: "teal" }}
          />
        ),
      };

      break;

    default:
      break;
  }

  return (
    <div className="wiget">
      <div className="left">
        <span className="user">{data.title}</span>
        <span className="number">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp /> {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Wiget;
