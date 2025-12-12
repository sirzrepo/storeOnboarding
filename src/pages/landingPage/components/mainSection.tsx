import Button from "../../../components/common/ui/Button";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { useNavigate } from "react-router-dom";

const statsData = [
  {
    icon: "/container-2.svg",
    value: "10,000+",
    label: "Stores Created",
    gradient:
      "bg-[linear-gradient(135deg,rgba(254,252,232,1)_0%,rgba(255,247,237,1)_100%)]",
  },
  {
    icon: "/container-1.svg",
    value: "$50M+",
    label: "Revenue Generated",
    gradient:
      "bg-[linear-gradient(135deg,rgba(240,253,244,1)_0%,rgba(236,253,245,1)_100%)]",
  },
  {
    icon: "/container-3.svg",
    value: "98%",
    label: "Success Rate",
    gradient:
      "bg-[linear-gradient(135deg,rgba(239,246,255,1)_0%,rgba(236,254,255,1)_100%)]",
  },
];

const storeCardsData = [
  {
    image: "/imagewithfallback-6.png",
    category: "Beauty",
    categoryColor: "bg-pink-500",
    storeName: "Glow Beauty Co.",
  },
  {
    image: "/imagewithfallback-7.png",
    category: "Fitness",
    categoryColor: "bg-emerald-500",
    storeName: "FitPro Gear",
  },
  {
    image: "/imagewithfallback-8.png",
    category: "Tech Gadgets",
    categoryColor: "bg-blue-500",
    storeName: "TechNova",
  },
  {
    image: "/imagewithfallback-9.png",
    category: "Pets",
    categoryColor: "bg-orange-500",
    storeName: "Pawsome Pets",
  },
  {
    image: "/imagewithfallback-10.png",
    category: "Home & Kitchen",
    categoryColor: "bg-violet-500",
    storeName: "Cozy Home",
  },
  {
    image: "/imagewithfallback-11.png",
    category: "Jewelry",
    categoryColor: "bg-yellow-500",
    storeName: "Luxe Jewelry",
  },
  {
    image: "/imagewithfallback-6.png",
    category: "Beauty",
    categoryColor: "bg-pink-500",
    storeName: "Glow Beauty Co.",
  },
  {
    image: "/imagewithfallback-7.png",
    category: "Fitness",
    categoryColor: "bg-emerald-500",
    storeName: "FitPro Gear",
  },
  {
    image: "/imagewithfallback-8.png",
    category: "Tech Gadgets",
    categoryColor: "bg-blue-500",
    storeName: "TechNova",
  },
  {
    image: "/imagewithfallback-9.png",
    category: "Pets",
    categoryColor: "bg-orange-500",
    storeName: "Pawsome Pets",
  },
  {
    image: "/imagewithfallback-10.png",
    category: "Home & Kitchen",
    categoryColor: "bg-violet-500",
    storeName: "Cozy Home",
  },
  {
    image: "/imagewithfallback-11.png",
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
          <Button onClick={() => navigate("/onboarding")} className="h-14 px-10 bg-blue-500 hover:bg-sirz-colour/90 rounded-lg">
            <img className="w-6 h-6" alt="Icon" src="/icon.svg" />
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[-0.44px] leading-7 whitespace-nowrap">
              Start Building Now
            </span>
            <img className="w-6 h-6" alt="Icon" src="/icon-1.svg" />
          </Button>

          <Button
            variant="outline"
            className="h-[60px] px-[18px] gap-[15.2px] bg-white border-2 border-solid border-[#3752e9] hover:bg-gray-50 rounded-lg"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#314157] text-lg tracking-[-0.44px] leading-7 whitespace-nowrap">
              Watch Demo
            </span>
            <img className="w-5 h-5" alt="Icon" src="/icon-3.svg" />
          </Button>
        </div>

        <div className="w-full grid grid-cols-3 gap-6 mt-8">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.gradient} rounded-2xl border-2 border-solid border-white shadow-card-shadow`}
            >
              <CardContent className="flex flex-col items-center pt-6 pb-6 gap-2">
                <img className="w-20 h-20" alt="Container" src={stat.icon} />
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
          <CardContent className="flex flex-col items-center gap-10 pt-[50px] pb-0.5 px-[50px]">
            <img
              className="w-full h-auto"
              alt="Container"
              src="/container.svg"
            />
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

          <div className="w-full overflow-hidden mt-2">
            <div
              className="flex items-start gap-6 animate-marquee"
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
