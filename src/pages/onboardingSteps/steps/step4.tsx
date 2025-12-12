import { useState } from 'react';
import { Wand2 } from 'lucide-react';

interface BrandVibe {
  id: string;
  name: string;
  bgColor: string;
}

export interface Step4Data {
  selectedVibe: string | null;
}

interface Step4Props {
  onNext: (data: Step4Data) => void;
  onBack: () => void;
}

export const Step4 = ({ onNext, onBack }: Step4Props) => {
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [storeName, setStoreName] = useState('');

  const brandVibes: BrandVibe[] = [
    { id: 'minimalist', name: 'Minimalist', bgColor: 'bg-gray-100' },
    { id: 'modern', name: 'Modern', bgColor: 'bg-blue-200' },
    { id: 'playful', name: 'Playful', bgColor: 'bg-yellow-200' },
    { id: 'luxury', name: 'Luxury', bgColor: 'bg-gray-400' },
    { id: 'bold', name: 'Bold', bgColor: 'bg-orange-200' },
    { id: 'natural', name: 'Natural', bgColor: 'bg-green-200' },
    { id: 'high-tech', name: 'High-tech', bgColor: 'bg-blue-300' }
  ];

  const handleNext = () => {
    onNext({ selectedVibe });
  };

    const generateStoreName = () => {
    const adjectives = ['Smart', 'Trendy', 'Prime', 'Swift', 'Elite', 'Crisp', 'Pure', 'Fusion', 'Spark', 'Nova'];
    const nouns = ['Shop', 'Store', 'Hub', 'Market', 'Spot', 'Gear', 'Goods', 'Essentials', 'Lounge', 'Vault'];

    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    setStoreName(`${adj}${noun}`);
  };

  return (
        <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="px-8 py-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">Setup Progress</h3>
              <span className="text-sm font-semibold text-purple-600">40%</span>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div className="bg-purple-600 h-1 rounded-full" style={{ width: "40%" }} />
            </div>
          </div>
    
          <div className="flex-1 px-8 py-12 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-12">
              Choose your brand's vibe
            </h2>
    
            <div className="grid grid-cols-7 gap-2 w-full max-w-4xl mb-8">
              {brandVibes.map((vibe) => (
                <button
                  key={vibe.id}
                  onClick={() => setSelectedVibe(vibe.id)}
                  className={`flex flex-col items-center justify-center p-6 transition-all ${
                    selectedVibe === vibe.id
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-28 h-28 rounded-lg flex items-center justify-center mb-3 ${
                        selectedVibe === vibe.id
                        ? 'border-blue-500 shadow-lg scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                     } ${vibe.bgColor}`}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {vibe.name}
                  </span>
                </button>
              ))}
            </div>
    
            
                <div className="w-[60%] mx-auto">
                  <p className="text-gray-700 font-medium mb-3">Have a store name?</p>
                  <input
                    type="text"
                    placeholder="Enter your store name"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all mb-3"
                  />
                  <button
                    onClick={generateStoreName}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  >
                    <Wand2 className="w-5 h-5" />
                    Generate name for me
                  </button>
                </div>
          </div>


    
          <div className="px-8 py-6 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedVibe}
              className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
  );
}
