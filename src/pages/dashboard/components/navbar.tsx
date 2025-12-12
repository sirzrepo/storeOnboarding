import { ExternalLink } from 'lucide-react';

export const BrandNavbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-end">
        <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-sm">
          <ExternalLink className="w-4 h-4" />
          Launch on Shopify
        </button>
      </div>
    </header>
  );
}
