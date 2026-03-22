import imgImageWithFallback from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";
import imgImageWithFallback1 from "figma:asset/689bd292fab1bce9dff799ef7916a42a68c2980e.png";
import imgImageWithFallback2 from "figma:asset/0d78301b672e4e5bc31f3e2bb9cc142bdf6ce401.png";
import imgImageWithFallback3 from "figma:asset/511c2dd95a20ce33b947bd55f48ee1ea39d27302.png";

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

function Frame12() {
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

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$18 / Dozen</p>
      <Container />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function MenuCard1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback />
      <MenuCard1 />
    </div>
  );
}

function Button5() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button6() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button7() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback1} />
      <MenuCard2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Roti</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px]">{`Add `}</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$2 / piece</p>
      <Button8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function MenuCard3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame14 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback1 />
      <MenuCard3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Button9() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button10() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button11() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback2} />
      <MenuCard4 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Pasta</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Icon2() {
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

function Button12() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[16.31px] not-italic text-[#6e564a] text-[18px] text-center top-[0.5px]">1</p>
      </div>
    </div>
  );
}

function Icon3() {
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

function Button13() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-[136px]" data-name="Container">
      <Button12 />
      <Text1 />
      <Button13 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$25 / Kg</p>
      <Container1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function MenuCard5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame19 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback2 />
      <MenuCard5 />
    </div>
  );
}

function Button14() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button15() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button16() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback3} />
      <MenuCard6 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Paneer Butter Masala</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px]">{`Add `}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$20 / kg</p>
      <Button17 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function MenuCard7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame22 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback3 />
      <MenuCard7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function Button18() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button19() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button20() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback} />
      <MenuCard8 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Samosa</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Icon4() {
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

function Button21() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[16.31px] not-italic text-[#6e564a] text-[18px] text-center top-[0.5px]">1</p>
      </div>
    </div>
  );
}

function Icon5() {
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

function Button22() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-[136px]" data-name="Container">
      <Button21 />
      <Text2 />
      <Button22 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$18 / Dozen</p>
      <Container2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function MenuCard9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame26 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback4 />
      <MenuCard9 />
    </div>
  );
}

function Button23() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button24() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button25() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button23 />
      <Button24 />
      <Button25 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback1} />
      <MenuCard10 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Roti</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px]">{`Add `}</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$2 / piece</p>
      <Button26 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function MenuCard11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame29 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback5 />
      <MenuCard11 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Button27() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button28() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button29() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button27 />
      <Button28 />
      <Button29 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback2} />
      <MenuCard12 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Pasta</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Icon6() {
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

function Button30() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[16.31px] not-italic text-[#6e564a] text-[18px] text-center top-[0.5px]">1</p>
      </div>
    </div>
  );
}

function Icon7() {
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

function Button31() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-[136px]" data-name="Container">
      <Button30 />
      <Text3 />
      <Button31 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$25 / Kg</p>
      <Container3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function MenuCard13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame33 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback6 />
      <MenuCard13 />
    </div>
  );
}

function Button32() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button33() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button34() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard14() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button32 />
      <Button33 />
      <Button34 />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback3} />
      <MenuCard14 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Paneer Butter Masala</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px]">{`Add `}</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$20 / kg</p>
      <Button35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function MenuCard15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame36 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback7 />
      <MenuCard15 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Button36() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button37() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button38() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard16() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button36 />
      <Button37 />
      <Button38 />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback2} />
      <MenuCard16 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Pasta</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px]">{`Add `}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$25 / Kg</p>
      <Button39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function MenuCard17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame40 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback8 />
      <MenuCard17 />
    </div>
  );
}

function Button40() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button41() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button42() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard18() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[264px] w-[64px]" data-name="MenuCard">
      <Button40 />
      <Button41 />
      <Button42 />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback3} />
      <MenuCard18 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0">
      <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px]">Paneer Butter Masala</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[389px] whitespace-pre-wrap">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
    </div>
  );
}

function Button43() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px]">{`Add `}</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px]">A$20 / kg</p>
      <Button43 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function MenuCard19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="MenuCard">
      <Frame43 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389px]">
      <ImageWithFallback9 />
      <MenuCard19 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

export default function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start pb-[48px] relative size-full">
      <Frame13 />
      <Frame18 />
      <Frame25 />
      <Frame32 />
      <Frame39 />
    </div>
  );
}