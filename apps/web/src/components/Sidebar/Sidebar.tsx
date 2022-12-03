import React, { useState } from "react";
import useSidebarStore from "../../zustand";
import SidebarIcons from "./SidebarIcons";
import SidebarStrip from "./SidebarStrip";

const Sidebar = () => {
  const activeTab = useSidebarStore((state) => state.activeSidebar);
  const setActiveTab = useSidebarStore((state) => state.setActiveSidebar);
  const menus = [
    {
      icon: "myCloud",
      label: "My Cloud",
      link: "/cloud",
    },
    {
      icon: "shared",
      label: "Upload",
      link: "/cloud",
    },
    {
      icon: "document",
      label: "All Files",
      link: "/cloud",
    },
    {
      icon: "star",
      label: "Favourite",
      link: "/cloud",
    },
  ];

  return (
    <div className="h-screen bg-mattBlack text-white text-sm w-1/6 p-4 flex flex-col font-medium">
      <div className="text-white text-4xl mt-2 mb-48 mx-4 font-semibold">
        StoreD
      </div>
      <div className="flex flex-col gap-4 flex-1">
        {menus.map((menu) => (
          <SidebarStrip
            key={menu.icon}
            active={activeTab === menu.icon}
            icon={menu.icon as keyof typeof SidebarIcons}
            title={menu.label}
            onClick={() => setActiveTab(menu.icon)}
          />
        ))}
      </div>

      <div className="mt-auto">
        <SidebarStrip icon="chat" title="Help & Support" />
        <SidebarStrip icon="logout" title="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
