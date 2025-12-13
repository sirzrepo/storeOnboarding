import Button from "../../../components/common/ui/Button";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Rocket, Shield, Sparkles, Star, TrendingUp } from "lucide-react";

const sampleImg = "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const statsData = [
  {
    icon:<Star className="h-6 w-6 text-white" />,
    value: "10,000+",
    label: "Stores Created",
    bgColor:"bg-gradient-to-br from-orange-400 to-amber-500",
    cardBg:"bg-gradient-to-br from-orange-50 to-amber-50/50"
  },
  {
    icon:<TrendingUp className="h-6 w-6 text-white" />,
    value: "$50M+",
    label: "Revenue Generated",
    bgColor:"bg-gradient-to-br from-green-400 to-emerald-500",
    cardBg:"bg-gradient-to-br from-green-50 to-emerald-50/50"
  },
  {
    icon:<Shield className="h-6 w-6 text-white" />,
    value: "98%",
    label: "Success Rate",
    bgColor:"bg-gradient-to-br from-blue-400 to-cyan-500",
    cardBg:"bg-gradient-to-br from-blue-50 to-cyan-50/50"
  },
];

const storeCardsData = [
  {
    image: sampleImg,
    category: "Beauty",
    categoryColor: "bg-pink-500",
    storeName: "Glow Beauty Co.",
  },
  {
    image: sampleImg,
    category: "Fitness",
    categoryColor: "bg-emerald-500",
    storeName: "FitPro Gear",
  },
  {
    image: sampleImg,
    category: "Tech Gadgets",
    categoryColor: "bg-blue-500",
    storeName: "TechNova",
  },
  {
    image: sampleImg,
    category: "Pets",
    categoryColor: "bg-orange-500",
    storeName: "Pawsome Pets",
  },
  {
    image: sampleImg,
    category: "Home & Kitchen",
    categoryColor: "bg-violet-500",
    storeName: "Cozy Home",
  },
  {
    image: sampleImg,
    category: "Jewelry",
    categoryColor: "bg-yellow-500",
    storeName: "Luxe Jewelry",
  },
  {
    image: sampleImg,
    category: "Beauty",
    categoryColor: "bg-pink-500",
    storeName: "Glow Beauty Co.",
  },
  {
    image: sampleImg,
    category: "Fitness",
    categoryColor: "bg-emerald-500",
    storeName: "FitPro Gear",
  },
  {
    image: sampleImg,
    category: "Tech Gadgets",
    categoryColor: "bg-blue-500",
    storeName: "TechNova",
  },
  {
    image: sampleImg,
    category: "Pets",
    categoryColor: "bg-orange-500",
    storeName: "Pawsome Pets",
  },
  {
    image: sampleImg,
    category: "Home & Kitchen",
    categoryColor: "bg-violet-500",
    storeName: "Cozy Home",
  },
  {
    image: sampleImg,
    category: "Jewelry",
    categoryColor: "bg-yellow-500",
    storeName: "Luxe Jewelry",
  },
];

export const MainContentSection = (): JSX.Element => {
    const navigate = useNavigate();
  return (
    <section className="w-full flex flex-col items-center py-8">
      <div className="w-full max-w-[1152px] flex flex-col items-center gap-8">
        <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-solid border-[#e9d4ff] shadow-[0px_4px_6px_-4px_#ac46ff33,0px_10px_15px_-3px_#ac46ff33] bg-[linear-gradient(90deg,rgba(243,232,255,1)_0%,rgba(252,231,243,1)_50%,rgba(219,234,254,1)_100%)]">
          <img className="w-4 h-4" alt="Icon" src="/icon-2.svg" />
          <p className="[font-family:'Inter',Helvetica] font-normal text-transparent text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
            AI-Powered • 60 Second Setup • No Code
          </p>
          <img className="w-4 h-4" alt="Icon" src="/icon-4.svg" />
        </div>

        <header className="flex flex-col items-center gap-2 w-full">
          <h1 className="[font-family:'Inter',Helvetica] font-normal text-[#0e162b] text-8xl text-center tracking-[0] leading-[120px]">
            Build Your
          </h1>
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-transparent text-8xl text-center tracking-[0] leading-[120px] bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Dream Store
          </h1>
          <h1 className="[font-family:'Inter',Helvetica] font-normal text-[#0e162b] text-8xl text-center tracking-[0] leading-[120px]">
            In 60 Seconds
          </h1>
        </header>

        <p className="max-w-[768px] [font-family:'Inter',Helvetica] font-normal text-[#45556c] text-xl text-center tracking-[-0.45px] leading-[32.5px]">
          No experience needed. No Shopify login required. Just pure AI magic
          that transforms your ideas into a profitable online store instantly.
        </p>

        <div className="flex gap-4 items-center">
          <Button onClick={() => navigate("/onboarding")} className="h-14 flex items-center gap-4 px-10 bg-blue-500 hover:bg-sirz-colour/90 rounded-lg">
            <Rocket className="w-5 h-5" />
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[-0.44px] leading-7 whitespace-nowrap">
              Start Building Now
            </span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          

          <Button
            variant="outline"
            onClick={() => navigate("/onboarding")}
            className="h-[60px] px-[18px] gap-[15.2px] bg-white border-2 border-solid border-[#3752e9] hover:bg-gray-50 rounded-lg"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#314157] text-lg tracking-[-0.44px] leading-7 whitespace-nowrap">
              Watch Demo
            </span>
            <Sparkles className="w-5 h-5 text-pink-500" />
          </Button>
        </div>

        <div className="w-full grid grid-cols-3 gap-6 mt-8">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.cardBg} rounded-2xl border-2 border-solid border-white shadow-card-shadow`}
            >
              <CardContent className="flex flex-col items-center pt-6 pb-6 gap-2">
                {/* <img className="w-20 h-20" alt="Container" src={stat.icon} /> */}
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${stat.bgColor}`}>{stat.icon}</div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#0e162b] text-3xl text-center tracking-[0.40px] leading-9">
                  {stat.value}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="w-full rounded-3xl border-2 border-solid border-[#f2e7fe] shadow-card-shadow bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(250,245,255,0.5)_100%)] overflow-hidden mt-12">
          <CardContent className="flex flex-col items-center gap-10 pt-[50px] pb-10 px-[50px]">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              {/* Gradient Circle Icon */}
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-purple-300/30 to-blue-300/30 blur-2xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/50 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 shadow-xl backdrop-blur-sm md:h-40 md:w-40">
                  <Sparkles className="h-16 w-16 text-white md:h-20 md:w-20" />
                </div>
              </div>

              {/* Dashed Line */}
              <div className="hidden h-0.5 w-24 border-t-2 border-dashed border-purple-300 md:block" />

              {/* Grid Icon */}
              <div className="rounded-2xl border border-purple-200/50 bg-white p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 shadow-sm" />
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 shadow-sm" />
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 shadow-sm" />
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-400 to-green-500 shadow-sm" />
                </div>
              </div>
            </div>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-lg text-center tracking-[-0.44px] leading-7 whitespace-nowrap">
              ✨ AI analyzes your preferences and builds a complete store in
              seconds
            </p>
          </CardContent>
        </Card>



        <div className="flex flex-col gap-8 w-full mt-20">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(218,178,255,1)_50%,rgba(194,122,255,1)_100%)]" />
            <h2 className="[font-family:'Inter',Helvetica] font-normal text-[#0e162b] text-3xl text-center tracking-[0.40px] leading-9 whitespace-nowrap">
              Stores Built By Our Users
            </h2>
            <div className="w-12 h-px bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(218,178,255,1)_50%,rgba(194,122,255,1)_100%)]" />
          </div>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
            Join thousands of entrepreneurs who&#39;ve launched their dream
            stores in under 60 seconds
          </p>

          <div className="w-full overflow-x-auto overflow-y-hidden mt-2 scrollbar-hide">
            <div
              className="flex items-start gap-6"
              style={{ width: "max-content" }}
            >
              {storeCardsData.map((store, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-[14px] overflow-hidden border-2 border-solid border-[#e1e8f0] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a]"
                >
                  <CardContent className="p-0.5">
                    <div className="relative w-full h-48 bg-slate-50">
                      <div
                        className="absolute top-0 left-0 w-full h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${store.image})` }}
                      />
                      <div className="absolute top-0 left-0 w-full h-48 bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_100%)]" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                        <div className="flex justify-center">
                          <Badge
                            className={`${store.categoryColor} rounded-full px-3 py-1`}
                          >
                            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-4">
                              {store.category}
                            </span>
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base text-center tracking-[-0.31px] leading-6 shadow-[0px_4px_8px_#00000026]">
                            {store.storeName}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-4 pb-4 px-4 bg-[linear-gradient(135deg,rgba(250,245,255,1)_0%,rgba(239,246,255,1)_100%)]">
                      <div className="relative w-14 h-6">
                        <div className="absolute top-0 left-0 w-6 h-6 rounded-full border-2 border-solid border-white shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] bg-[linear-gradient(135deg,rgba(194,122,255,1)_0%,rgba(152,16,250,1)_100%)]" />
                        <div className="absolute top-0 left-4 w-6 h-6 rounded-full border-2 border-solid border-white shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] bg-[linear-gradient(135deg,rgba(81,162,255,1)_0%,rgba(21,93,252,1)_100%)]" />
                        <div className="absolute top-0 left-8 w-6 h-6 rounded-full border-2 border-solid border-white shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] bg-[linear-gradient(135deg,rgba(251,100,182,1)_0%,rgba(230,0,118,1)_100%)]" />
                      </div>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-sm text-center tracking-[-0.15px] leading-5 whitespace-nowrap">
                        AI-generated in 60s
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
