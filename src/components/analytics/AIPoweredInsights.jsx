import { motion } from "framer-motion";
import React from "react";
import { BiShoppingBag, BiTrendingUp } from "react-icons/bi";
import { FaDollarSign, FaRegUser } from "react-icons/fa";

const INSIGHTS = [
  {
    icon: BiTrendingUp,
    color: "text-green-500",
    insight:
      "Revenue surged by 20% this quarter, largely due to a new influencer marketing strategy.",
  },
  {
    icon: FaRegUser,
    color: "text-blue-500",
    insight:
      "Customer acquisition increased by 12% after introducing a referral rewards program.",
  },
  {
    icon: BiShoppingBag,
    color: "text-purple-500",
    insight:
      'The "Home Appliances" category is showing a significant uptick, with a 25% increase in sales.',
  },
  {
    icon: FaDollarSign,
    color: "text-yellow-500",
    insight:
      "Implementing dynamic pricing has the potential to boost profit margins by up to 10%.",
  },
];

const AIPoweredInsights = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        AI-Powered Insights
      </h2>

      <div className="space-y-4">
        {INSIGHTS.map((item, index) => (
          <div key={index} className="flex items-center  space-x-3">
            <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
              <item.icon className={`size-6 ${item.color}`} />
            </div>
            <p className="text-gray-300">{item.insight}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AIPoweredInsights;
