import { useState } from "react";
import { Sparkles } from "lucide-react";

const customerSegments = [
  "Teens",
  "Young adults",
  "Parents",
  "Pet owners",
  "Athletes",
  "Travelers",
  "Professionals",
];

export interface Step2Data {
  selectedSegments: string[];
}

interface Step2Props {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
}

export const Step2 = ({ onNext, onBack }: Step2Props) => {
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);

  const toggleSegment = (segment: string) => {
    setSelectedSegments((prev) =>
      prev.includes(segment)
        ? prev.filter((s) => s !== segment)
        : [...prev, segment]
    );
  };

  const handleNext = () => {
    onNext({ selectedSegments });
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="px-8 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-700">Setup Progress</h3>
          <span className="text-sm font-semibold text-blue-600">20%</span>
        </div>
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-1 rounded-full transition-all duration-500"
            style={{ width: "20%" }}
          />
        </div>
      </div>

      <div className="flex-1 px-8 py-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-12">
          Who is your ideal customer?
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-8 max-w-2xl">
          {customerSegments.map((segment) => (
            <button
              key={segment}
              onClick={() => toggleSegment(segment)}
              className={`px-6 py-2 rounded-full font-medium transition-all border-2 ${
                selectedSegments.includes(segment)
                  ? "border-purple-600 bg-purple-50 text-purple-600"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              {segment}
            </button>
          ))}
        </div>

        <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-purple-100 text-purple-600 font-medium hover:bg-purple-200 transition-colors mb-6">
          <Sparkles className="w-4 h-4" />
          Let AI decide
        </button>

        <p className="text-sm text-gray-500">
          Select one or more customer segments
        </p>
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
          disabled={selectedSegments.length === 0}
          className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
