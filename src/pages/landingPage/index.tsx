import Button from "../../components/common/ui/Button";
import { MainContentSection } from "./components/mainSection";
import { FooterSection } from "./components/footer";
import logo from "../../assets/img/sirz logo png 1.svg"

const decorativeElements = [
  {
    top: "top-[-199px]",
    left: "left-[-182px]",
    width: "w-[451px]",
    height: "h-[451px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(218,178,255,1)_0%,rgba(253,165,213,1)_100%)]",
    opacity: "opacity-40",
  },
  {
    top: "top-[516px]",
    left: "left-[986px]",
    width: "w-[697px]",
    height: "h-[629px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(142,197,255,0.5)_0%,rgba(83,234,253,0.5)_100%)]",
    opacity: "opacity-40",
  },
  {
    top: "top-[1694px]",
    left: "left-[414px]",
    width: "w-[393px]",
    height: "h-[393px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(253,165,213,1)_0%,rgba(218,178,255,1)_100%)]",
    opacity: "opacity-40",
  },
];

const smallDots = [
  {
    top: "top-[91px]",
    left: "left-[1142px]",
    width: "w-[5px]",
    height: "h-1.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(168,85,247,1)_100%)]",
    opacity: "opacity-[0.63]",
  },
  {
    top: "top-[1993px]",
    left: "left-[246px]",
    width: "w-1",
    height: "h-1",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-[0.38]",
  },
  {
    top: "top-[1338px]",
    left: "left-[1173px]",
    width: "w-[3px]",
    height: "h-2",
    gradient:
      "bg-[linear-gradient(135deg,rgba(236,72,153,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-45",
  },
  {
    top: "top-[1545px]",
    left: "left-[471px]",
    width: "w-1.5",
    height: "h-1.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-30",
  },
  {
    top: "top-[1864px]",
    left: "left-[984px]",
    width: "w-[9px]",
    height: "h-[3px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.52]",
  },
  {
    top: "top-[1929px]",
    left: "left-[377px]",
    width: "w-2",
    height: "h-2",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(168,85,247,1)_100%)]",
    opacity: "opacity-[0.54]",
  },
  {
    top: "top-[1608px]",
    left: "left-[639px]",
    width: "w-1.5",
    height: "h-1.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-[0.53]",
  },
  {
    top: "top-[1314px]",
    left: "left-[419px]",
    width: "w-[7px]",
    height: "h-[7px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.76]",
  },
  {
    top: "top-[153px]",
    left: "left-[163px]",
    width: "w-1.5",
    height: "h-[5px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-[0.42]",
  },
  {
    top: "top-[1491px]",
    left: "left-[1191px]",
    width: "w-1.5",
    height: "h-[7px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.43]",
  },
  {
    top: "top-[84px]",
    left: "left-[396px]",
    width: "w-1.5",
    height: "h-[5px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(168,85,247,1)_100%)]",
    opacity: "opacity-[0.43]",
  },
  {
    top: "top-[1511px]",
    left: "left-[610px]",
    width: "w-1",
    height: "h-0.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-[0.44]",
  },
  {
    top: "top-[882px]",
    left: "left-[1022px]",
    width: "w-[7px]",
    height: "h-0.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-[0.33]",
  },
  {
    top: "top-[1878px]",
    left: "left-[260px]",
    width: "w-[5px]",
    height: "h-1",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(168,85,247,1)_100%)]",
    opacity: "opacity-[0.36]",
  },
  {
    top: "top-[1139px]",
    left: "left-[440px]",
    width: "w-1",
    height: "h-1.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(59,130,246,1)_100%)]",
    opacity: "opacity-50",
  },
  {
    top: "top-[1484px]",
    left: "left-[979px]",
    width: "w-[3px]",
    height: "h-[9px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(168,85,247,1)_100%)]",
    opacity: "opacity-50",
  },
  {
    top: "top-[1286px]",
    left: "left-[88px]",
    width: "w-[9px]",
    height: "h-1",
    gradient:
      "bg-[linear-gradient(135deg,rgba(236,72,153,1)_0%,rgba(168,85,247,1)_100%)]",
    opacity: "opacity-[0.54]",
  },
  {
    top: "top-[2072px]",
    left: "left-[401px]",
    width: "w-[5px]",
    height: "h-[3px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(236,72,153,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.32]",
  },
  {
    top: "top-[1164px]",
    left: "left-[1227px]",
    width: "w-[7px]",
    height: "h-2",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(59,130,246,1)_100%)]",
    opacity: "opacity-[0.56]",
  },
  {
    top: "top-[596px]",
    left: "left-[1083px]",
    width: "w-2",
    height: "h-1",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.33]",
  },
  {
    top: "top-[509px]",
    left: "left-[85px]",
    width: "w-[7px]",
    height: "h-2",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(59,130,246,1)_100%)]",
    opacity: "opacity-[0.63]",
  },
  {
    top: "top-[1881px]",
    left: "left-[917px]",
    width: "w-2",
    height: "h-[3px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.42]",
  },
  {
    top: "top-[234px]",
    left: "left-[359px]",
    width: "w-2",
    height: "h-0.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(59,130,246,1)_100%)]",
    opacity: "opacity-55",
  },
  {
    top: "top-[1588px]",
    left: "left-[1061px]",
    width: "w-1",
    height: "h-[5px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(236,72,153,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.49]",
  },
  {
    top: "top-[1071px]",
    left: "left-[89px]",
    width: "w-1",
    height: "h-1",
    gradient:
      "bg-[linear-gradient(135deg,rgba(59,130,246,1)_0%,rgba(59,130,246,1)_100%)]",
    opacity: "opacity-80",
  },
  {
    top: "top-[572px]",
    left: "left-[1129px]",
    width: "w-0.5",
    height: "h-[5px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(168,85,247,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-[0.32]",
  },
  {
    top: "top-[1768px]",
    left: "left-[833px]",
    width: "w-1.5",
    height: "h-1",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(6,182,212,1)_100%)]",
    opacity: "opacity-[0.36]",
  },
  {
    top: "top-[1804px]",
    left: "left-[1021px]",
    width: "w-1.5",
    height: "h-[7px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(236,72,153,1)_100%)]",
    opacity: "opacity-[0.71]",
  },
  {
    top: "top-[427px]",
    left: "left-0.5",
    width: "w-1.5",
    height: "h-[9px]",
    gradient:
      "bg-[linear-gradient(135deg,rgba(236,72,153,1)_0%,rgba(59,130,246,1)_100%)]",
    opacity: "opacity-[0.74]",
  },
  {
    top: "top-[1750px]",
    left: "left-[46px]",
    width: "w-2",
    height: "h-1.5",
    gradient:
      "bg-[linear-gradient(135deg,rgba(139,92,246,1)_0%,rgba(59,130,246,1)_100%)]",
    opacity: "opacity-75",
  },
];

export const LandingPageDesign = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-white">
      <header className="flex flex-col w-full items-start relative bg-[#ffffffcc] border-b border-[#f2e7fe] z-10">
        <div className="flex h-[100px] items-center justify-between px-[100px] py-0 relative w-full">
          <img
            className="relative w-[100px] h-[35px] object-cover"
            alt="Image"
            src={logo}
          />

          <Button
            variant="outline"
            className="w-20 h-10 whitespace-nowrap rounded-lg border-[#3752e9] text-[#314157] font-medium text-sm tracking-[-0.15px]"
          >
            Sign in
          </Button>
        </div>
      </header>

      <div className="relative self-stretch w-full bg-[linear-gradient(180deg,rgba(250,245,255,1)_0%,rgba(255,255,255,1)_50%,rgba(239,246,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="absolute top-0 left-0 w-full max-w-[1440px] overflow-hidden pointer-events-none">
          {decorativeElements.map((element, index) => (
            <div
              key={`blur-${index}`}
              className={`absolute ${element.top} ${element.left} ${element.width} ${element.height} rounded-[16777200px] blur-3xl ${element.gradient} ${element.opacity}`}
            />
          ))}

          {smallDots.map((dot, index) => (
            <div
              key={`dot-${index}`}
              className={`absolute ${dot.top} ${dot.left} ${dot.width} ${dot.height} rounded-[16777200px] ${dot.gradient} ${dot.opacity}`}
            />
          ))}

          <div className="absolute top-0 left-0 w-[1250px] h-full bg-[linear-gradient(180deg,rgba(139,92,246,0.03)_0%,rgba(0,0,0,0)_0%),linear-gradient(90deg,rgba(139,92,246,0.03)_0%,rgba(0,0,0,0)_0%)]" />
        </div>

        <MainContentSection />
      </div>

      <FooterSection />
    </div>
  );
};
