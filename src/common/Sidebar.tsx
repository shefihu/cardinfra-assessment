import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

import type { FC } from "react";
import type { SidebarLinkProps, SidebarProps } from "../interface/common";
import { CardInfraLogo, Logo, LogOutIcon } from "../assets/svg/svg";
import { sidebarRoutes } from "./SidebarItems";
import { RoutePaths } from "../routes/routesPath";

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const SidebarLink: FC<SidebarLinkProps> = ({
    to,
    icon,
    name,
    toggleSidebar,
  }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({
      path: `${resolvedPath.pathname}/*`,
      end: true,
    });

    return (
      <li className="w-full">
        <Link
          to={to}
          onClick={toggleSidebar}
          className={
            isActive
              ? "w-full text-primary font-medium h-[38px] rounded-lg bg-gray-light border border-gray py-2.5 px-3 flex items-center gap-3"
              : "w-full text-black/50 h-[38px] py-2.5 hover:text-primary transition ease-in duration-200 px-3 flex items-center gap-3"
          }
        >
          {icon}
          <span className="text-sm font-medium ">{name}</span>
        </Link>
      </li>
    );
  };
  const navigate = useNavigate();
  // Get the dashboard item and the rest of the sidebar items
  const dashboardItem = sidebarRoutes.find(
    (route) => route.name === "Dashboard"
  );
  const mainMenuItems = sidebarRoutes.filter(
    (route) => route.name !== "Dashboard"
  );
  const handleLogout = () => {
    navigate(RoutePaths.ROOT);
  };
  return (
    <div
      className={`fixed top-0 left-0 z-[99] w-[230px] h-screen bg-white border-r border-[#EDEFF2] flex flex-col transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Logo section - fixed at top */}
      <div className="px-2.5 pt-6 flex justify-between items-center shrink-0">
        <Logo />
        <button className="lg:hidden" onClick={toggleSidebar}>
          <button
            className="flex flex-col items-center lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <span
              className={`block rotate-45 translate-y-0.5 h-0.5 w-5 bg-dark transition-all duration-300 ease-in-out `}
            />
            <span
              className={`block -rotate-45 -translate-y-0.5 h-0.5 w-5 bg-dark transition-all duration-300 ease-in-out `}
            />
          </button>
        </button>
      </div>

      {/* Scrollable content area */}
      <div className="flex flex-col justify-between flex-1 min-h-0 gap-8 mt-8 pb-7">
        {/* This div will be scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-[14px]">
          <ul className="w-full space-y-[14px]">
            {/* Dashboard item */}
            {dashboardItem && (
              <SidebarLink
                key={`${dashboardItem.name}-0`}
                icon={dashboardItem.icon}
                name={dashboardItem.name}
                to={dashboardItem.path}
                toggleSidebar={toggleSidebar}
              />
            )}

            {/* Main Menu header */}
            <div className="px-4 pt-4 pb-2">
              <p className="text-[8.5px] font-medium text-[#7E8B9C]">
                MAIN MENU
              </p>
            </div>

            {/* Rest of the menu items */}
            {mainMenuItems.map((route, index) => (
              <SidebarLink
                key={`${route.name}-${index + 1}`}
                icon={route.icon}
                name={route.name}
                to={route.path}
                toggleSidebar={toggleSidebar}
              />
            ))}
          </ul>
        </div>

        {/* Footer section - fixed at bottom */}
        <div className="w-full  px-[14px]  ">
          <button
            onClick={handleLogout}
            className="hover:cursor-pointer text-dark font-medium text-xs h-[38px] py-2.5 hover:text-primary transition ease-in duration-200 px-3 flex items-center gap-3 mb-11"
          >
            <LogOutIcon />
            Logout
          </button>

          <div className="px-3 space-y-1">
            <p className="font-medium text-[8.5px] text-[#808080]">
              POWERED BY
            </p>

            <CardInfraLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
