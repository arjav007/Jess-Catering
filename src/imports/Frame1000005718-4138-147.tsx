import imgImageWithFallback from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";

function Container() {
  return <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Frame2() {
  return (
    <div className="bg-[#6b8a47] content-stretch flex items-center justify-center px-[28px] py-[16px] relative rounded-[10px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Order Now</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[64px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] w-[441px]">Order With Ease</p>
      <Container />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#6e564a] text-[20px] w-[504px]">Select your dishes, share your event details, and review before confirming — a seamless, handcrafted experience.</p>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[504px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#c49533] text-[16px] tracking-[0.8px] uppercase w-full">CATERING ORDER</p>
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