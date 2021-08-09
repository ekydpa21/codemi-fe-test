import React from "react";
import "../styles/css/SidebarCard.css";

export default function SidebarCard({ title }) {
  return (
    <div className="sidebar-card active">
      <p>{title}</p>
    </div>
  );
}
