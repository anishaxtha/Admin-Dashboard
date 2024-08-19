import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import Header from "../components/common/Header";
import { GoPackage } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import ProductTable from "../components/products/ProductTable";
import SalesTrendChart from "../components/products/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const ProductsPage = () => {
  return (
    <div className="flex-1  overflow-auto relative  z-10">
      <Header title="Products" />

      {/* STATS */}
      <main className="max-w-7xl mx-16  py-6  px-4  lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-4  mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duation: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={GoPackage}
            value="1234"
            color="#6366F1"
          />
          <StatCard
            name="Top Selling "
            icon={IoIosTrendingUp}
            value="82"
            color="#8B5CF6"
          />
          <StatCard
            name="Low Stock"
            icon={FiAlertTriangle}
            value="56"
            color="#EC4899"
          />
          <StatCard
            name="Total Revenue"
            icon={LuDollarSign}
            value="$542,456"
            color="#10B981"
          />
        </motion.div>

        <ProductTable />

        {/* CHARTS */}

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
