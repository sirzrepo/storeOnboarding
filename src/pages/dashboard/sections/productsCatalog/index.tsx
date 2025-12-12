import { Download, ExternalLink, Lightbulb } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  profitMargin: number;
  supplier: string;
}

export const ProductsCatalog = () => {

  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 129.99,
      profitMargin: 45,
      supplier: 'AliExpress'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 89.99,
      profitMargin: 52,
      supplier: 'Alibaba'
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 49.99,
      profitMargin: 38,
      supplier: 'AliExpress'
    }
  ];

  return (
    <div className=" bg-slate-50">
      <div className="flex flex-col">

        <div className="flex flex-1 overflow-hidden">

          <main className="flex-1 overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Product Catalog</h1>
                <button className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold transition-colors duration-200">
                  <Download className="w-5 h-5" />
                  Export Product Data
                </button>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Profit Margin</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Supplier</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50 transition-colors duration-200">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-lg flex-shrink-0"></div>
                            <span className="font-medium text-slate-900">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-900 font-semibold">${product.price.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                            {product.profitMargin}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-700">{product.supplier}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                            <ExternalLink className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">Tip:</span> These products are carefully selected based on your niche and strategy. You can import them directly to Shopify with one click.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}