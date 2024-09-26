import React, { useState } from "react";
import { Menu, Search, Video, Bell, User } from "lucide-react";
import Sidebar from "./SidebarLeft";
import AvatarComponent from "./Avatar";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="fixed top-0 left-0 right-0 z-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <header className="bg-background text-text p-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="p-2 pl-5 hover:bg-hover rounded-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Menu size={24} />
          </button>
          <img
            src="https://i.postimg.cc/dtQGwJmR/logo.png"
            alt="Logo"
            className="h-10 w-10 ml-4 hidden sm:block"
          />
        </div>

        <div
          className={`flex-grow mx-4 ${
            isSearchVisible ? "flex" : "hidden sm:flex"
          }`}
        >
          <div className="flex w-full max-w-[640px] mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-background border border-border rounded-l-full focus:outline-none focus:border-youtube-blue"
            />
            <button className="px-6 py-2 bg-button-bg hover:bg-button-hover border border-l-0 border-border rounded-r-full">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <button
            className="p-2 hover:bg-hover rounded-full sm:hidden"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <Search size={24} />
          </button>
          <button className="p-2 hover:bg-hover rounded-full hidden sm:block">
            <Video size={24} />
          </button>
          <button className="p-2 hover:bg-hover rounded-full hidden sm:block">
            <Bell size={24} />
          </button>
          <button className="p-2 hover:bg-hover rounded-full">
            <AvatarComponent src="https://avatars.githubusercontent.com/u/109579816?v=4" />
          </button>
        </div>
      </header>
    </main>
  );
};

export default Header;
