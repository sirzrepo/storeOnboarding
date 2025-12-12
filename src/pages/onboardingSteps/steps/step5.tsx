import { useState } from "react";
import { Circle, Type, Minimize2, Grid3x3, Pen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const logoStyles = [
  {
    id: "icon",
    label: "Icon",
    description: "Symbol-based logo",
    icon: Circle,
  },
  {
    id: "wordmark",
    label: "Wordmark",
    description: "Text-based logo",
    icon: Type,
  },
  {
    id: "minimalist",
    label: "Minimalist",
    description: "Clean and simple",
    icon: Minimize2,
  },
  {
    id: "geometric",
    label: "Geometric",
    description: "Shapes and patterns",
    icon: Grid3x3,
  },
  {
    id: "handdrawn",
    label: "Hand-drawn",
    description: "Artistic and unique",
    icon: Pen,
  },
  {
    id: "surprise",
    label: "Surprise me",
    description: "AI will choose",
    icon: Sparkles,
  },
];

export interface Step5Data {
  selectedLogoStyle: string | null;
}

interface Step5Props {
  onNext: (data: Step5Data) => void;
  onBack: () => void;
}

export const Step5 = ({ onNext, onBack }: Step5Props) => {
  const [selectedLogoStyle, setSelectedLogoStyle] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    // onNext({ selectedLogoStyle });
    console.log(onNext);
    navigate("/loading");
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="px-8 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Setup Progress</h3>
          <span className="text-sm font-semibold text-purple-600">65%</span>
        </div>
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div className="bg-purple-600 h-1 rounded-full" style={{ width: "65%" }} />
        </div>
      </div>

      <div className="flex-1 px-8 py-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What style of logo do you prefer?
        </h2>
        <p className="text-gray-500 mb-12">
          We'll create a professional logo based on your selection
        </p>

        <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
          {logoStyles.map((style) => {
            const IconComponent = style.icon;
            return (
              <button
                key={style.id}
                onClick={() => setSelectedLogoStyle(style.id)}
                className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all ${
                  selectedLogoStyle === style.id
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                  <IconComponent
                    className={`w-10 h-10 ${
                      selectedLogoStyle === style.id
                        ? "text-purple-600"
                        : "text-gray-400"
                    }`}
                  />
                </div>
                <span className="text-base font-semibold text-gray-900 mb-1">
                  {style.label}
                </span>
                <span className="text-sm text-gray-500">
                  {style.description}
                </span>
              </button>
            );
          })}
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
          disabled={!selectedLogoStyle}
          className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
