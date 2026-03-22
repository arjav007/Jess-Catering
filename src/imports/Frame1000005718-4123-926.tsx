import imgImageWithFallback from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Abhaya_Libre_SemiBold:Regular',sans-serif] gap-[4px] items-start leading-[64px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] whitespace-pre-wrap">
      <p className="relative shrink-0 w-[441px]">Crafted with Care,</p>
      <p className="relative shrink-0 w-[441px]">Served with Heart.</p>
    </div>
  );
}

function Container() {
  return <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Frame2() {
  return (
    <div className="bg-[#6b8a47] content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Order Catering</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[10px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b8a47] text-[16px]">View Menu</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Container />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#6e564a] text-[20px] w-[504px] whitespace-pre-wrap">From intimate gatherings to joyful celebrations, we bring the warmth of home-cooked food to every table across Melbourne.</p>
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[504px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#c49533] text-[16px] tracking-[0.8px] uppercase w-full whitespace-pre-wrap">CATERING ORDER</p>
      <Frame1 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[652px] relative rounded-[16px] shrink-0 w-[649px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-white content-stretch flex gap-[78px] items-center p-[64px] relative size-full">
      <Frame />
      <ImageWithFallback />
    </div>
  );
}