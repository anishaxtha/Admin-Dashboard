import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";

const OrdersPage = () => {
  return (
    <div className="flex-1  overflow-auto relative  z-10">
      <Header title="Orders" />
      <motion.div
        className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-4  mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duation: 1 }}
      ></motion.div>
    </div>
  );
};

export default OrdersPage;
