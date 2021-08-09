import React from "react";
import "../styles/css/SidebarCard.css";

export default function SidebarCard({ title }) {
  return (
    <div className={title === "HOME" ? "sidebar-card active" : "sidebar-card "}>
      <p>{title}</p>
    </div>
  );
}
