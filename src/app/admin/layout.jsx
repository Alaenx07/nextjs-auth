import React from "react";
import Navbar from "./ui/navbar/navbar";
import Sidebar from "./ui/sidebar/Sidebar";

export default function layout({ children }) {
  return (
    <div className=" grid grid-cols-4 ">
      <div className=" col-span-1">
        <Sidebar />
      </div>
      <div className=" col-span-3">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
