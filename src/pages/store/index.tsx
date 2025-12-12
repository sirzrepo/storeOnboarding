import { useState } from "react";
import { Download, Home, Package, Zap } from "lucide-react";
import { BrandTab } from "./tabs/brand";
import { HomeTab } from "./tabs/home";
import { MarketingTab } from "./tabs/marketing";
import { ProductsTab } from "./tabs/products";
import { useNavigate } from "react-router-dom";

const tabs = [
  { id: "brand", label: "Brand Kit", icon: Zap },
  { id: "homepage", label: "Homepage", icon: Home },
  { id: "products", label: "Products", icon: Package },
  { id: "marketing", label: "Marketing Kit", icon: Download },
];

interface StoreReadyProps {
  onDownload: () => void;
}

export const StoreView = ({ onDownload }: StoreReadyProps) => {
  const [activeTab, setActiveTab] = useState("brand");
  const navigate = useNavigate()

  const handleDownload = () => {
    onDownload();
    navigate("/auth");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-green-600 font-medium">Your store is ready!</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Elite Store Starter Kit
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've created a complete brand identity, product catalog, and marketing materials for your store. Preview everything below and download your full starter kit.
          </p>
        </div>

        <div className=" overflow-hidden mb-8">
          <div className="flex items-center rounded-full justify-between gap-1 px-2 py-2 bg-gray-50 border border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 w-full justify-center rounded-full font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-8 border border-gray-200 mt-8 rounded-xl">
            {activeTab === "brand" && (
                <BrandTab />
            )}

            {activeTab === "homepage" && (
                <HomeTab />
            )}

            {activeTab === "products" && (
                <ProductsTab />
            )}

            {activeTab === "marketing" && (
                <MarketingTab />
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Ready to launch your store?
              </h3>
              <p className="text-gray-600">
                Create your account to download the full starter kit
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Download className="w-5 h-5" />
              Get My Full Store Starter Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
