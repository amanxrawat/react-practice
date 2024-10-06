import React, { useState } from 'react';
import { FaTachometerAlt, FaBoxOpen, FaCartPlus, FaClipboardList } from 'react-icons/fa';
import gsap from 'gsap';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleHover = () => {
    gsap.to(".sidebar", {
      width: isCollapsed ? "16rem" : "4rem",
      duration: 0.9,
      ease: "power3.out",
    });
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className="sidebar bg-purple-700 h-screen w-16 flex flex-col items-center justify-between py-10 relative"
      // onMouseEnter={handleHover}
      // onMouseLeave={handleHover}
      onClick={handleHover}
    >
      <div className="w-full">
        {/* Logo */}
        {/* <div className="text-white mb-10 text-center">
          <FaTachometerAlt size={24} className="mx-auto" />
          {!isCollapsed && <span className="ml-4 font-semibold">Dashboard</span>}
        </div> */}

        {/* Links */}
        <div className="flex flex-col gap-8">
          

          <SidebarItem
            icon={<FaTachometerAlt size={24} />}
            label="Dashboard"
            path="/admin/Dashboard"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<FaBoxOpen size={24} />}
            label="Add Product"
            path="/admin/add-product"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<FaClipboardList size={24} />}
            label="View Products"
            path="/admin/view-products"
            isCollapsed={isCollapsed}
            className="rounded-full border border-black"
          />
          <SidebarItem
            icon={<FaCartPlus size={24}  />}
            label="All Orders"
            path="/admin/all-orders"
            isCollapsed={isCollapsed}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-white text-center mb-4">
        <span className="text-sm">Admin Panel</span>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, path, isCollapsed }) => {
  return (
    <a
      href={path}
      className="flex items-center justify-start w-full text-white hover:bg-purple-600 transition duration-300 px-4 py-2"
    >
      {icon}
      {!isCollapsed && <span className="ml-4">{label}</span>}
    </a>
  );
};

export default Sidebar;
