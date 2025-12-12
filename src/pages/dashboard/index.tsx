import { useState } from 'react';
import Sidebar from './components/sidebar';
import { BrandNavbar } from './components/navbar';
import { BrandKit } from './sections/brandkit';
import { ProductsCatalog } from './sections/productsCatalog';
import { MarketingKit } from './sections/marketingKit';
import { LaunchPlan } from './sections/launchPlan';
import { StoreCopy } from './sections/storeCopy';

export const BrandDashboard = () => {
  const [activeItem, setActiveItem] = useState('brand-kit');

  const renderContent = () => {
    switch (activeItem) {
      case 'brand-kit':
        return <BrandKit />;
      case 'product-catalog':
        return <ProductsCatalog />;
      case 'store-copy':
        return <StoreCopy />;
      case 'marketing-kit':
        return <MarketingKit />;
      case 'launch-plan':
        return <LaunchPlan />;
      default:
        return <BrandKit />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BrandNavbar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
