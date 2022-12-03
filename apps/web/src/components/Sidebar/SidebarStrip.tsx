import React from "react";
import SidebarIcons from "./SidebarIcons";

interface ISidebarStripProps {
  title: string;
  icon: keyof typeof SidebarIcons;
  active?: boolean;
  onClick?: () => void;
}

const SidebarStrip = ({ title, icon, active, onClick }: ISidebarStripProps) => {
  return (
    <div
      className={`flex ${
        active ? "bg-satanicPurple" : "opacity-50"
      } py-4 px-6 items-center rounded-3xl cursor-pointer ${
        !active ? "hover:opacity-75" : ""
      }`}
      onClick={() => onClick?.()}
    >
      <div className="mr-6 flex items-center">{SidebarIcons[icon]}</div>
      <div className="flex items-center">{title}</div>
    </div>
  );
};

export default SidebarStrip;
