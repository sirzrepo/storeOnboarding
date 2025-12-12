import { Download, Mail, ArrowRight } from 'lucide-react';

const socialMediaTemplates = [
  { name: 'Instagram Post', type: 'social-media' },
  { name: 'Facebook Ad', type: 'social-media' },
  { name: 'TikTok Video Script', type: 'social-media' },
];

const emailSequences = [
  { name: 'Welcome Series', description: 'Send a warm welcome to new customers' },
  { name: 'Abandoned Cart', description: 'Recover lost sales with reminder emails' },
  { name: 'Post-Purchase Follow-up', description: 'Build loyalty with post-purchase engagement' },
];

export const MarketingKit = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Marketing Kit</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
          Download Marketing Kit
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Social Media Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialMediaTemplates.map((template) => (
            <div
              key={template.name}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
            >
              <div className="bg-gradient-to-br from-purple-200 to-blue-200 aspect-square flex items-center justify-center">
                <div className="w-24 h-24 bg-purple-300 rounded-lg opacity-30"></div>
              </div>
              <div className="p-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4">{template.name}</h4>
                <button className="flex items-center justify-center gap-1.5 w-full text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Email Sequences</h3>
        <div className="space-y-3">
          {emailSequences.map((email) => (
            <div
              key={email.name}
              className="flex items-center justify-between p-5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{email.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{email.description}</p>
                </div>
              </div>
              <button className="flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors whitespace-nowrap ml-4">
                View Template
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
