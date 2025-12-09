import svgPaths from "./svg-h0j9h4ya4v";
import imgFrame23 from "figma:asset/63e2a0988703224fb290d056171b3196eb194766.png";

function Frame11() {
  return (
    <div className="absolute h-[21px] left-[15px] top-0 w-[648px]">
      <div className="absolute flex flex-col font-['Rough_Motion:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#f7e3b9] text-[21px] text-nowrap top-[10.5px] translate-y-[-50%]">
        <p className="leading-[20.876px] whitespace-pre">FEATURED PROJECTS</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[116px] left-0 rounded-[17px] top-[36px] w-[678px]">
      <div aria-hidden="true" className="absolute border-[#372a26] border-[0px_1.5px] border-solid inset-0 pointer-events-none rounded-[17px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[58px] left-[92px] rounded-[22px] top-[151px] w-[457px]">
      <div aria-hidden="true" className="absolute border-[#372a26] border-[0px_1.5px_1.5px] border-solid inset-0 pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[151px] left-[153px] rounded-[22px] top-0 w-[369px]">
      <div aria-hidden="true" className="absolute border-[#372a26] border-[1.5px_1.5px_0px] border-solid inset-0 pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[209px] left-0 overflow-clip top-0 w-[678px]">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[103px] left-0 rounded-[15px] shadow-[0px_3px_4.5px_2px_rgba(0,0,0,0.25)] top-0 w-[173px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[15px] size-full" src={imgFrame23} />
    </div>
  );
}

function FamiconsRocketOutline() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="famicons:rocket-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="famicons:rocket-outline">
          <path d={svgPaths.pb67e700} fill="var(--fill-0, #E1C792)" id="Vector" />
          <path d={svgPaths.pb83e440} fill="var(--fill-0, #E1C792)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[21px] leading-[0] not-italic relative shrink-0 text-nowrap w-[113px]">
      <div className="absolute flex flex-col font-['Rough_Motion:Regular',sans-serif] justify-center left-0 text-[#f3dd9a] text-[11.49px] top-[5.5px] tracking-[0.1149px] translate-y-[-50%]">
        <p className="leading-[10.935px] text-nowrap whitespace-pre">mobile app ui/ux overview</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-0 text-[#faf9f6] text-[6.634px] top-[17.5px] tracking-[0.0663px] translate-y-[-50%]">
        <p className="leading-[6.314px] text-nowrap whitespace-pre">
          <span>{`Imagine the future with `}</span>
          <span className="text-[#b69055]">+25%</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[121px] w-[141px]">
      <FamiconsRocketOutline />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow h-[142px] min-h-px min-w-px relative shrink-0">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#352724] box-border content-stretch flex gap-[10px] h-[179px] items-start px-[19px] py-[17px] relative rounded-[19px] shrink-0 w-[211px]">
      <div aria-hidden="true" className="absolute border border-[#614b41] border-solid inset-0 pointer-events-none rounded-[19px]" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-[15px] top-[12px]">
      {[...Array(3).keys()].map((_, i) => (
        <Frame10 key={i} />
      ))}
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[209px] left-0 top-[26px] w-[678px]">
      <Frame />
      <Frame5 />
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="relative size-full">
      <Frame11 />
      <Frame9 />
    </div>
  );
}