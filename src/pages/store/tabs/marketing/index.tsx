export const MarketingTab = () => {

  return (
    <div className="">
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Marketing Kit</h2>

            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Facebook Ad Copy</h3>
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Elite Emporium</div>
                    <div className="text-xs text-gray-500">Sponsored</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  🎉 Discover the best jewelry products at unbeatable prices! Shop now and transform your teens. Limited time offer - don't miss out! ✨
                </p>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64"></div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">TikTok Hook Ideas</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">POV: You just discovered the best jewelry store online 😍</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">Stop scrolling! You NEED to see these jewelry products 🔥</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">This changed my life... #jewelry #MustHave</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Welcome Message</h3>
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <div className="mb-4">
                  <span className="font-semibold text-gray-900">Subject: </span>
                  <span className="text-gray-700">Welcome to Elite Emporium! Here's 10% off your first order</span>
                </div>
                <p className="text-gray-700 mb-3">Hi there! 👋</p>
                <p className="text-gray-700 mb-3">
                  Welcome to Elite Emporium! We're thrilled to have you join our community of Teens.
                </p>
                <p className="text-gray-700">
                  As a thank you, here's a special 10% discount code: WELCOME10
                </p>
              </div>
            </div>
          </div>
    </div>
  );
}

