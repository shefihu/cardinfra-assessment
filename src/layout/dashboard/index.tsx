import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../common/Sidebar";
import Header from "../../common/Header";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-[#F8FBFF] ">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col lg:ml-[230px] w-full">
        <Header toggleSidebar={toggleSidebar} />

        <div className="flex-1 px-5 pt-2 pb-5 overflow-auto w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
