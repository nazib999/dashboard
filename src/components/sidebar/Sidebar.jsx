import React, { Profiler } from "react";
import "./sidebar.scss";

import {
  Dashboard,
  DeliveryDining,
  DesignServicesTwoTone,
  LocalGasStationOutlined,
  Logout,
  NotificationAdd,
  OutputRounded,
  PowerOffOutlined,
  ProductionQuantityLimitsRounded,
  Settings,
  Star,
  VerifiedUser,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">Lamadev</div>
      </div>
      
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <VerifiedUser className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsRounded className="icon" />
            <span>Products</span>
          </li>
          <li>
            <OutputRounded className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDining className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <Star className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationAdd className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">Services</p>
          <li>
            <DesignServicesTwoTone className="icon" />
            <span>Service Health</span>
          </li>
          <li>
            <LocalGasStationOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">User</p>
          <li>
            <PowerOffOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorBg"></div>
        <div className="colorBg"></div>
      </div>
    </div>
  );
};

export default Sidebar;
