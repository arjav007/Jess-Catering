import imgFrame1686557232 from "figma:asset/89df004593ab1004ad95a12d506a7351a5eafc5e.png";
import imgFrame1686557233 from "figma:asset/7dc0d6c2835088eea91239387b103e7260dca829.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#6b8a47] text-[52px]">Our Services</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#6e564a] text-[20px] w-[1039px] whitespace-pre-wrap">Thoughtfully prepared food and chocolates, crafted for every occasion.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[592px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-white inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgFrame1686557232} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame1 />
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6b8a47] text-[28px]">Catering for Every Occasion</p>
    </div>
  );
}

function Home() {
  return (
    <div className="h-[26px] relative shrink-0 w-[135.023px]" data-name="Home">
      <div aria-hidden="true" className="absolute border-[#6b8a47] border-b border-solid inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[68px] not-italic text-[#6b8a47] text-[16px] text-center top-[-1px]">Order Catering →</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] w-[593px] whitespace-pre-wrap">From small gatherings to celebrations of up to 50 guests, our catering blends tradition, flavor, and presentation.</p>
      <Home />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[592px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgFrame1686557233} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame2 />
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#6b8a47] text-[28px]">Artisan Chocolates</p>
    </div>
  );
}

function Home1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[153px]" data-name="Home">
      <div aria-hidden="true" className="absolute border-[#6b8a47] border-b border-solid inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[77px] not-italic text-[#6b8a47] text-[16px] text-center top-[-1px]">Order Chocolates →</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] w-[593px] whitespace-pre-wrap">Exquisite, beautifully crafted chocolates, ideal for thoughtful gifting or a personal moment of sweet indulgence. Discover the art of chocolate.</p>
      <Home1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[36px] h-[467px] items-start relative shrink-0">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

export default function SignatureCuisines() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center pb-[64px] pt-[32px] px-[64px] relative size-full" data-name="SignatureCuisines">
      <Frame />
      <Frame3 />
    </div>
  );
}