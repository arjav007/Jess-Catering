import svgPaths from "./svg-c3sap5t21g";
import imgImage17 from "figma:asset/9b9a4edf7c8601ed956cfe7bef6b37a49cfa92de.png";
import imgImageWithFallback from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";
import imgImageWithFallback1 from "figma:asset/05555e67db5820a2b2acddcd6dfd96e095a49d9c.png";

function Group() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.01 24.01">
        <g id="Group">
          <path d="M5.50263 12.005H18.5077" id="Path" stroke="var(--stroke-0, #040101)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.50263 16.0067H18.5077" id="Path_2" stroke="var(--stroke-0, #040101)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.50229 8.00333H18.5074" id="Path_3" stroke="var(--stroke-0, #040101)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Rectangle" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[314.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute aspect-[24/24] left-[91.74%] right-0 top-[calc(50%+1px)]" data-name="Navigation / menu-burger">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center justify-between left-[2px] pb-px px-[24px] top-0 w-[440px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e1e8da] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[40px] relative shrink-0 w-[59px]" data-name="image 17">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return <div className="bg-white h-[582px] shrink-0 w-full" data-name="Container" />;
}

function Button() {
  return (
    <div className="bg-[#6b8a47] h-[47px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[24px] not-italic text-[16px] text-white top-[23.5px] w-[125px]">
        <p className="leading-[24px]">Contact Us</p>
      </div>
    </div>
  );
}

function AboutHero() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[32px] h-[619px] items-start left-0 overflow-clip px-[16px] top-[72px] w-[440px]" data-name="AboutHero">
      <Container2 />
      <Button />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] top-[-0.43px] whitespace-nowrap">About</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[72.411px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Our Story</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[82.525px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Our Values</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[100.722px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Sustainability</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-0 w-[345.102px]" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] top-[-0.43px] whitespace-nowrap">Menu</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[124.405px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Parsi Specialties</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[105.406px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Indian Snacks</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[111.573px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Catering Menu</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-[159.99px] w-[345.102px]" data-name="Container">
      <Heading2 />
      <List1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] top-[-0.43px] whitespace-nowrap">Chocolates</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[84.089px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Collections</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[76.759px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Gift Boxes</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[114.341px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">Custom Orders</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-[319.98px] w-[345.102px]" data-name="Container">
      <Heading3 />
      <List2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] top-[-0.43px] whitespace-nowrap">Contact Info</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.7)] top-[-0.9px] whitespace-nowrap">Melbourne, VIC</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[181.011px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">hello@jesscatering.com</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] top-[2.1px] w-[125.143px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-[0.524px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] whitespace-nowrap">+61 412 345 678</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-[479.96px] w-[345.102px]" data-name="Container">
      <Heading4 />
      <List3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[607.958px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48.006px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[196px] not-italic text-[16px] text-[rgba(75,46,32,0.6)] text-center top-[-1.04px] w-[392px]">© Jess Catering Services · Made with ❤️ in Melbourne</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[80.527px] items-start pt-[32.52px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(75,46,32,0.1)] border-solid border-t-[0.524px] inset-0 pointer-events-none" />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[816.477px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[31.996px] items-start pl-[24px] pr-[23.995px] pt-[47.998px] relative size-full">
        <Container4 />
        <Container9 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f5f3f0] content-stretch flex flex-col h-[818px] items-start left-0 pt-[1.572px] top-[3778px] w-[440px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d5b36b] border-solid border-t-[1.572px] inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#6b8a47] h-[48px] relative rounded-[16777200px] shrink-0 w-[66px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-white top-[calc(50%-12px)] whitespace-nowrap">All</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16777200px] shrink-0 w-[160px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#6e564a] text-[16px] top-[calc(50%-12px)] whitespace-nowrap">Parsi Specialties</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[16777200px] shrink-0 w-[141px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#6e564a] text-[16px] top-[calc(50%-12px)] whitespace-nowrap">Indian Snacks</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[12px] items-start left-0 pl-[24px] py-[36px] top-[871px] w-[440px]">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function CtaSection() {
  return <div className="absolute h-[571px] left-0 opacity-5 top-0 w-[440px]" data-name="CTASection" />;
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[196px] not-italic text-[16px] text-[rgba(75,46,32,0.8)] text-center top-[0.01px] w-[392px]">{`Let's create something memorable together.`}</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#6b8a47] h-[47px] relative rounded-[10px] shrink-0 w-[142px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-[28px] not-italic text-[16px] text-white top-[12.02px] w-[85px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button4 />
    </div>
  );
}

function CtaSection1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.995px] h-[194px] items-start left-[24px] top-[15px] w-[392px]" data-name="CTASection">
      <div className="flex flex-col font-['Abhaya_Libre_SemiBold:Regular',sans-serif] h-[71px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8a47] text-[28px] text-center w-[392px]">
        <p className="leading-[36px]">Ready to host your next event or gift our handmade chocolates?</p>
      </div>
      <Paragraph1 />
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-white h-[224px] left-0 overflow-clip top-[3514px] w-[440px]" data-name="Container">
      <CtaSection />
      <CtaSection1 />
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

function MenuCard() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] w-[64px]" data-name="MenuCard">
      <Button5 />
      <Button6 />
      <Button7 />
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

function Button8() {
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
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[16.31px] not-italic text-[#6e564a] text-[18px] text-center top-[0.5px] whitespace-nowrap">1</p>
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

function Button9() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-[136px]" data-name="Container">
      <Button8 />
      <Text />
      <Button9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px] whitespace-nowrap">A$18 / Dozen</p>
      <Container12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[51px] leading-[26px] not-italic relative shrink-0 text-[#6e564a] text-[16px] w-[394px]">
        <p className="mb-0">Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys.</p>
        <p>&nbsp;</p>
      </div>
      <Frame2 />
    </div>
  );
}

function MenuCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center py-[8px] relative shrink-0 w-full" data-name="MenuCard">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] whitespace-nowrap">Samosa Platter</p>
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[463px] items-start relative shrink-0 w-full">
      <ImageWithFallback />
      <MenuCard1 />
    </div>
  );
}

function Button10() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button11() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button12() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] w-[64px]" data-name="MenuCard">
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback} />
      <MenuCard2 />
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px] whitespace-nowrap">{`Add `}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px] whitespace-nowrap">A$2 / piece</p>
      <Button13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[51px] leading-[26px] not-italic relative shrink-0 text-[#6e564a] text-[16px] w-[394px]">
        <p className="mb-0">Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys.</p>
        <p>&nbsp;</p>
      </div>
      <Frame4 />
    </div>
  );
}

function MenuCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center py-[8px] relative shrink-0 w-full" data-name="MenuCard">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] whitespace-nowrap">Samosa Platter</p>
      <Frame14 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[463px] items-start relative shrink-0 w-full">
      <ImageWithFallback1 />
      <MenuCard3 />
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

function MenuCard4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] w-[64px]" data-name="MenuCard">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback} />
      <MenuCard4 />
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px] whitespace-nowrap">{`Add `}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px] whitespace-nowrap">A$2 / piece</p>
      <Button17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[51px] leading-[26px] not-italic relative shrink-0 text-[#6e564a] text-[16px] w-[394px]">
        <p className="mb-0">Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys.</p>
        <p>&nbsp;</p>
      </div>
      <Frame6 />
    </div>
  );
}

function MenuCard5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center py-[8px] relative shrink-0 w-full" data-name="MenuCard">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] whitespace-nowrap">Samosa Platter</p>
      <Frame15 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[463px] items-start relative shrink-0 w-full">
      <ImageWithFallback2 />
      <MenuCard5 />
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

function MenuCard6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] w-[64px]" data-name="MenuCard">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback} />
      <MenuCard6 />
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px] whitespace-nowrap">{`Add `}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px] whitespace-nowrap">A$2 / piece</p>
      <Button21 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[51px] leading-[26px] not-italic relative shrink-0 text-[#6e564a] text-[16px] w-[394px]">
        <p className="mb-0">Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys.</p>
        <p>&nbsp;</p>
      </div>
      <Frame8 />
    </div>
  );
}

function MenuCard7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center py-[8px] relative shrink-0 w-full" data-name="MenuCard">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] whitespace-nowrap">Samosa Platter</p>
      <Frame16 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[463px] items-start relative shrink-0 w-full">
      <ImageWithFallback3 />
      <MenuCard7 />
    </div>
  );
}

function Button22() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button23() {
  return <div className="bg-[rgba(255,255,255,0.5)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Button" />;
}

function Button24() {
  return <div className="bg-white flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[16777200px]" data-name="Button" />;
}

function MenuCard8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] w-[64px]" data-name="MenuCard">
      <Button22 />
      <Button23 />
      <Button24 />
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

function Button25() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-15px)] not-italic text-[#6b8a47] text-[16px] top-[7px] whitespace-nowrap">{`Add `}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#c49533] text-[20px] whitespace-nowrap">A$2 / piece</p>
      <Button25 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[51px] leading-[26px] not-italic relative shrink-0 text-[#6e564a] text-[16px] w-[394px]">
        <p className="mb-0">Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys.</p>
        <p>&nbsp;</p>
      </div>
      <Frame10 />
    </div>
  );
}

function MenuCard9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center py-[8px] relative shrink-0 w-full" data-name="MenuCard">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] whitespace-nowrap">Samosa Platter</p>
      <Frame17 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[463px] items-start relative shrink-0 w-full">
      <ImageWithFallback4 />
      <MenuCard9 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[20px] size-[23.995px] top-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.995 23.995">
        <g id="Icon">
          <path d={svgPaths.p32f3a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d="M2.99951 5.99805H20.9958" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
          <path d={svgPaths.p1a8d1700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[4.881px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[2px] not-italic text-[12px] text-center text-white top-[0.52px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function FloatingCartButton() {
  return (
    <div className="absolute bg-[#d5b36b] content-stretch flex items-center justify-center left-[43.99px] rounded-[17586600px] size-[23.995px] top-[-4px]" data-name="FloatingCartButton">
      <Text1 />
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[#6b8a47] left-[325px] rounded-[17586600px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[63.992px] top-[550px]" data-name="Button">
      <Icon2 />
      <FloatingCartButton />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[24px] top-[991px] w-[392px]">
      <Frame />
      <Frame3 />
      <Frame5 />
      <Frame7 />
      <Frame9 />
      <Button26 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[156px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d5b36b] text-[16px] tracking-[0.8px] uppercase whitespace-nowrap">ORDER WITH EASE</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[59px] relative shrink-0 w-[329px]" data-name="Heading 1">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[60px] left-0 not-italic text-[#6b8a47] text-[48px] top-[-0.99px] w-[345px]">Catering Order</p>
    </div>
  );
}

function Container13() {
  return <div className="bg-[#d5b36b] h-[1.998px] shrink-0 w-[63.992px]" data-name="Container" />;
}

function Button27() {
  return (
    <div className="bg-[#6b8a47] h-[47px] relative rounded-[10px] shrink-0 w-[138px]" data-name="Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] not-italic text-[16px] text-white top-[23px] whitespace-nowrap">
        <p className="leading-[24px]">Order Now</p>
      </div>
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[290px] relative rounded-[16px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[16px] top-[116px] w-[408.004px]">
      <Text2 />
      <Heading />
      <Container13 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.8)] w-[386px]">Select your dishes, share your event details, and review before confirming — a seamless, handcrafted experience.</p>
      <Button27 />
      <ImageWithFallback5 />
    </div>
  );
}

function Container14() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(213,179,107,0.3)] h-[2px] left-1/2 top-[calc(50%-13px)] w-[440px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="bg-[#6b8a47] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Libre_Caslon_Display:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">I</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[87px]" data-name="Container">
      <Container16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6b8a47] text-[14px] whitespace-nowrap">Select Menu</p>
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="h-[27px] relative shrink-0 w-[11.563px]" data-name="ProgressIndicator">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#6e564a] text-[18px] top-[-1px] whitespace-nowrap">II</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(213,179,107,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <ProgressIndicator />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[87px]">
      <Container17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(110,86,74,0)] w-[min-content]">Event Details</p>
    </div>
  );
}

function ProgressIndicator1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[11.563px]" data-name="ProgressIndicator">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[27px] left-[calc(50%-8.5px)] not-italic text-[#6e564a] text-[18px] top-[-1px] whitespace-nowrap">III</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(213,179,107,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <ProgressIndicator1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[87px]">
      <Container18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(110,86,74,0)] text-center w-[min-content]">Review</p>
    </div>
  );
}

function ProgressIndicator2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[11.563px]" data-name="ProgressIndicator">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[27px] left-[calc(50%-8.5px)] not-italic text-[#6e564a] text-[18px] top-[-1px] whitespace-nowrap">IV</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(213,179,107,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <ProgressIndicator2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[87px]">
      <Container19 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(110,86,74,0)] text-center whitespace-nowrap">Confirm</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#f9f7f4] content-stretch flex h-[120px] items-center justify-between left-0 px-[40px] py-[16px] top-[749px] w-[440px]">
      <Container14 />
      <Container15 />
      <Frame11 />
      <Frame12 />
      <Frame18 />
    </div>
  );
}

export default function InteractiveMenuPageDesignCopyCopy() {
  return (
    <div className="bg-white relative size-full" data-name="Interactive Menu Page Design (Copy) (Copy)">
      <Container />
      <AboutHero />
      <Footer />
      <Frame1 />
      <Container10 />
      <Frame20 />
      <Frame21 />
      <div className="absolute h-0 left-[24px] top-[3474px] w-[392px]">
        <div className="absolute inset-[-1px_-0.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 394 2">
            <path d="M1 1H393" id="Vector 7187" stroke="var(--stroke-0, #C49533)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}