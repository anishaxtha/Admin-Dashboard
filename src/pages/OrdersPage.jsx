import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";

const ORDER_STATS = {
  totalOrders: "2,345",
  pendingOrders: "34",
  completedOrders: "2,311",
  totalRevenue: "$123,456",
};

const OrdersPage = () => {
  return (
    <div className="flex-1  overflow-auto relative  z-10">
      <Header title="Orders" />

      <main className="max-w-7xl mx-16 py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-4  mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duation: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={FiShoppingBag}
            value={ORDER_STATS.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name="Pending Orders"
            icon={FaRegClock}
            value={ORDER_STATS.totalOrders}
            color="#F59E0B"
          />
          <StatCard
            name="Completed  Orders"
            icon={FiCheckCircle}
            value={ORDER_STATS.totalOrders}
            color="#10B981"
          />
          <StatCard
            name="Total Revenue"
            icon={LuDollarSign}
            value={ORDER_STATS.totalOrders}
            color="#EF4444"
          />
        </motion.div>

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <OrderDistribution />
          <DailyOrders />
        </div>
      </main>
    </div>
  );
};

export default OrdersPage;
