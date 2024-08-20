import React from "react";
import Header from "../components/common/Header";
import { FaRegUser, FaUserCheck, FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { FaUserXmark } from "react-icons/fa6";
import UsersTable from "../components/users/UsersTable";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};
const UsersPage = () => {
  return (
    <div className="flex-1  overflow-auto relative  z-10">
      <Header title="Users" />

      {/* STATS */}
      <main className="max-w-7xl mx-16  py-6  px-4  lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-4  mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duation: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={FaRegUser}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={FaUserPlus}
            value={userStats.newUsersToday.toLocaleString()}
            color="#8B5CF6"
          />
          <StatCard
            name="Active Users"
            icon={FaUserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#EC4899"
          />
          <StatCard
            name="Churn Rate"
            icon={FaUserXmark}
            value={userStats.churnRate.toLocaleString()}
            color="#10B981"
          />
        </motion.div>

        <UsersTable />
      </main>
    </div>
  );
};

export default UsersPage;
