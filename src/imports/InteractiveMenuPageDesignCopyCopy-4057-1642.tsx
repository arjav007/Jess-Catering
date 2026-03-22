import svgPaths from "./svg-ps3pzgd6ai";
import clsx from "clsx";
import imgImageWithFallback from "figma:asset/8fa9984f236b1f51c733311bf81fe4b983331ad3.png";
import imgImageWithFallback1 from "figma:asset/05555e67db5820a2b2acddcd6dfd96e095a49d9c.png";
import imgImageWithFallback2 from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";
import imgImageWithFallback3 from "figma:asset/809412d2a82f3b98cbc6ca6930f0a6251ec21032.png";
import imgImage17 from "figma:asset/9b9a4edf7c8601ed956cfe7bef6b37a49cfa92de.png";
import imgImageWithFallback4 from "figma:asset/23dab75c5b47c133865cf83bcc26afbb8c3b920d.png";
import imgImageWithFallback5 from "figma:asset/4179209616a8b397c059b945f301f6290769ccc4.png";
import imgImageWithFallback6 from "figma:asset/ccdc245a0e9cbfe62e124e99e25c54c412675de9.png";
import imgImageWithFallback7 from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";
type MenuCardProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function MenuCard({ text, text1, text2, text3 }: MenuCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center not-italic px-0 py-[8px] relative shrink-0 w-full">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] relative shrink-0 text-[#6b8a47] text-[24px] text-nowrap">{text}</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[51px] leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[394px]">
        <p className="mb-0">{text1}</p>
        <p>{text2}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#c49533] text-[20px] text-nowrap">{text3}</p>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("bg-white h-[48px] relative rounded-[1.67772e+07px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[18px] not-italic text-[#6e564a] text-[16px] text-nowrap top-[calc(50%-12px)]">{text}</p>
    </div>
  );
}
type LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkText({ text, additionalClassNames = "" }: LinkTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[19.917px] items-start left-0 pb-[0.524px] pt-0 px-0 top-[2.1px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.524px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] text-nowrap">{text}</p>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] text-nowrap top-[-0.43px]">{text}</p>
    </div>
  );
}
type GroupPathProps = {
  additionalClassNames?: string;
};

function GroupPath({ additionalClassNames = "" }: GroupPathProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-19.2%_-5.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5888 1.5">
          <path d="M0.75 0.75H14.8388" id="Path" stroke="var(--stroke-0, #040101)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback2} />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback3} />
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText({ text, additionalClassNames = "" }: ParagraphTextProps) {
  return (
    <div className={clsx("absolute left-[2px] w-[391px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.8)] top-px w-[386px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <div className={clsx("absolute left-[2px]", additionalClassNames)}>
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[60px] left-0 not-italic text-[#6b8a47] text-[48px] top-[-0.99px] w-[345px]">{text}</p>
    </div>
  );
}

export default function InteractiveMenuPageDesignCopyCopy() {
  return (
    <div className="bg-white relative size-full" data-name="Interactive Menu Page Design (Copy) (Copy)">
      <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col gap-[32px] h-[732px] items-start left-0 overflow-clip px-[16px] py-0 top-[3086px] w-[440px]" data-name="AboutHero">
        <div className="bg-[#f9f7f4] h-[254px] relative shrink-0 w-full" data-name="Container">
          <HeadingText text="Order With Ease" additionalClassNames="h-[52px] top-[47px] w-[406px]" />
          <ParagraphText text="Select your dishes, share your event details, and review before confirming — a seamless, handcrafted experience." additionalClassNames="h-[79px] top-[123px]" />
          <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[2px] top-[226px] w-[399px]" data-name="Link">
            <div className="h-[28px] relative shrink-0 w-[82px]" data-name="ChocolatesSection">
              <div aria-hidden="true" className="absolute border-[#c49533] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#c49533] text-[16px] text-nowrap top-[-1px]">Order Now</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Icon">
                  <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #C49533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #C49533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[377px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
          <div className="absolute h-[410px] left-0 rounded-[16px] top-0 w-[408px]" data-name="ImageWithFallback">
            <Image />
            <div className="absolute h-[379px] left-[-11px] rounded-[16px] top-[-1px] w-[428px]" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback} />
            </div>
            <div className="absolute h-[452px] left-[-3px] top-[-27px] w-[417px]" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[72px] items-center justify-between left-[2px] pb-px pt-0 px-[24px] top-0 w-[440px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e1e8da] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="h-[40px] relative shrink-0 w-[59px]" data-name="image 17">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
        <div className="h-[40px] relative shrink-0 w-[314.852px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute aspect-[24/24] left-[91.74%] right-0 top-[calc(50%+1px)] translate-y-[-50%]" data-name="Navigation / menu-burger">
              <div className="absolute contents inset-[-0.02%]" data-name="Group">
                <GroupPath additionalClassNames="inset-[47.92%_22.91%]" />
                <GroupPath additionalClassNames="inset-[64.59%_22.91%_31.24%_22.91%]" />
                <GroupPath additionalClassNames="inset-[31.24%_22.91%_64.59%_22.91%]" />
                <div className="absolute inset-[-0.02%]" data-name="Rectangle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col gap-[32px] h-[970px] items-start left-0 overflow-clip px-[16px] py-0 top-[72px] w-[440px]" data-name="AboutHero">
        <div className="bg-[#f9f7f4] h-[505px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute content-stretch flex h-[19.393px] items-start left-[2px] top-[44.09px] w-[99.166px]" data-name="Text">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d5b36b] text-[16px] text-nowrap tracking-[0.8px] uppercase">OUR MENU</p>
          </div>
          <HeadingText text="Crafted with Care, Inspired by Tradition" additionalClassNames="h-[161px] top-[82px] w-[329px]" />
          <div className="absolute bg-[#d5b36b] h-[1.998px] left-[2px] top-[272.98px] w-[63.992px]" data-name="Container" />
          <ParagraphText text="From soulful Parsi specialties to beloved Indian snacks, every dish from Jess Catering celebrates home-style flavor with elegance. Our handcrafted chocolates bring the perfect sweet finish to every celebration." additionalClassNames="h-[53px] top-[298px]" />
          <div className="absolute bg-[#6b8a47] h-[47px] left-0 rounded-[10px] top-[458px] w-[124px]" data-name="Button">
            <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[24px] not-italic text-[16px] text-white top-[23.5px] translate-y-[-50%] w-[76px]">
              <p className="leading-[24px]">Our Menu</p>
            </div>
          </div>
        </div>
        <div className="h-[377px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
          <div className="absolute h-[426.112px] left-[0.08px] top-[0.05px] w-[393.092px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col h-[426.112px] items-start left-0 opacity-0 pb-0 pt-[-21.306px] px-[-19.655px] top-0 w-[393.092px]" data-name="Container">
              <div className="h-[468.722px] relative shrink-0 w-full" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
              </div>
            </div>
            <div className="absolute h-[468.722px] left-[-19.65px] top-[-21.31px] w-[432.401px]" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
            </div>
            <div className="absolute content-stretch flex flex-col h-[426.112px] items-start left-0 opacity-0 pb-0 pt-[-21.306px] px-[-19.655px] top-0 w-[393.092px]" data-name="Container">
              <div className="h-[468.722px] relative shrink-0 w-full" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
              </div>
            </div>
          </div>
          <div className="absolute bg-gradient-to-r from-[rgba(249,247,244,0.4)] h-[426.112px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[393.092px]" data-name="Container" />
          <div className="absolute h-[396px] left-0 rounded-[16px] top-0 w-[394px]" data-name="ImageWithFallback">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback2} />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback6} />
            </div>
          </div>
          <div className="absolute h-[410px] left-0 rounded-[16px] top-0 w-[408px]" data-name="ImageWithFallback">
            <Image />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f5f3f0] content-stretch flex flex-col h-[818px] items-start left-0 pb-0 pt-[1.572px] px-0 top-[4179px] w-[440px]" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#d5b36b] border-[1.572px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="h-[816.477px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[31.996px] items-start pb-0 pl-[24px] pr-[23.995px] pt-[47.998px] relative size-full">
            <div className="h-[607.958px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-0 w-[345.102px]" data-name="Container">
                <HeadingText1 text="About" />
                <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Our Story" additionalClassNames="w-[72.411px]" />
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Our Values" additionalClassNames="w-[82.525px]" />
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Sustainability" additionalClassNames="w-[100.722px]" />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-[159.99px] w-[345.102px]" data-name="Container">
                <HeadingText1 text="Menu" />
                <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Parsi Specialties" additionalClassNames="w-[124.405px]" />
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Indian Snacks" additionalClassNames="w-[105.406px]" />
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Catering Menu" additionalClassNames="w-[111.573px]" />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-[319.98px] w-[345.102px]" data-name="Container">
                <HeadingText1 text="Chocolates" />
                <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Collections" additionalClassNames="w-[84.089px]" />
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Gift Boxes" additionalClassNames="w-[76.759px]" />
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="Custom Orders" additionalClassNames="w-[114.341px]" />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-[479.97px] w-[345.102px]" data-name="Container">
                <HeadingText1 text="Contact Info" />
                <div className="content-stretch flex flex-col gap-[7.993px] h-[87.995px] items-start relative shrink-0 w-full" data-name="List">
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.7)] text-nowrap top-[-0.9px]">Melbourne, VIC</p>
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="hello@jesscatering.com" additionalClassNames="w-[181.011px]" />
                  </div>
                  <div className="h-[24.003px] relative shrink-0 w-full" data-name="List Item">
                    <LinkText text="+61 412 345 678" additionalClassNames="w-[125.143px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[80.527px] items-start pb-0 pt-[32.52px] px-0 relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[0.524px_0px_0px] border-[rgba(75,46,32,0.1)] border-solid inset-0 pointer-events-none" />
              <div className="h-[48.006px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[196px] not-italic text-[16px] text-[rgba(75,46,32,0.6)] text-center top-[-1.04px] translate-x-[-50%] w-[392px]">© Jess Catering Services · Made with ❤️ in Melbourne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[12px] items-start left-0 pl-[24px] pr-0 py-[36px] top-[1058px] w-[440px]">
        <div className="bg-[#6b8a47] h-[48px] relative rounded-[1.67772e+07px] shrink-0 w-[66px]" data-name="Button">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[calc(50%-12px)]">All</p>
        </div>
        <ButtonText text="Parsi Specialties" additionalClassNames="w-[160px]" />
        <ButtonText text="Indian Snacks" additionalClassNames="w-[141px]" />
      </div>
      <div className="absolute bg-white h-[224px] left-0 overflow-clip top-[3896px] w-[440px]" data-name="Container">
        <div className="absolute h-[571px] left-0 opacity-5 top-0 w-[440px]" data-name="CTASection" />
        <div className="absolute content-stretch flex flex-col gap-[23.995px] h-[194px] items-start left-[24px] top-[15px] w-[392px]" data-name="CTASection">
          <div className="flex flex-col font-['Abhaya_Libre_SemiBold:Regular',sans-serif] h-[71px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8a47] text-[28px] text-center w-[392px]">
            <p className="leading-[36px]">Ready to host your next event or gift our handmade chocolates?</p>
          </div>
          <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[196px] not-italic text-[16px] text-[rgba(75,46,32,0.8)] text-center top-0 translate-x-[-50%] w-[392px]">{`Let's create something memorable together.`}</p>
          </div>
          <div className="content-stretch flex flex-col h-[47px] items-center justify-center relative shrink-0 w-full" data-name="Container">
            <div className="bg-[#6b8a47] h-[47px] relative rounded-[10px] shrink-0 w-[142px]" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-[28px] not-italic text-[16px] text-white top-[12.02px] w-[85px]">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[1178px] w-[392px]">
        <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback7} />
          <div className="absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] translate-x-[-50%] w-[64px]" data-name="MenuCard">
            {[...Array(2).keys()].map((_, i) => (
              <div className="bg-[rgba(255,255,255,0.5)] rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Button" />
            ))}
            <div className="basis-0 bg-white grow h-[8px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="MenuCard">
          <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] text-nowrap">Samosa Platter</p>
          <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start not-italic relative shrink-0">
            <div className="h-[51px] leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[394px]">
              <p className="mb-0">Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys.</p>
              <p>&nbsp;</p>
            </div>
            <p className="leading-[28px] relative shrink-0 text-[#c49533] text-[20px] text-nowrap">A$18 / Dozen</p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[1649px] w-[392px]">
        <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback7} />
          <div className="absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] translate-x-[-50%] w-[64px]" data-name="MenuCard">
            {[...Array(2).keys()].map((_, i) => (
              <div className="bg-[rgba(255,255,255,0.5)] rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Button" />
            ))}
            <div className="basis-0 bg-white grow h-[8px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
          </div>
        </div>
        <MenuCard text="Samosa Platter" text1="Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys." text2="&nbsp;" text3="A$18 / Dozen" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[2120px] w-[392px]">
        <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback7} />
          <div className="absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] translate-x-[-50%] w-[64px]" data-name="MenuCard">
            {[...Array(2).keys()].map((_, i) => (
              <div className="bg-[rgba(255,255,255,0.5)] rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Button" />
            ))}
            <div className="basis-0 bg-white grow h-[8px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
          </div>
        </div>
        <MenuCard text="Samosa Platter" text1="Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys." text2="&nbsp;" text3="A$18 / Dozen" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[2591px] w-[392px]">
        <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback7} />
          <div className="absolute content-stretch flex gap-[8px] h-[8px] items-start left-1/2 top-[263px] translate-x-[-50%] w-[64px]" data-name="MenuCard">
            {[...Array(2).keys()].map((_, i) => (
              <div className="bg-[rgba(255,255,255,0.5)] rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Button" />
            ))}
            <div className="basis-0 bg-white grow h-[8px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
          </div>
        </div>
        <MenuCard text="Samosa Platter" text1="Crispy, golden samosas filled with spiced potatoes and peas. Served with mint and tamarind chutneys." text2="&nbsp;" text3="A$18 / Dozen" />
      </div>
    </div>
  );
}