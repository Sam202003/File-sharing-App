import { Files, Shield, Upload } from "lucide-react";
import React from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: Files,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];
  return (
    <div>
      <div className="p-5 border-b ">
        <Image src="/logo.svg" width={150} height={100} />
      </div>
      <div className="flex flex-col float-left">
        {menuList.map((item, index) => (
          <button className="flex gap-2 p-4 px-0 hover:bg-gray-100">
            {/* <Upload/> */}
            <item.icon/>
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
