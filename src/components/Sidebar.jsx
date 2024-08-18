import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoAnalytics, IoCartOutline, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { PiCurrencyDollarBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: GoHome,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: MdOutlineCategory,
    color: "#8B5CF6",
    path: "/products",
  },
  {
    name: "Users",
    icon: FaRegUser,
    color: "#EC4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: PiCurrencyDollarBold,
    color: "#10B981",
    path: "/sales",
  },
  {
    name: "Order",
    icon: IoCartOutline,
    color: "#F59E0B",
    path: "/orders",
  },
  {
    name: "Analytics",
    // icon: IoMdAnalytics,
    icon: IoAnalytics,
    color: "#3B82F6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: IoSettingsSharp,
    color: "#6EE7B7",
    path: "/settings",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-100 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="flex flex-col border-r border-gray-700 h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          onClick={() => {
            setisSidebarOpen(!isSidebarOpen);
          }}
        >
          <IoMdMenu size={26} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-5 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
