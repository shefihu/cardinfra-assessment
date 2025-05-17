import { useLocation } from "react-router-dom";
import type { FC } from "react";
import { sidebarRoutes } from "./SidebarItems";
import { BellIcon, SearchIcon, AvatarIcon } from "../assets/svg/svg";

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
  const location = useLocation();

  const currentRoute =
    sidebarRoutes.find(
      (route) =>
        location.pathname === route.path ||
        location.pathname.startsWith(`${route.path}/`)
    ) || sidebarRoutes[0];

  return (
    <div className="sticky top-0 w-full bg-white border-b border-[#EDEFF2] px-6 py-4 lg:py-2 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="flex flex-col items-center lg:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <span
              className={`block h-0.5 w-6 bg-dark mb-1.5 transition-all duration-300 ease-in-out `}
            />
            <span
              className={`block h-0.5 w-6 bg-dark transition-all duration-300 ease-in-out `}
            />
          </button>

          <div className="hidden lg:flex items-center gap-3 text-[#001735]">
            <span className="">{currentRoute.icon}</span>
            <h1 className="text-xs font-medium text-[#001735]">
              {currentRoute.name}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 h-8 rounded-full border border-[#D0D5DD] w-64 text-xs shadow-input placeholder:text-[#344054]"
            />
            <div className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">
              <SearchIcon />
            </div>
          </div>

          {/* Notifications */}
          <button className="relative p-2">
            <BellIcon />

            <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1"></span>
          </button>

          {/* User profile */}
          <div className="w-8 h-8 rounded-full bg-[#F2F4F7] flex items-center justify-center">
            <AvatarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
