interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  profitMargin: number;
  imageColor: string;
  icon: string;
}

export const ProductsTab = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'High-quality sound with active noise cancellation',
      price: 129.99,
      profitMargin: 45,
      imageColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
      icon: '🎧'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      description: 'Track your health and fitness goals',
      price: 89.99,
      profitMargin: 52,
      imageColor: 'bg-gradient-to-br from-slate-100 to-slate-200',
      icon: '⌚'
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      description: 'Crystal clear sound on the go',
      price: 49.99,
      profitMargin: 38,
      imageColor: 'bg-gradient-to-br from-yellow-200 to-yellow-300',
      icon: '🔊'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Product Catalog</h2>

        <div className="space-y-6">
        {products.map((product) => (
            <div
            key={product.id}
            className="flex items-center gap-6 p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
            <div className={`w-24 h-24 ${product.imageColor} rounded-xl flex items-center justify-center text-4xl shadow-sm flex-shrink-0`}>
                {product.icon}
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                {product.description}
                </p>
                <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-fuchsia-600">
                    ${product.price.toFixed(2)}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                    {product.profitMargin}% profit margin
                </span>
                </div>
            </div>
            </div>
        ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-900">
            <span className="font-semibold">Note:</span> These are AI-curated products based on your niche and strategy. You can add, remove, or modify products in your dashboard.
        </p>
        </div>
    </div>
  );
}
