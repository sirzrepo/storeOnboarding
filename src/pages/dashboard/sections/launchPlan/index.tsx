import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface Week {
  week: number;
  title: string;
  tasks: Task[];
}

const initialWeeks: Week[] = [
  {
    week: 1,
    title: 'Store Setup',
    tasks: [
      { id: 'w1-1', name: 'Import products to Shopify', completed: false },
      { id: 'w1-2', name: 'Configure payment gateways', completed: false },
      { id: 'w1-3', name: 'Set up shipping zones', completed: false },
      { id: 'w1-4', name: 'Install essential apps', completed: false },
    ],
  },
  {
    week: 2,
    title: 'Design & Branding',
    tasks: [
      { id: 'w2-1', name: 'Upload logo and brand assets', completed: false },
      { id: 'w2-2', name: 'Customize theme with brand colors', completed: false },
      { id: 'w2-3', name: 'Add product descriptions', completed: false },
      { id: 'w2-4', name: 'Create essential pages', completed: false },
    ],
  },
  {
    week: 3,
    title: 'Marketing Launch',
    tasks: [
      { id: 'w3-1', name: 'Set up Facebook Pixel', completed: false },
      { id: 'w3-2', name: 'Create first ad campaign', completed: false },
      { id: 'w3-3', name: 'Launch email marketing', completed: false },
      { id: 'w3-4', name: 'Set up social media accounts', completed: false },
    ],
  },
  {
    week: 4,
    title: 'Optimize & Scale',
    tasks: [
      { id: 'w4-1', name: 'Analyze initial sales data', completed: false },
      { id: 'w4-2', name: 'A/B test product pages', completed: false },
      { id: 'w4-3', name: 'Optimize ad campaigns', completed: false },
      { id: 'w4-4', name: 'Plan next product additions', completed: false },
    ],
  },
];

const weekColors = [
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700',
  'bg-blue-100 text-blue-700',
  'bg-indigo-100 text-indigo-700',
];

export const LaunchPlan = () => {
  const [weeks, setWeeks] = useState<Week[]>(initialWeeks);

  const handleTaskToggle = (weekIndex: number, taskId: string) => {
    const updatedWeeks = [...weeks];
    const task = updatedWeeks[weekIndex].tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
    setWeeks(updatedWeeks);
  };

  const calculateProgress = (weekTasks: Task[]) => {
    const completed = weekTasks.filter((t) => t.completed).length;
    return Math.round((completed / weekTasks.length) * 100);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">30-Day Launch Plan</h2>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Ready to Launch?</h3>
        <p className="text-purple-100 mb-6">
          Your store is fully configured and ready to go live. Click below to create your Shopify store.
        </p>
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
          <ExternalLink className="w-4 h-4" />
          Launch on Shopify
        </button>
      </div>

      <div className="space-y-6">
        {weeks.map((week, weekIndex) => {
          const progress = calculateProgress(week.tasks);
          const colorClass = weekColors[weekIndex];

          return (
            <div
              key={week.week}
              className="bg-white rounded-xl border border-gray-200 p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0`}
                  >
                    {week.week}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Week {week.week}</p>
                    <h3 className="text-lg font-semibold text-gray-900">{week.title}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{progress}%</p>
                  <p className="text-xs text-gray-500">Complete</p>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="space-y-3">
                {week.tasks.map((task) => (
                  <label
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleTaskToggle(weekIndex, task.id)}
                      className="w-5 h-5 text-purple-600 rounded border-gray-300 cursor-pointer"
                    />
                    <span
                      className={`text-sm ${
                        task.completed
                          ? 'text-gray-400 line-through'
                          : 'text-gray-700'
                      }`}
                    >
                      {task.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
