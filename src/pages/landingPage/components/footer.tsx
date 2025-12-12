const footerLinks = [
  { label: "Privacy", width: "w-[47.11px]" },
  { label: "Terms", width: "w-[39.73px]" },
  { label: "Contact", width: "w-[51.28px]" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start pt-[33px] pb-0 px-8 bg-[#ffffffcc] border-t border-[#f2e7fe]">
      <nav className="flex h-5 items-start justify-center gap-8 w-full">
        {footerLinks.map((link, index) => (
          <div key={index} className={`${link.width} h-5`}>
            <a
              href="#"
              className="[font-family:'Inter',Helvetica] font-normal text-[#45556c] text-sm tracking-[-0.15px] leading-5 whitespace-nowrap hover:underline"
            >
              {link.label}
            </a>
          </div>
        ))}
      </nav>
    </footer>
  );
};
