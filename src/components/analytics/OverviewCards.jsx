import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsArrowDownRight, BsArrowUpRight, BsEye } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { motion } from "framer-motion";

const OVERVIEW_DATA = [
  { name: "Revenue", value: "$2,567,890", change: 10.2, icon: FaDollarSign },
  { name: "Users", value: "50,123", change: 9.1, icon: HiUsers },
  { name: "Orders", value: "-9,876", change: -3.2, icon: BiShoppingBag },
  { name: "Page Views", value: "1,567,890", change: 20.3, icon: BsEye },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1  gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {OVERVIEW_DATA.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
rounded-xl p-6 border border-gray-700
"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-400">{item.name}</h3>
              <p className="mt-1 text-xl font-semibold text-gray-100">
                {item.value}
              </p>
            </div>
            <div
              className={`
              p-3 rounded-full bg-opacity-20 ${
                item.change >= 0 ? "bg-green-500" : "bg-red-500"
              }
              `}
            >
              <item.icon
                className={`size-6  ${
                  item.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              />
            </div>
          </div>
          <div
            className={`mt-4  flex  items-center  ${
              item.change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {item.change >= 0 ? (
              <BsArrowUpRight size="20" />
            ) : (
              <BsArrowDownRight size="20" />
            )}
            <span className="ml-1 text-sm font-medium">
              {Math.abs(item.change)}%
            </span>
            <span className="ml-2 text-sm text-gray-400">vs last period</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OverviewCards;
