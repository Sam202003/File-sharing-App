import React from "react";
import SideNav from "./_components/SideNav";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="h-full w-64 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="ml-64 ">{children}</div>
    </div>
  );
};

export default Layout;
