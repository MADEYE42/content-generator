"use client"
import { Home, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();

  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
      </div>
      <hr className="my-6 border" />

      <div>
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg duration-300 cursor-pointer items-center ${
              path === menu.path ? "bg-primary text-white" : ""
            }`}
            onClick={() => {
              // Example: navigate using next/router
              window.location.href = menu.path;
            }}
          >
            <menu.icon className="h-7 w-6" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
