import { Download } from 'lucide-react';

const logoFormats = [
  { format: 'PNG (Transparent)', file: 'logo.png' },
  { format: 'SVG (Vector)', file: 'logo.svg' },
  { format: 'JPG (Print)', file: 'logo.jpg' },
];

const colorPalette = [
  { name: 'Purple', hex: '#8b5cf6', bg: 'bg-purple-600' },
  { name: 'Blue', hex: '#3b82f6', bg: 'bg-blue-600' },
  { name: 'Green', hex: '#10b981', bg: 'bg-green-500' },
  { name: 'Orange', hex: '#f59e0b', bg: 'bg-orange-500' },
  { name: 'Red', hex: '#ef4444', bg: 'bg-red-500' },
];

export const BrandKit = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Brand Kit</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
          Download All Assets
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Logo Files</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {logoFormats.map((logo) => (
            <div
              key={logo.format}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <div className="bg-gray-50 rounded-lg aspect-square flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{logo.format}</span>
                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {colorPalette.map((color) => (
            <div key={color.name} className="space-y-3">
              <div className={`${color.bg} rounded-xl h-32 shadow-sm`}></div>
              <p className="text-sm font-medium text-gray-600 text-center">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Brand Voice Guidelines</h3>
        <div className="space-y-4">
          <div>
            <span className="text-sm font-semibold text-gray-900">Tone: </span>
            <span className="text-sm text-gray-700">Bold, approachable, and trustworthy</span>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-900">Target Audience: </span>
            <span className="text-sm text-gray-700">Pet owners</span>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-900">Key Message: </span>
            <span className="text-sm text-gray-700">Quality beauty products that enhance your lifestyle</span>
          </div>
        </div>
      </div>
    </div>
  );
}
