import { Star } from "lucide-react";

export const HomeTab = () => {
    return (
        <div>
            <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gray-200 flex items-center gap-2 px-4 py-3">
                    <span className="flex gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </span>
                    <span className="text-xs text-gray-600 ml-4">eliteemporium.myshopify.com</span>
                    </div>

                    <div className="bg-white">
                    <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-blue-100 py-20 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Welcome to Elite Emporium
                        </h1>
                        <p className="text-gray-700 mb-8">
                        Discover amazing products curated just for you
                        </p>
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                        Shop Now
                        </button>
                    </div>

                    <div className="px-8 py-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Collection</h2>
                        <div className="grid grid-cols-3 gap-8 mb-12">
                        {[
                            "https://images.pexels.com/photos/344086/praying-hands-blessing-religion-priest-344086.jpeg",
                            "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
                            "https://images.pexels.com/photos/342669/pexels-photo-342669.jpeg",
                        ].map((src, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square bg-gray-100 overflow-hidden">
                                <img
                                src={src}
                                alt="Featured product"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 h-20 bg-gradient-to-b from-gray-50 to-gray-100"></div>
                            </div>
                        ))}
                        </div>

                        <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
                        {[
                            { icon: Star, label: "Free Shipping" },
                            { icon: Star, label: "Easy Returns" },
                            { icon: Star, label: "24/7 Support" },
                        ].map((feature, idx) => {
                            const IconComponent = feature.icon;
                            return (
                            <div key={idx} className="text-center">
                                <IconComponent className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                                <p className="text-gray-700 font-medium">{feature.label}</p>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};