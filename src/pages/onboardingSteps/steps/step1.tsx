import { useState } from "react";
import { Sparkles } from "lucide-react";

const categories = [
  { id: "beauty", label: "Beauty", icon: "✨" },
  { id: "fitness", label: "Fitness", icon: "💪" },
  { id: "tech", label: "Tech Gadgets", icon: "📱" },
  { id: "pets", label: "Pets", icon: "🐾" },
  { id: "home", label: "Home & Kitchen", icon: "🏠" },
  { id: "jewelry", label: "Jewelry", icon: "💎" },
  { id: "fashion", label: "Fashion", icon: "👕" },
  { id: "kids", label: "Kids & Baby", icon: "👶" },
];

const iconColors: Record<string, string> = {
  beauty: "bg-pink-100",
  fitness: "bg-green-100",
  tech: "bg-blue-100",
  pets: "bg-orange-100",
  home: "bg-purple-100",
  jewelry: "bg-yellow-100",
  fashion: "bg-purple-100",
  kids: "bg-pink-100",
};

const iconStyles: Record<string, string> = {
  beauty: "text-pink-500",
  fitness: "text-green-500",
  tech: "text-blue-500",
  pets: "text-orange-500",
  home: "text-purple-500",
  jewelry: "text-yellow-500",
  fashion: "text-blue-400",
  kids: "text-pink-400",
};

export interface Step1Data {
  selectedCategory: string | null;
}

interface Step1Props {
  onNext: (data: Step1Data) => void;
  onBack: () => void;
}

export const Step1 = ({ onNext, onBack }: Step1Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleNext = () => {
    onNext({ selectedCategory });
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="px-8 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Setup Progress</h3>
          <span className="text-sm font-semibold text-purple-600">10%</span>
        </div>
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div className="bg-purple-600 h-1 rounded-full" style={{ width: "10%" }} />
        </div>
      </div>

      <div className="flex-1 px-8 py-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-12">
          What type of store do you want to build?
        </h2>

        <div className="grid grid-cols-4 gap-6 w-full max-w-4xl mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
                selectedCategory === category.id
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                  iconColors[category.id]
                } ${iconStyles[category.id]} text-2xl`}
              >
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-900">
                {category.label}
              </span>
            </button>
          ))}
        </div>

        <button className="flex items-center justify-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition-colors">
          <Sparkles className="w-4 h-4" />
          Not sure — pick the best niche for me
        </button>
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
          disabled={!selectedCategory}
          className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
