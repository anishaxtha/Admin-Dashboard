import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import { FaCreditCard, FaDollarSign } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";

const SALES_STATS = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />
      {/* STATS  */}
      <main className="max-w-7xl mx-16  py-6  px-4  lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-4  mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duation: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={FaDollarSign}
            value={SALES_STATS.totalRevenue}
            color="#6366F1"
          />
          <StatCard
            name="Avg. Order Value"
            icon={LuShoppingCart}
            value={SALES_STATS.averageOrderValue}
            color="#10B981"
          />
          <StatCard
            name="Conversion Rate"
            icon={IoIosTrendingUp}
            value={SALES_STATS.conversionRate}
            color="#F59E0B"
          />
          <StatCard
            name="Sales Growth"
            icon={FaCreditCard}
            value={SALES_STATS.salesGrowth}
            color="#EF4444"
          />
        </motion.div>
        {/* CHARTS */}
        <SalesOverviewChart />

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8"></div>
      </main>
    </div>
  );
};

export default SalesPage;
