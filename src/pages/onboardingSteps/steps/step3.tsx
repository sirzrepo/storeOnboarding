import { useState } from 'react';
import { TrendingUp, DollarSign, Target, Video, Sparkles, Award } from 'lucide-react';

interface StrategyCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

export interface Step3Data {
  selectedStrategy: string;
}

interface Step3Props {
  onNext: (data: Step3Data) => void;
  onBack: () => void;
}

export const Step3 = ({ onNext, onBack }: Step3Props) => {

  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);

  const strategies: StrategyCard[] = [
    {
      id: 'trending',
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: 'Trending now',
      description: 'Products gaining momentum',
      iconBgColor: 'bg-pink-500'
    },
    {
      id: 'high-margin',
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: 'High margin',
      description: 'Maximum profitability',
      iconBgColor: 'bg-green-500'
    },
    {
      id: 'low-competition',
      icon: <Target className="w-6 h-6 text-white" />,
      title: 'Low competition',
      description: 'Untapped opportunities',
      iconBgColor: 'bg-blue-500'
    },
    {
      id: 'tiktok-viral',
      icon: <Video className="w-6 h-6 text-white" />,
      title: 'TikTok viral',
      description: 'Social media trending',
      iconBgColor: 'bg-pink-500'
    },
    {
      id: 'surprise-me',
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: 'Surprise me',
      description: 'AI curated selection',
      iconBgColor: 'bg-purple-500'
    },
    {
      id: 'winning-products',
      icon: <Award className="w-6 h-6 text-white" />,
      title: 'Find 3 winning products',
      description: 'Proven bestsellers',
      iconBgColor: 'bg-orange-500'
    }
  ];

  const handleNext = () => {
    onNext({ selectedStrategy: selectedStrategy! });
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="px-8 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">Setup Progress</h3>
            <span className="text-sm font-semibold text-purple-600">30%</span>
        </div>
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
            <div className="bg-purple-600 h-1 rounded-full" style={{ width: "30%" }} />
        </div>
        </div>

        <div className="flex-1 px-8 py-12 flex flex-col items-center justify-center">
        <div className='text-center mb-12'>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
            How should we choose products for your store?
            </h1>
            <p className="text-lg text-gray-600">
            Select the strategy that aligns with your business goals
            </p>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-4xl mb-8">
            {strategies.map((strategy) => (
            <button
                key={strategy.id}
                onClick={() => setSelectedStrategy(strategy.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg hover:scale-105 ${
                selectedStrategy === strategy.id
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
            >
                <div
                className={`w-12 h-12 ${strategy.iconBgColor} rounded-lg flex items-center justify-center mb-3`}
                >
                {strategy.icon}
                </div>
                <span className="text-sm font-medium text-gray-900">
                {strategy.title}
                </span>
                <p className="text-sm text-gray-600">
                {strategy.description}
                </p>
            </button>
            ))}
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
            disabled={!selectedStrategy}
            className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Next →
        </button>
        </div>
    </div>
  );
}
