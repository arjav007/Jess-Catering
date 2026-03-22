import imgImageWithFallback from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";

function Button() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button1() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button2() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback} />
      <MenuCard />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Samosa</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16602 10H15.8327" id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[16.31px] not-italic text-[#6e564a] text-[18px] text-center top-[0.5px]">1</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16602 10H15.8327" id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 4.16602V15.8327" id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-[136px]" data-name="Container">
      <Button3 />
      <Text />
      <Button4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$18 / Dozen</p>
      <Container />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function MenuCard1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <ImageWithFallback />
      <MenuCard1 />
    </div>
  );
}