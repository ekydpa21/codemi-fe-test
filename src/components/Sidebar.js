import React, { useState } from "react";
import "../styles/css/Sidebar.css";
import SidebarCard from "./SidebarCard";

export default function Sidebar() {
  const [nav] = useState(["HOME"]);
  return (
    <div className="sidebar">
      <div className="menu">
        {nav.map((e, idx) => {
          return <SidebarCard key={idx} title={e} />;
        })}
      </div>
    </div>
  );
}
