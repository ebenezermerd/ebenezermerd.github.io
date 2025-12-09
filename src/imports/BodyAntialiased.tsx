import { heroData, navLinks, brandName } from "../data";

function Frame() {
  return (
    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[rgba(0,0,0,0)] w-full">
      {/* Name - Now First and Bigger */}
      <div className="bg-clip-text bg-gradient-to-r flex flex-col from-[rgba(0,0,0,0)] justify-center text-center to-[rgba(0,0,0,0)] w-full px-4" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 788 72\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(39.4 3.6 -39.4 3.6 394 36)\\'><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.031525\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.06305\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.1261\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.21958\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.31305\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.725\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.9\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.95\\'/><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[96px] leading-tight tracking-tight lg:tracking-[-2.4px] font-extrabold">{heroData.name}</p>
      </div>
      {/* Software Expertise - Now Below Name */}
      <div className="bg-clip-text bg-gradient-to-r flex flex-col from-[rgba(0,0,0,0)] justify-center text-center to-[rgba(0,0,0,0)] w-full px-4 mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1003 45.912\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(50.15 2.2956 -50.15 2.2956 501.5 22.956)\\'><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.031525\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.06305\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.1261\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.21958\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.31305\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(196,195,195,1)\\' offset=\\'0.65\\'/><stop stop-color=\\'rgba(166,165,165,1)\\' offset=\\'0.725\\'/><stop stop-color=\\'rgba(136,135,135,1)\\' offset=\\'0.8\\'/><stop stop-color=\\'rgba(98,97,97,1)\\' offset=\\'0.9\\'/><stop stop-color=\\'rgba(78,78,78,1)\\' offset=\\'0.95\\'/><stop stop-color=\\'rgba(59,59,59,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[33.122px] tracking-tight lg:tracking-[-0.828px] leading-tight">{heroData.title}</p>
      </div>
    </div>
  );
}

function ParagraphRelative() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 px-4" data-name="Paragraph [relative]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-center text-gray-500 w-full max-w-4xl">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed mb-0">{heroData.description[0]}</p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">{heroData.description[1]}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[37px] items-center w-full max-w-7xl px-4">
      <Frame />
      <ParagraphRelative />
    </div>
  );
}

function DivRelative() {
  return (
    <div id="hero" className="bg-black min-h-screen flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Div [relative]">
      <Frame1 />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Div">
      <DivRelative />
    </div>
  );
}

function DivFontNormal() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6" data-name="Div [font-normal]">
      <a
        href="#hero"
        onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic text-[14px] text-white cursor-pointer hover:text-amber-300 transition-colors duration-300"
      >
        <p className="leading-[20px] whitespace-pre">{brandName}</p>
      </a>
    </div>
  );
}

function SpanRelative() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span [relative]">
      <a
        href="#works"
        onClick={(e) => { e.preventDefault(); handleNavClick('works'); }}
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap cursor-pointer hover:text-amber-300 transition-colors duration-300"
      >
        <p className="leading-[20px] whitespace-pre">Projects</p>
      </a>
    </div>
  );
}

function SpanRelative1() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span [relative]">
      <a
        href="#services"
        onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap cursor-pointer hover:text-amber-300 transition-colors duration-300"
      >
        <p className="leading-[20px] whitespace-pre">Services</p>
      </a>
    </div>
  );
}

function SpanRelative2() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span [relative]">
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap cursor-pointer hover:text-amber-300 transition-colors duration-300"
      >
        <p className="leading-[20px] whitespace-pre">About Me</p>
      </a>
    </div>
  );
}

function SpanRelative3() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Span [relative]">
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap cursor-pointer hover:text-amber-300 transition-colors duration-300"
      >
        <p className="leading-[20px] whitespace-pre">Contact</p>
      </a>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-4 sm:gap-6 md:gap-[24px] items-center relative shrink-0">
      <SpanRelative />
      <SpanRelative1 />
      <SpanRelative2 />
      <SpanRelative3 />
    </div>
  );
}

function DivLgFlex() {
  return (
    <div className="box-border content-stretch hidden md:flex gap-[60px] lg:gap-[80px] items-center px-4 sm:px-6 lg:px-10 py-[14px] relative shrink-0" data-name="Div [lg:flex]">
      <Frame2 />
    </div>
  );
}

function DivHidden() {
  return (
    <div className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 bg-black box-border content-stretch flex items-center justify-between rounded-full shadow-[0px_16px_68px_0px_rgba(47,48,55,0.05),0px_0px_4px_0px_rgba(34,42,53,0.08),0px_0px_0px_1px_rgba(34,42,53,0.04),0px_1px_1px_0px_rgba(0,0,0,0.05),0px_0px_24px_0px_rgba(34,42,53,0.06)] z-[100] w-[95vw] sm:w-[90vw] md:w-auto md:min-w-[600px] lg:min-w-[700px] xl:min-w-[800px]" data-name="Div [hidden]">
      <DivFontNormal />
      <DivLgFlex />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.1)] rounded-full" />
    </div>
  );
}

export default function BodyAntialiased() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Body [antialiased]">
      <Div />
      <DivHidden />
    </div>
  );
}