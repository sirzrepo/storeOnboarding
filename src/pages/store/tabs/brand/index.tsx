export const BrandTab = () => {
    const colors = [
    { hex: "#8b5cf6", name: "Purple" },
    { hex: "#3b82f6", name: "Blue" },
    { hex: "#10b981", name: "Green" },
    { hex: "#f59e0b", name: "Amber" },
    { hex: "#ef4444", name: "Red" },
    ];

    const brandTraits = [
    "Bold",
    "Aesthetic",
    "Customer-focused approach",
    "Premium quality products",
    ];
    
        return (
        <div>
            <div className="grid grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Logo</h3>
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-12 flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center text-white text-4xl font-bold mb-4">
                      E
                    </div>
                    <p className="text-gray-900 font-semibold">Elite Store</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Color Palette</h3>
                  <div className="flex gap-4">
                    {colors.map((color) => (
                      <div key={color.hex} className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 rounded-2xl shadow-sm border border-gray-200 mb-3"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        <code className="text-xs text-gray-600">{color.hex}</code>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Typography</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Heading</p>
                      <h2 className="text-2xl font-bold text-gray-900">
                        The quick brown fox
                      </h2>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Body</p>
                      <p className="text-base text-gray-700">
                        The quick brown fox jumps over the lazy dog
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Brand Personality</h3>
                  <ul className="space-y-3">
                    {brandTraits.map((trait) => (
                      <li key={trait} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
        </div>
    );
};