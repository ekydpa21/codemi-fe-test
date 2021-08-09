import React, { useState } from "react";
import logo from "../assets/codemi-logo.png";
import profile from "../assets/profile.jpg";
import arrow from "../assets/down-arrow.svg";
import bell from "../assets/bell.svg";
import "../styles/css/Navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <div className="widgets">
          <img src={bell} alt="notification bell" className="notifBell" />
        </div>
        <div
          className={clicked ? "profile active" : "profile"}
          onClick={() => setClicked(!clicked)}
        >
          <div className="user">
            <img className="profile-picture" src={profile} alt="profile" />
            <img src={arrow} alt="arrow" className="arrow" />
          </div>
          <div className={clicked ? "user-menu" : "user-menu hidden"}>
            <ul>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
