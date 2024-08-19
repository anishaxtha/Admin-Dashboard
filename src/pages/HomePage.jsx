import { GoZap } from "react-icons/go";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { HiOutlineUsers } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const HomePage = () => {
  return (
    <div className="flex-1  overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-14  py-6  px-4  lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-4  mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duation: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={GoZap}
            value="$12,852"
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            icon={HiOutlineUsers}
            value="1257"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={FiShoppingBag}
            value="456"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BiSolidBarChartAlt2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
