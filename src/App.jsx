import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80
        "
        ></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
