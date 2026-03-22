import svgPaths from "./svg-0559c0l9kx";
import clsx from "clsx";
import imgImageWithFallback from "figma:asset/ecaeb2387c249616c77b273d85d16cd7b69f71ad.png";
import imgImageWithFallback1 from "figma:asset/4179209616a8b397c059b945f301f6290769ccc4.png";
import imgImageWithFallback2 from "figma:asset/89df004593ab1004ad95a12d506a7351a5eafc5e.png";
import imgImageWithFallback3 from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";
import imgImageWithFallback4 from "figma:asset/7dc0d6c2835088eea91239387b103e7260dca829.png";
import imgImage17 from "figma:asset/9b9a4edf7c8601ed956cfe7bef6b37a49cfa92de.png";
import imgImageWithFallback5 from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";
import imgImageWithFallback6 from "figma:asset/23dab75c5b47c133865cf83bcc26afbb8c3b920d.png";
import imgImageWithFallback7 from "figma:asset/35b29a957dc8fcdefb693de6bf192f9e9ba11f04.png";

function Timeline1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[151.979px] relative shrink-0 w-[273.109px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.993px] items-start relative size-full">{children}</div>
    </div>
  );
}

function Timeline({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[151.979px] relative shrink-0 w-[47.998px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.993px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#6b8a47] relative rounded-[1.75866e+07px] shrink-0 size-[47.998px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function AboutIntro({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[1.25829e+07px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border-[#6b8a47] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[1.25829e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.5px] relative size-full">{children}</div>
    </div>
  );
}

function Icon3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[23.995px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.995 23.995">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Icon2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[31.996px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9961 31.9961">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
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
type HeadingText2Props = {
  text: string;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] text-nowrap top-[-0.43px]">{text}</p>
    </div>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ additionalClassNames = "" }: IconProps) {
  return (
    <div className={clsx("absolute size-[47.998px] top-[32px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.9982 47.9982">
        <g id="Icon">
          <path d={svgPaths.p195e7800} id="Vector" stroke="var(--stroke-0, #D5B36B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99985" />
          <path d={svgPaths.p10040580} id="Vector_2" stroke="var(--stroke-0, #D5B36B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.99985" />
        </g>
      </svg>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <p className="absolute font-['Abhaya_Libre:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#6b8a47] text-[18px] text-nowrap top-[-0.38px]">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="h-[27.991px] relative shrink-0 w-full">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#d5b36b] text-[20px] text-nowrap top-[0.57px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[36px] relative shrink-0 w-full">
      <div className="absolute flex flex-col font-['Abhaya_Libre_SemiBold:Regular',sans-serif] h-[37px] justify-center leading-[0] left-[196.01px] not-italic text-[#6b8a47] text-[28px] text-center top-[17.5px] translate-x-[-50%] translate-y-[-50%] w-[392px]">
        <p className="leading-[40px]">{text}</p>
      </div>
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
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center text-nowrap">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px]">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px]">{text1}</p>
    </div>
  );
}

export default function IPhone16ProMax() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 Pro Max - 3">
      <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 top-[916px] translate-x-[-50%] w-[440px]">
        <div className="bg-[#f9f7f4] content-stretch flex flex-col gap-[16px] items-center pb-0 pt-[32px] px-0 relative shrink-0 w-full">
          <p className="font-['Abhaya_Libre:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#6b8a47] text-[28px] text-center w-[392px]">Welcome to Jess Catering Services</p>
          <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[14px] text-center w-[392px]">This site is dedicated to providing you with yummy food that feels home-cooked. Jess Catering offers catering for individuals, small events, and gatherings of up to 50 guests across Melbourne. From handcrafted Parsi specialties to modern Indian snacks, every dish we serve celebrates flavor, care, and tradition.</p>
            <div className="grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[232px] relative shrink-0 w-[432px]" data-name="Container">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                <AboutIntro>
                  <Icon1>
                    <path d={svgPaths.pbe30300} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.pd871100} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Icon1>
                </AboutIntro>
                <Wrapper additionalClassNames="w-[131.094px]">
                  <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-[66px] not-italic text-[#6e564a] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Fresh Ingredients</p>
                </Wrapper>
              </div>
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                <AboutIntro>
                  <Icon1>
                    <path d={svgPaths.pc9b3e40} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M6 17H18" id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Icon1>
                </AboutIntro>
                <Wrapper additionalClassNames="w-full">
                  <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-[calc(50%+1px)] not-italic text-[#6e564a] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Handcrafted with Care</p>
                </Wrapper>
              </div>
              <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                <AboutIntro>
                  <Icon1>
                    <path d={svgPaths.p102df900} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Icon1>
                </AboutIntro>
                <Wrapper additionalClassNames="w-full">
                  <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-[calc(50%-0.5px)] not-italic text-[#6e564a] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Made with Love</p>
                </Wrapper>
              </div>
              <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                <AboutIntro>
                  <Icon1>
                    <path d={svgPaths.pa8d7540} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Icon1>
                </AboutIntro>
                <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[18px] text-center text-nowrap">Authentic Flavours</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="StorySection">
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[16px] shrink-0 w-[392px]" data-name="Container">
            <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
            </div>
          </div>
          <div className="bg-[#f9f7f4] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[392px]" data-name="Container">
            <div className="h-[29px] relative shrink-0 w-full" data-name="StorySection">
              <div className="absolute flex flex-col font-['Abhaya_Libre_SemiBold:Regular',sans-serif] h-[29px] justify-center leading-[0] left-0 not-italic text-[#6b8a47] text-[24px] top-[14.5px] translate-y-[-50%] w-[165px]">
                <p className="leading-[40px]">How It All Began</p>
              </div>
            </div>
            <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="StorySection" />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[14px] w-[344px]">It all started with a passion passed down from my mother. As a teenager, I helped her in the kitchen every day — learning that cooking is both art and love. Those early memories shaped everything Jess Catering stands for today.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="StorySection">
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[16px] shrink-0 w-[392px]" data-name="Container">
            <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImageWithFallback} />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImageWithFallback1} />
              </div>
            </div>
          </div>
          <div className="bg-[#f9f7f4] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[392px]" data-name="Container">
            <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] w-[344px]">Crafted with Care, Loved in Melbourne</p>
            <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="StorySection" />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[14px] w-[344px]">What began as home-cooked meals for friends grew into a full-fledged catering journey filled with laughter, aromas, and flavor. Every order we deliver still carries that personal touch — the taste of home served with professionalism.</p>
          </div>
        </div>
        <div className="bg-[#f9f7f4] content-stretch flex flex-col gap-[24px] items-center justify-center pb-[48px] pt-[24px] px-[64px] relative shrink-0 w-[440px]" data-name="SignatureCuisines">
          <div className="flex flex-col font-['Abhaya_Libre_SemiBold:Regular',sans-serif] h-[39px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b8a47] text-[28px] text-center w-[273px]">
            <p className="leading-[48px]">What We Love to Create</p>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[392px]" data-name="Container">
            <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-[rgba(255,255,255,0)] h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="SignatureCuisines">
                <div className="absolute h-[256px] left-0 top-0 w-[392px]" data-name="ImageWithFallback">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
                </div>
                <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[256px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 w-[392px]" data-name="SignatureCuisines" />
                <div className="absolute border-2 border-[#c49533] border-solid h-[256px] left-0 opacity-0 rounded-[14px] top-0 w-[392px]" data-name="Container" />
              </div>
              <Helper text="Parsi Specialties" text1="Traditional fish and meat dishes" />
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Container">
              <div className="h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
                <div className="absolute h-[256px] left-0 top-0 w-[392px]" data-name="ImageWithFallback">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
                </div>
              </div>
              <Helper text="Indian Snacks" text1="Samosas, bhajis, and more" />
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-[rgba(255,255,255,0)] h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="SignatureCuisines">
                <div className="absolute h-[256px] left-0 top-0 w-[389px]" data-name="ImageWithFallback">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center text-nowrap">
                <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px]">{`Desserts & Chocolates`}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px]">Handcrafted sweet creations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[72px] items-center justify-between left-0 pb-px pt-0 px-[24px] top-[6px] w-[440px]" data-name="Container">
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
      <div className="absolute h-[798px] left-[calc(50%-0.5px)] overflow-clip top-[78px] translate-x-[-50%] w-[393px]" data-name="AboutHero">
        <div className="absolute h-[377px] left-0 overflow-clip rounded-[16px] top-[421px] w-[393px]" data-name="Container">
          <div className="absolute h-[426.112px] left-[0.08px] top-[0.05px] w-[393.092px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col h-[426.112px] items-start left-0 opacity-0 pb-0 pt-[-21.306px] px-[-19.655px] top-0 w-[393.092px]" data-name="Container">
              <div className="h-[468.722px] relative shrink-0 w-full" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
              </div>
            </div>
            <div className="absolute h-[468.722px] left-[-19.65px] top-[-21.31px] w-[432.401px]" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
            </div>
            <div className="absolute content-stretch flex flex-col h-[426.112px] items-start left-0 opacity-0 pb-0 pt-[-21.306px] px-[-19.655px] top-0 w-[393.092px]" data-name="Container">
              <div className="h-[468.722px] relative shrink-0 w-full" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
              </div>
            </div>
          </div>
          <div className="absolute bg-gradient-to-r from-[rgba(249,247,244,0.4)] h-[426.112px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[393.092px]" data-name="Container" />
        </div>
        <div className="absolute bg-white h-[389px] left-0 top-0 w-[393px]" data-name="Container">
          <div className="absolute content-stretch flex h-[19.393px] items-start left-[2px] top-[44.09px] w-[99.166px]" data-name="Text">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#c49533] text-[16px] text-nowrap tracking-[0.8px] uppercase">Our Story</p>
          </div>
          <div className="absolute h-[119.991px] left-[2px] top-[81.99px] w-[329.1px]" data-name="Heading 1">
            <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[60px] left-0 not-italic text-[#6b8a47] text-[48px] top-[-0.99px] w-[345px]">Food Crafted from the Heart.</p>
          </div>
          <div className="absolute bg-[#c49533] h-[1.998px] left-[2px] top-[213.98px] w-[63.992px]" data-name="Container" />
          <div className="absolute h-[79px] left-[2px] top-[239px] w-[391px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.8)] top-px w-[386px]">Every dish we make carries a memory, a flavor, and a feeling — bringing warmth from our kitchen to your celebration.</p>
          </div>
          <div className="absolute bg-[#6b8a47] h-[47px] left-0 rounded-[10px] top-[342px] w-[170px]" data-name="Button">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[23px] leading-[24px] left-[24px] not-italic text-[16px] text-white top-[12px] w-[125px]">Watch Our Story</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[423px] items-start left-0 overflow-clip pb-0 pt-[16px] px-[23.995px] top-[4060px] w-[440px]" data-name="BehindTheScenes">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[15.994px] h-[380px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[40px] left-[196.01px] not-italic text-[#6b8a47] text-[28px] text-center top-[-1px] translate-x-[-50%] w-[392px]">Behind the Scenes</p>
            </div>
            <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[196.01px] not-italic text-[14px] text-[rgba(75,46,32,0.7)] text-center top-[0.01px] translate-x-[-50%] w-[392px]">A glimpse into our kitchen where passion meets perfection</p>
            </div>
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[287.997px] items-start overflow-clip relative rounded-[78px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="BehindTheScenes">
              <div className="h-[287.997px] relative shrink-0 w-full" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
              </div>
            </div>
          </div>
          <div className="h-[11px] relative shrink-0 w-[392px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 392 11">
              <g id="Frame 1686557109">
                <circle cx="177" cy="5.5" fill="var(--fill-0, #6B8A47)" id="Ellipse 1795" r="5.5" />
                <circle cx="196" cy="5.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1796" r="5.5" />
                <circle cx="215" cy="5.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1797" r="5.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#faf8f5] content-stretch flex flex-col gap-[16px] h-[1168px] items-start left-0 pb-0 pt-[40px] px-[23.995px] top-[4531px] w-[440px]" data-name="Philosophy">
        <HeadingText text="Our Philosophy" />
        <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[196.01px] not-italic text-[14px] text-[rgba(75,46,32,0.8)] text-center top-[0.01px] translate-x-[-50%] w-[392px]">{`We believe food connects people — it's love shared on a plate. Every dish we create reflects quality, authenticity, and care.`}</p>
        </div>
        <div className="h-[932px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute bg-white border border-[#6b8a47] border-solid h-[215px] left-[0.01px] rounded-[14px] top-0 w-[392px]" data-name="Container">
            <div className="absolute bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center left-1/2 pl-0 pr-[0.008px] py-0 rounded-[1.75866e+07px] size-[64px] top-[23px] translate-x-[-50%]" data-name="Philosophy">
              <Icon2>
                <path d={svgPaths.p5059600} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
                <path d={svgPaths.p1069a600} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
              </Icon2>
            </div>
            <div className="absolute flex flex-col font-['Abhaya_Libre:Regular',sans-serif] h-[22px] justify-center leading-[0] left-1/2 not-italic text-[#6b8a47] text-[20px] text-center top-[114px] translate-x-[-50%] translate-y-[-50%] w-[62px]">
              <p className="leading-[28px]">Quality</p>
            </div>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[194px] not-italic text-[14px] text-[rgba(75,46,32,0.7)] text-center top-[141.99px] translate-x-[-50%] w-[278px]">Only the freshest, finest ingredients make it to your plate.</p>
          </div>
          <div className="absolute bg-white border border-[#6b8a47] border-solid h-[215px] left-[0.01px] rounded-[14px] top-[239px] w-[392px]" data-name="Container">
            <div className="absolute flex flex-col font-['Abhaya_Libre:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#6b8a47] text-[20px] text-center top-[114px] translate-x-[-50%] translate-y-[-50%] w-[63px]">
              <p className="leading-[28px]">Passion</p>
            </div>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[14px] text-[rgba(75,46,32,0.7)] text-center top-[142px] translate-x-[-50%] w-[244px]">We cook with heart and intention in every single dish.</p>
            <div className="absolute bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center left-[163px] pl-0 pr-[0.008px] py-0 rounded-[1.75866e+07px] size-[63.992px] top-[23px]" data-name="Philosophy">
              <Icon2>
                <path d={svgPaths.p3f154840} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
              </Icon2>
            </div>
          </div>
          <div className="absolute bg-white border border-[#6b8a47] border-solid h-[215px] left-[0.01px] rounded-[14px] top-[478px] w-[392px]" data-name="Container">
            <div className="absolute flex flex-col font-['Abhaya_Libre:Regular',sans-serif] h-[22px] justify-center leading-[0] left-1/2 not-italic text-[#6b8a47] text-[20px] text-center top-[114px] translate-x-[-50%] translate-y-[-50%] w-[100px]">
              <p className="leading-[28px]">Community</p>
            </div>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[14px] text-[rgba(75,46,32,0.7)] text-center top-[142px] translate-x-[-50%] w-[250px]">Serving with pride across Melbourne, one celebration at a time.</p>
            <div className="absolute bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center left-[163px] pl-0 pr-[0.008px] py-0 rounded-[1.75866e+07px] size-[63.992px] top-[23px]" data-name="Philosophy">
              <Icon2>
                <path d={svgPaths.pee33800} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
                <path d={svgPaths.pec51e00} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
                <path d={svgPaths.p11d7cde0} id="Vector_3" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
                <path d={svgPaths.p50aab00} id="Vector_4" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
              </Icon2>
            </div>
          </div>
          <div className="absolute bg-white border border-[#6b8a47] border-solid h-[215px] left-[0.01px] rounded-[14px] top-[717px] w-[392px]" data-name="Container">
            <div className="absolute flex flex-col font-['Abhaya_Libre:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#6b8a47] text-[20px] text-center top-[114px] translate-x-[-50%] translate-y-[-50%] w-[103px]">
              <p className="leading-[28px]">Authenticity</p>
            </div>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-1/2 not-italic text-[14px] text-[rgba(75,46,32,0.7)] text-center top-[142px] translate-x-[-50%] w-[250px]">Staying true to traditional recipes and time-honored methods.</p>
            <div className="absolute bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center left-[163px] pl-0 pr-[0.008px] py-0 rounded-[1.75866e+07px] size-[63.992px] top-[23px]" data-name="Philosophy">
              <Icon2>
                <path d={svgPaths.p769d00} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
                <path d={svgPaths.p3fa68b40} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66634" />
              </Icon2>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[40px] h-[772px] items-start left-0 pb-0 pt-[40px] px-[23.995px] top-[5735px] w-[440px]" data-name="Timeline">
        <HeadingText text="Our Journey" />
        <div className="content-stretch flex flex-col gap-[16px] h-[624px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex gap-[23.995px] h-[151.979px] items-start relative shrink-0 w-full" data-name="Container">
            <Timeline>
              <Wrapper1>
                <Icon3>
                  <path d="M7.99833 1.99958V5.99958" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d="M15.9967 1.99958V5.99958" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d={svgPaths.p4f65400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d="M2.99937 9.99791H20.9956" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                </Icon3>
              </Wrapper1>
              <div className="bg-[#d5b36b] h-[95.988px] shrink-0 w-[1.998px]" data-name="Container" />
            </Timeline>
            <Timeline1>
              <ContainerText text="2010" />
              <HeadingText1 text="The Beginning" />
              <div className="h-[48.006px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.7)] top-[-0.9px] w-[234px]">First catering order for a family gathering</p>
              </div>
            </Timeline1>
          </div>
          <div className="content-stretch flex gap-[23.995px] h-[151.979px] items-start relative shrink-0 w-full" data-name="Container">
            <Timeline>
              <Wrapper1>
                <Icon3>
                  <path d={svgPaths.p3051d800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d="M19.9958 2.99937V6.99937" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d="M21.9962 4.99896H17.9962" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d="M3.99917 16.9965V18.9965" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d="M4.99937 17.9962H2.99937" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                </Icon3>
              </Wrapper1>
              <div className="bg-[#d5b36b] h-[95.988px] shrink-0 w-[1.998px]" data-name="Container" />
            </Timeline>
            <Timeline1>
              <ContainerText text="2015" />
              <HeadingText1 text="Sweet Expansion" />
              <div className="h-[48.006px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.7)] top-[-0.9px] w-[265px]">Introduced handcrafted chocolates to the menu</p>
              </div>
            </Timeline1>
          </div>
          <div className="content-stretch flex gap-[23.995px] h-[151.979px] items-start relative shrink-0 w-full" data-name="Container">
            <Timeline>
              <Wrapper1>
                <Icon3>
                  <path d={svgPaths.p267489a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                  <path d={svgPaths.p237812b0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
                </Icon3>
              </Wrapper1>
              <div className="bg-[#d5b36b] h-[95.988px] shrink-0 w-[1.998px]" data-name="Container" />
            </Timeline>
            <Timeline1>
              <ContainerText text="2020" />
              <HeadingText1 text="Full Service" />
              <div className="h-[48.006px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.7)] top-[-0.9px] w-[266px]">Expanded to full-service events for up to 50 guests</p>
              </div>
            </Timeline1>
          </div>
          <div className="content-stretch flex gap-[23.995px] h-[151.979px] items-start relative shrink-0 w-full" data-name="Container">
            <Wrapper1>
              <Icon3>
                <path d={svgPaths.p73f3df0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99958" />
              </Icon3>
            </Wrapper1>
            <Timeline1>
              <ContainerText text="2024" />
              <HeadingText1 text="Modern Touch" />
              <div className="h-[48.006px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.7)] top-[-0.9px] w-[226px]">{`Digital transformation & brand refresh`}</p>
              </div>
            </Timeline1>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col gap-[32px] h-[596px] items-start left-px pb-0 pt-[48px] px-[23.995px] top-[6543px] w-[439px]" data-name="Testimonials">
        <HeadingText text="What Our Clients Say" />
        <div className="content-stretch flex flex-col gap-[31.996px] h-[413px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="h-[373px] relative shrink-0 w-full" data-name="Testimonials">
            <div className="absolute bg-white h-[429.953px] left-[-100px] opacity-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[345.102px]" data-name="Container">
              <Icon additionalClassNames="left-[148.55px]" />
              <div className="absolute h-[194.974px] left-[32px] top-[103.99px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[32.5px] left-[140.7px] not-italic text-[#4b2e20] text-[20px] text-center top-[0.67px] translate-x-[-50%] w-[278px]">{`"Jess Catering transformed our wedding reception into a culinary masterpiece. The Parsi specialties were absolutely divine, and our guests are still talking about those handcrafted chocolates!"`}</p>
              </div>
              <div className="absolute bg-[#d5b36b] h-[1.998px] left-[140.55px] top-[322.96px] w-[63.992px]" data-name="Container" />
              <div className="absolute h-[24.003px] left-[32px] top-[348.95px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[140.49px] not-italic text-[#6b8a47] text-[16px] text-center text-nowrap top-[-0.9px] translate-x-[-50%]">{`Sarah & Michael`}</p>
              </div>
              <div className="absolute h-[21.006px] left-[32px] top-[376.95px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[141.02px] not-italic text-[14px] text-[rgba(75,46,32,0.6)] text-center text-nowrap top-[0.1px] tracking-[0.7px] translate-x-[-50%] uppercase">Wedding Reception</p>
              </div>
            </div>
            <div className="absolute bg-white h-[429.953px] left-[-100px] opacity-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[345.102px]" data-name="Container">
              <Icon additionalClassNames="left-[148.55px]" />
              <div className="absolute h-[194.974px] left-[32px] top-[103.99px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[32.5px] left-[140.91px] not-italic text-[#4b2e20] text-[20px] text-center top-[0.67px] translate-x-[-50%] w-[268px]">{`"We've used Jess Catering for three corporate events now, and each time the quality and presentation exceed expectations. The attention to detail and authentic flavors make all the difference."`}</p>
              </div>
              <div className="absolute bg-[#d5b36b] h-[1.998px] left-[140.55px] top-[322.96px] w-[63.992px]" data-name="Container" />
              <div className="absolute h-[24.003px] left-[32px] top-[348.95px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[140.39px] not-italic text-[#6b8a47] text-[16px] text-center text-nowrap top-[-0.9px] translate-x-[-50%]">James Chen</p>
              </div>
              <div className="absolute h-[21.006px] left-[32px] top-[376.95px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[141.04px] not-italic text-[14px] text-[rgba(75,46,32,0.6)] text-center text-nowrap top-[0.1px] tracking-[0.7px] translate-x-[-50%] uppercase">Corporate Event</p>
              </div>
            </div>
            <div className="absolute bg-white h-[429.953px] left-[-100px] opacity-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[345.102px]" data-name="Container">
              <Icon additionalClassNames="left-[148.55px]" />
              <div className="absolute h-[194.974px] left-[32px] top-[103.99px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[32.5px] left-[140.96px] not-italic text-[#4b2e20] text-[20px] text-center top-[0.67px] translate-x-[-50%] w-[264px]">{`"The samosas and dhokla brought back memories of my childhood. It's rare to find such authentic, home-style cooking with this level of professionalism. Absolutely recommend!"`}</p>
              </div>
              <div className="absolute bg-[#d5b36b] h-[1.998px] left-[140.55px] top-[322.96px] w-[63.992px]" data-name="Container" />
              <div className="absolute h-[24.003px] left-[32px] top-[348.95px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[140.23px] not-italic text-[#6b8a47] text-[16px] text-center text-nowrap top-[-0.9px] translate-x-[-50%]">Priya Sharma</p>
              </div>
              <div className="absolute h-[21.006px] left-[32px] top-[376.95px] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[140.87px] not-italic text-[14px] text-[rgba(75,46,32,0.6)] text-center text-nowrap top-[0.1px] tracking-[0.7px] translate-x-[-50%] uppercase">Family Gathering</p>
              </div>
            </div>
            <div className="absolute bg-white h-[372px] left-[0.01px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[391px]" data-name="Container">
              <Icon additionalClassNames="left-[calc(50%+0.5px)] translate-x-[-50%]" />
              <div className="absolute h-[138px] left-[calc(50%-0.5px)] top-[104px] translate-x-[-50%] w-[316px]" data-name="Paragraph">
                <p className="absolute font-['Abhaya_Libre:Regular',sans-serif] leading-[28px] left-1/2 not-italic text-[#4b2e20] text-[20px] text-center top-px translate-x-[-50%] w-[316px]">{`"From the first consultation to the final dessert, Jess made our anniversary celebration truly special. Every dish was crafted with care and tasted like it came from a loved one's kitchen."`}</p>
              </div>
              <div className="absolute bg-[#d5b36b] h-[1.998px] left-[calc(50%+0.5px)] top-[267.96px] translate-x-[-50%] w-[63.992px]" data-name="Container" />
              <div className="absolute h-[24.003px] left-[calc(50%+0.05px)] top-[293.95px] translate-x-[-50%] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[140.95px] not-italic text-[#6b8a47] text-[16px] text-center text-nowrap top-[-0.9px] translate-x-[-50%]">{`Robert & Emma`}</p>
              </div>
              <div className="absolute h-[21.006px] left-[calc(50%+0.05px)] top-[321.95px] translate-x-[-50%] w-[281.11px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[140.88px] not-italic text-[14px] text-[rgba(75,46,32,0.6)] text-center text-nowrap top-[0.1px] tracking-[0.7px] translate-x-[-50%] uppercase">Anniversary Dinner</p>
              </div>
            </div>
          </div>
          <div className="h-[7.993px] relative shrink-0 w-full" data-name="Testimonials">
            <div className="absolute h-[7.993px] left-[calc(50%+0.47px)] top-0 translate-x-[-50%] w-[95.939px]">
              <div className="absolute bg-[rgba(107,138,71,0.3)] left-0 rounded-[1.75866e+07px] size-[7.993px] top-0" data-name="Button" />
              <div className="absolute bg-[rgba(107,138,71,0.3)] left-[15.99px] rounded-[1.75866e+07px] size-[7.993px] top-0" data-name="Button" />
              <div className="absolute bg-[rgba(107,138,71,0.3)] left-[31.97px] rounded-[1.75866e+07px] size-[7.993px] top-0" data-name="Button" />
              <div className="absolute bg-[#6b8a47] h-[7.993px] left-[47.96px] rounded-[1.75866e+07px] top-0 w-[31.996px]" data-name="Button" />
              <div className="absolute bg-[rgba(107,138,71,0.3)] left-[87.95px] rounded-[1.75866e+07px] size-[7.993px] top-0" data-name="Button" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[224px] left-0 overflow-clip top-[7202px] w-[440px]" data-name="Container">
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
      <div className="absolute bg-[#f5f3f0] content-stretch flex flex-col h-[818px] items-start left-0 pb-0 pt-[1.572px] px-0 top-[7482px]" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#d5b36b] border-[1.572px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[31.996px] h-[816.477px] items-start pb-0 pl-[24px] pr-[23.995px] pt-[47.998px] relative shrink-0 w-[440px]" data-name="Container">
          <div className="h-[607.958px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-0 w-[345.102px]" data-name="Container">
              <HeadingText2 text="About" />
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
              <HeadingText2 text="Menu" />
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
              <HeadingText2 text="Chocolates" />
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
              <HeadingText2 text="Contact Info" />
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
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[194px] not-italic text-[16px] text-[rgba(75,46,32,0.6)] text-center top-[-1.04px] translate-x-[-50%] w-[368px]">© Jess Catering Services · Made with ❤️ in Melbourne</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}