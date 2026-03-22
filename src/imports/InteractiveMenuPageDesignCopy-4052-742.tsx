import svgPaths from "./svg-1prfr1p1z5";
import clsx from "clsx";
import imgImage17 from "figma:asset/9b9a4edf7c8601ed956cfe7bef6b37a49cfa92de.png";
import imgImageWithFallback from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";
import imgImageWithFallback1 from "figma:asset/ecaeb2387c249616c77b273d85d16cd7b69f71ad.png";
import imgImageWithFallback2 from "figma:asset/4179209616a8b397c059b945f301f6290769ccc4.png";
import imgImageWithFallback3 from "figma:asset/89df004593ab1004ad95a12d506a7351a5eafc5e.png";
import imgImageWithFallback4 from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";
import imgImageWithFallback5 from "figma:asset/7dc0d6c2835088eea91239387b103e7260dca829.png";
import imgImageWithFallback6 from "figma:asset/35b29a957dc8fcdefb693de6bf192f9e9ba11f04.png";
import imgImageWithFallback7 from "figma:asset/23dab75c5b47c133865cf83bcc26afbb8c3b920d.png";
import imgImageWithFallback8 from "figma:asset/d656888c2ea17addca26ab25f9d6a943faa00362.png";
type AboutIntro1Props = {
  additionalClassNames?: string;
};

function AboutIntro1({ children, additionalClassNames = "" }: React.PropsWithChildren<AboutIntro1Props>) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function AboutIntro({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-[64px]">
      <div aria-hidden="true" className="absolute border-2 border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">{children}</div>
    </div>
  );
}

function Icon2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f9f7f4] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center p-[64px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
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
    <div className={clsx("absolute content-stretch flex h-[20.5px] items-start left-0 pb-px pt-0 px-0 top-[2.5px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(75,46,32,0.7)] text-nowrap">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] text-nowrap top-0">{text}</p>
    </div>
  );
}
type Icon1Props = {
  additionalClassNames?: string;
};

function Icon1({ additionalClassNames = "" }: Icon1Props) {
  return (
    <div className={clsx("size-[48px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p2836b900} id="Vector" stroke="var(--stroke-0, #C49533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p2347a280} id="Vector_2" stroke="var(--stroke-0, #C49533)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px] w-full">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px] w-full">{text1}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center text-nowrap">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px]">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px]">{text1}</p>
    </div>
  );
}

function Icon() {
  return (
    <Wrapper>
      <path d={svgPaths.p18d31c00} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
    </Wrapper>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-[#6b8a47] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">{text}</p>
    </div>
  );
}

function Button() {
  return <div className="bg-[rgba(107,138,71,0.3)] rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Button" />;
}

export default function InteractiveMenuPageDesignCopy() {
  return (
    <div className="relative size-full" data-name="Interactive Menu Page Design (Copy)">
      <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col h-[5873px] items-start left-0 top-0 w-[1359px]" data-name="About">
        <div className="bg-white content-stretch flex flex-col h-[73px] items-start pb-px pt-0 px-[39.5px] relative shrink-0 w-[1359px]" data-name="Navigation">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(107,138,71,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
                <div className="h-[56px] relative shrink-0 w-[83px]" data-name="image 17">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
                </div>
                <div className="relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[16px] text-nowrap">Menu</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[16px] text-nowrap">Catering Order</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[16px] text-nowrap">Chocolates Order</p>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#6b8a47] text-[16px] text-nowrap">About Us</p>
                    <Text text="Contact Us" additionalClassNames="px-[24px] py-[8px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[5873px] items-start relative shrink-0 w-full">
          <div className="bg-white content-stretch flex gap-[78px] items-center p-[64px] relative shrink-0">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[504px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#c49533] text-[16px] tracking-[0.8px] uppercase w-full">Our Story</p>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[64px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] w-[441px]">Food Crafted from the Heart</p>
                <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="Container" />
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#6e564a] text-[20px] w-[504px]">Every dish we make carries a memory, a flavor, and a feeling — bringing warmth from our kitchen to your celebration.</p>
                <Text text="Watch Our Story" additionalClassNames="px-[28px] py-[16px]" />
              </div>
            </div>
            <div className="h-[652px] relative rounded-[16px] shrink-0 w-[649px]" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback} />
            </div>
          </div>
          <div className="bg-[#f9f7f4] relative shrink-0 w-full" data-name="AboutIntro">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[36px] items-center p-[64px] relative w-full">
                <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center text-nowrap">Welcome to Jess Catering Services</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#6e564a] text-[20px] text-center w-[1083px]">We is dedicated to providing you with yummy food that feels home-cooked. Jess Catering offers catering for individuals, small events, and gatherings of up to 50 guests across Melbourne. From handcrafted Parsi specialties to modern Indian snacks, every dish we serve celebrates flavor, care, and tradition.</p>
                <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[100px] relative shrink-0 w-[896px]" data-name="Container">
                  <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                    <AboutIntro>
                      <Wrapper>
                        <path d={svgPaths.p67c6a00} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={svgPaths.p32206a80} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </Wrapper>
                    </AboutIntro>
                    <AboutIntro1 additionalClassNames="w-[131.094px]">
                      <p className="absolute font-['F37_Caslon:SemiBold_Display',sans-serif] leading-[24px] left-[66px] not-italic text-[#6e564a] text-[20px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Fresh Ingredients</p>
                    </AboutIntro1>
                  </div>
                  <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                    <AboutIntro>
                      <Wrapper>
                        <path d={svgPaths.p293d3830} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d="M8 22.6667H24" id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </Wrapper>
                    </AboutIntro>
                    <AboutIntro1 additionalClassNames="w-full">
                      <p className="absolute font-['F37_Caslon:SemiBold_Display',sans-serif] leading-[24px] left-[calc(50%+0.5px)] not-italic text-[#6e564a] text-[20px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Handcrafted with Care</p>
                    </AboutIntro1>
                  </div>
                  <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                    <AboutIntro>
                      <Icon />
                    </AboutIntro>
                    <AboutIntro1 additionalClassNames="w-full">
                      <p className="absolute font-['F37_Caslon:SemiBold_Display',sans-serif] leading-[24px] left-1/2 not-italic text-[#6e564a] text-[20px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Made with Love</p>
                    </AboutIntro1>
                  </div>
                  <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[12px] items-center place-self-stretch relative shrink-0" data-name="Container">
                    <AboutIntro>
                      <Wrapper>
                        <path d={svgPaths.p3b200a00} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </Wrapper>
                    </AboutIntro>
                    <p className="font-['F37_Caslon:SemiBold_Display',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[20px] text-center text-nowrap">Authentic Flavours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="AboutStory">
            <div className="content-stretch flex flex-col gap-[64px] items-start p-[64px] relative w-full">
              <div className="h-[500px] relative shrink-0 w-full" data-name="StorySection">
                <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[500px] items-start left-0 overflow-clip rounded-[16px] top-0 w-[592px]" data-name="Container">
                  <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
                  </div>
                </div>
                <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col gap-[20px] items-start left-[640px] p-[48px] rounded-[16px] top-[87.88px] w-[592px]" data-name="Container">
                  <div className="h-[40px] relative shrink-0 w-full" data-name="StorySection">
                    <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[40px] left-0 not-italic text-[#6b8a47] text-[36px] text-nowrap top-[-0.5px]">How It All Began</p>
                  </div>
                  <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="StorySection" />
                  <div className="h-[146.25px] relative shrink-0 w-full" data-name="StorySection">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#6e564a] text-[18px] top-[0.5px] w-[491px]">It all started with a passion passed down from my mother. As a teenager, I helped her in the kitchen every day — learning that cooking is both art and love. Those early memories shaped everything Jess Catering stands for today.</p>
                  </div>
                </div>
              </div>
              <div className="h-[500px] relative shrink-0 w-full" data-name="StorySection">
                <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[500px] items-start left-[640px] overflow-clip rounded-[16px] top-0 w-[592px]" data-name="Container">
                  <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
                  </div>
                </div>
                <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col gap-[20px] h-[364.25px] items-start left-0 p-[48px] rounded-[16px] top-[67.88px] w-[592px]" data-name="Container">
                  <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#6b8a47] text-[36px] w-[383px]">Crafted with Care, Loved in Melbourne</p>
                  <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="StorySection" />
                  <div className="h-[146.25px] relative shrink-0 w-full" data-name="StorySection">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#6e564a] text-[18px] top-[0.5px] w-[494px]">What began as home-cooked meals for friends grew into a full-fledged catering journey filled with laughter, aromas, and flavor. Every order we deliver still carries that personal touch — the taste of home served with professionalism.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Wrapper1>
            <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center text-nowrap">What We Love to Create</p>
            <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[339px] relative shrink-0 w-full" data-name="Container">
              <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
                <div className="bg-[rgba(255,255,255,0)] h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="SignatureCuisines">
                  <div className="absolute h-[256px] left-0 top-0 w-[296px]" data-name="Container">
                    <div className="absolute h-[256px] left-0 top-0 w-[389px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
                    </div>
                    <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[256px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 w-[389px]" data-name="SignatureCuisines" />
                  </div>
                  <div className="absolute border-2 border-[#c49533] border-solid h-[256px] left-0 opacity-0 rounded-[14px] top-0 w-[389px]" data-name="Container" />
                </div>
                <Helper text="Parsi Specialties" text1="Traditional fish and meat dishes" />
              </div>
              <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
                <div className="h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
                  <div className="absolute h-[256px] left-0 top-0 w-[389px]" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
                  </div>
                </div>
                <Helper text="Indian Snacks" text1="Samosas, bhajis, and more" />
              </div>
              <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Container">
                <div className="bg-[rgba(255,255,255,0)] h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="SignatureCuisines">
                  <div className="absolute h-[256px] left-0 top-0 w-[389px]" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center text-nowrap">
                  <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px]">{`Desserts & Chocolates`}</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px]">Handcrafted sweet creations</p>
                </div>
              </div>
            </div>
          </Wrapper1>
          <div className="bg-white relative shrink-0 w-full" data-name="BehindTheScenes">
            <div className="content-stretch flex flex-col items-start p-[64px] relative w-full">
              <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center text-nowrap">
                  <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#6b8a47] text-[52px]">Behind the Scenes</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#6e564a] text-[18px]">A glimpse into our kitchen where passion meets perfection</p>
                </div>
                <div className="h-[320px] overflow-x-auto overflow-y-clip relative shrink-0 w-[1359px]">
                  <div className="absolute content-stretch flex gap-[32px] items-center left-[calc(50%+200px)] top-0 translate-x-[-50%]">
                    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[415.992px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback6} />
                    </div>
                    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback7} />
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] h-[320px] overflow-clip relative rounded-[96px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[389px]" data-name="Container">
                      <div className="absolute h-[320px] left-0 top-0 w-[415.992px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                      </div>
                      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] h-[320px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 w-[415.992px]" data-name="BehindTheScenes" />
                    </div>
                    <div className="bg-[rgba(255,255,255,0)] h-[320px] overflow-clip relative rounded-[96px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[389px]" data-name="CarouselItem">
                      <div className="absolute h-[320px] left-0 top-0 w-[415.992px]" data-name="ImageWithFallback">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
                      </div>
                      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] h-[320px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 w-[415.992px]" data-name="BehindTheScenes" />
                    </div>
                    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback8} />
                    </div>
                    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback1} />
                    </div>
                    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback5} />
                    </div>
                    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f9f7f4] relative shrink-0 w-full" data-name="Philosophy">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[40px] py-[64px] relative w-full">
                <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0">
                  <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center text-nowrap">Our Philosophy</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(75,46,32,0.8)] text-center w-[731px]">{`We believe food connects people — it's love shared on a plate. Every dish we create reflects quality, authenticity, and care.`}</p>
                  <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[264px] relative shrink-0 w-[1280px]" data-name="Container">
                    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[18px] items-center p-[32px] relative rounded-[14px] self-start shrink-0 w-[296px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      <div className="bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Philosophy">
                        <Wrapper>
                          <path d={svgPaths.p3f183440} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          <path d={svgPaths.p3fb33600} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        </Wrapper>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center">
                        <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px] text-nowrap">Quality</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564b] text-[16px] w-[201px]">Only the freshest, finest ingredients make it to your plate</p>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_2] bg-white content-stretch flex flex-col gap-[18px] items-center p-[32px] relative rounded-[14px] self-start shrink-0 w-[296px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      <div className="bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Philosophy">
                        <Icon />
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center">
                        <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px] text-nowrap">Passion</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal h-[78px] leading-[26px] relative shrink-0 text-[#6e564b] text-[16px] w-[209px]">We cook with heart and intention in every single dish</p>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_3] bg-white content-stretch flex flex-col gap-[18px] items-center p-[32px] relative rounded-[14px] self-start shrink-0 w-[296px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      <div className="bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Philosophy">
                        <Wrapper>
                          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          <path d={svgPaths.p2ee517c0} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          <path d={svgPaths.p16bbf900} id="Vector_3" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          <path d={svgPaths.p2e7ac880} id="Vector_4" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        </Wrapper>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center">
                        <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px] text-nowrap">Community</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564b] text-[16px] w-[227px]">Serving with pride across Melbourne, one celebration at a time</p>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_4] bg-white content-stretch flex flex-col gap-[18px] items-center p-[32px] relative rounded-[14px] self-start shrink-0 w-[296px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      <div className="bg-[rgba(107,138,71,0.1)] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Philosophy">
                        <Wrapper>
                          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                          <path d={svgPaths.pde53700} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        </Wrapper>
                      </div>
                      <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center">
                        <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px] text-nowrap">Authenticity</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#6e564b] text-[16px] w-[196px]">Staying true to traditional recipes and time-honored methods</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Timeline">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[64px] items-center justify-center px-[64px] py-[48px] relative w-full">
                <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center text-nowrap">Our Journey</p>
                <div className="h-[216px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex gap-[94px] items-start left-0 top-0 w-[1231px]" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[18px] items-center px-[31px] py-0 relative shrink-0 w-[237px]" data-name="Container">
                      <div className="bg-[#6b8a47] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Timeline">
                        <Icon2>
                          <path d="M9.33333 2.33333V7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M18.6667 2.33333V7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p57f3600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M3.5 11.6667H24.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </Icon2>
                      </div>
                      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#c49533] text-[24px] text-center w-[min-content]">2010</p>
                      <Helper1 text="The Beginning" text1="First catering order for a family gathering" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[18px] items-center px-[5px] py-0 relative shrink-0 w-[237px]" data-name="Container">
                      <div className="bg-[#6b8a47] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Timeline">
                        <Icon2>
                          <path d={svgPaths.p34441480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M23.3333 3.5V8.16667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M25.6667 5.83333H21" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M4.66667 19.8333V22.1667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d="M5.83333 21H3.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </Icon2>
                      </div>
                      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#c49533] text-[24px] text-center w-[min-content]">2015</p>
                      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center not-italic relative shrink-0 text-center w-full">
                        <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] min-w-full relative shrink-0 text-[#6b8a47] text-[24px] w-[min-content]">Sweet Expansion</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px] w-[234px]">Introduced handcrafted chocolates to the menu</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[18px] items-center px-[3px] py-0 relative shrink-0 w-[237px]" data-name="Container">
                      <div className="bg-[#6b8a47] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Timeline">
                        <Icon2>
                          <path d={svgPaths.p3997a780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                          <path d={svgPaths.p275e0300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </Icon2>
                      </div>
                      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#c49533] text-[24px] text-center w-[min-content]">2020</p>
                      <Helper1 text="Full Service" text1="Expanded to full-service events for up to 50 guests" />
                      <div className="absolute bg-[#c49533] h-px left-[-172px] top-[99px] w-[250px]" data-name="Container" />
                      <div className="absolute bg-[#c49533] h-px left-[163px] top-[100px] w-[250px]" data-name="Container" />
                    </div>
                    <div className="content-stretch flex flex-col gap-[18px] items-center px-[5px] py-0 relative shrink-0 w-[237px]" data-name="Container">
                      <div className="bg-[#6b8a47] content-stretch flex items-center justify-center relative rounded-[1.67772e+07px] shrink-0 size-[64px]" data-name="Timeline">
                        <Icon2>
                          <path d={svgPaths.pd736200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
                        </Icon2>
                      </div>
                      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#c49533] text-[24px] text-center w-[min-content]">2024</p>
                      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center w-full">
                        <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px] w-full">Modern Touch</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px] w-full">{`Digital transformation & brand refresh`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#c49533] h-px left-[158px] top-[99px] w-[250px]" data-name="Container" />
                </div>
              </div>
            </div>
          </div>
          <Wrapper1>
            <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center text-nowrap">What Our Clients Say</p>
            <div className="content-stretch flex flex-col gap-[32px] h-[350px] items-center justify-center relative shrink-0 w-full" data-name="Container">
              <div className="h-[310px] relative shrink-0 w-full" data-name="Testimonials">
                <div className="absolute bg-white h-[345px] left-[-100px] opacity-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-8px] w-[1024px]" data-name="Container">
                  <Icon1 additionalClassNames="absolute left-[488px] top-[48px]" />
                  <div className="absolute h-[78px] left-[48px] top-[120px] w-[928px]" data-name="Paragraph">
                    <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[39px] left-[464.45px] not-italic text-[#4b2e20] text-[24px] text-center top-[-0.5px] translate-x-[-50%] w-[914px]">{`"Jess Catering transformed our wedding reception into a culinary masterpiece. The Parsi specialties were absolutely divine, and our guests are still talking about those handcrafted chocolates!"`}</p>
                  </div>
                  <div className="absolute bg-[#c49533] h-[2px] left-[480px] top-[222px] w-[64px]" data-name="Container" />
                  <div className="absolute h-[24px] left-[48px] top-[248px] w-[928px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[463.93px] not-italic text-[#6b8a47] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">{`Sarah & Michael`}</p>
                  </div>
                  <div className="absolute h-[21px] left-[48px] top-[276px] w-[928px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[464.46px] not-italic text-[14px] text-[rgba(75,46,32,0.6)] text-center text-nowrap top-0 tracking-[0.7px] translate-x-[-50%] uppercase">Wedding Reception</p>
                  </div>
                </div>
                <div className="absolute bg-white h-[345px] left-[-100px] opacity-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-8px] w-[1024px]" data-name="Container">
                  <Icon1 additionalClassNames="absolute left-[488px] top-[48px]" />
                  <div className="absolute h-[78px] left-[48px] top-[120px] w-[928px]" data-name="Paragraph">
                    <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[39px] left-[464.48px] not-italic text-[#4b2e20] text-[24px] text-center top-[-0.5px] translate-x-[-50%] w-[885px]">{`"We've used Jess Catering for three corporate events now, and each time the quality and presentation exceed expectations. The attention to detail and authentic flavors make all the difference."`}</p>
                  </div>
                  <div className="absolute bg-[#c49533] h-[2px] left-[480px] top-[222px] w-[64px]" data-name="Container" />
                  <div className="absolute h-[24px] left-[48px] top-[248px] w-[928px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[463.83px] not-italic text-[#6b8a47] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">James Chen</p>
                  </div>
                  <div className="absolute h-[21px] left-[48px] top-[276px] w-[928px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[464.48px] not-italic text-[14px] text-[rgba(75,46,32,0.6)] text-center text-nowrap top-0 tracking-[0.7px] translate-x-[-50%] uppercase">Corporate Event</p>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col gap-[21px] items-center left-[calc(50%+0.5px)] px-[48px] py-[36px] rounded-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1024px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <Icon1 additionalClassNames="relative shrink-0" />
                  <p className="font-['F37_Caslon:Regular_Display',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#6e564a] text-[24px] text-center w-[919px]">{`"The samosas and dhokla brought back memories of my childhood. It's rare to find such authentic, home-style cooking with this level of professionalism. Absolutely recommend!"`}</p>
                  <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="Container" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[463.67px] not-italic text-[#6b8a47] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Priya Sharma</p>
                    </div>
                    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[464.31px] not-italic text-[14px] text-[rgba(75,46,32,0.6)] text-center text-nowrap top-0 tracking-[0.7px] translate-x-[-50%] uppercase">Family Gathering</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] h-[8px] items-center justify-center relative shrink-0 w-full" data-name="Testimonials">
                <Button />
                <Button />
                <div className="bg-[#6b8a47] h-[8px] rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Button" />
                <Button />
                <Button />
              </div>
            </div>
          </Wrapper1>
          <div className="bg-white relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[896px]" data-name="CTASection">
                  <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center w-[747px]">Ready to host your next event or gift our handmade chocolates?</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#6e564b] text-[20px] text-center text-nowrap">{`Let's create something memorable together.`}</p>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#6b8a47] relative rounded-[10px] shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[28px] py-[16px] relative">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Contact Us</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f9f7f4] h-[329px] relative shrink-0 w-full" data-name="Footer">
            <div aria-hidden="true" className="absolute border-[#c49533] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start pb-0 pt-[2px] px-[39.5px] relative size-full">
              <div className="h-[239px] relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex gap-[52px] items-start pb-0 pl-[46px] pr-[24px] pt-[48px] relative size-full">
                  <div className="content-stretch flex flex-col h-[138px] items-center relative shrink-0 w-[265px]" data-name="24px">
                    <div className="h-[138px] relative shrink-0 w-[206px]" data-name="image 17">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
                    </div>
                  </div>
                  <div className="h-[137px] relative shrink-0 w-0">
                    <div className="absolute inset-[-0.73%_-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 139">
                        <path d="M1 1V138" id="Vector 7186" stroke="var(--stroke-0, #E8E4DF)" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] h-[132px] items-start relative shrink-0 w-[144px]" data-name="Container">
                    <HeadingText text="About" />
                    <div className="content-stretch flex flex-col gap-[8px] h-[89.5px] items-start relative shrink-0 w-full" data-name="List">
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Our Story" additionalClassNames="w-[72.422px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Our Values" additionalClassNames="w-[82.539px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Sustainability" additionalClassNames="w-[100.742px]" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] h-[132px] items-start relative shrink-0 w-[144px]" data-name="Container">
                    <HeadingText text="Menu" />
                    <div className="content-stretch flex flex-col gap-[8px] h-[89.5px] items-start relative shrink-0 w-full" data-name="List">
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Parsi Specialties" additionalClassNames="w-[72.422px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Indian Snacks" additionalClassNames="w-[82.539px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Catering Menu" additionalClassNames="w-[100.742px]" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] h-[132px] items-start relative shrink-0 w-[144px]" data-name="Container">
                    <HeadingText text="Chocolates" />
                    <div className="content-stretch flex flex-col gap-[8px] h-[89.5px] items-start relative shrink-0 w-full" data-name="List">
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Collections" additionalClassNames="w-[72.422px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Gift Boxes" additionalClassNames="w-[82.539px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Custom Orders" additionalClassNames="w-[100.742px]" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] h-[132px] items-start relative shrink-0 w-[144px]" data-name="Container">
                    <HeadingText text="Contact Info" />
                    <div className="content-stretch flex flex-col gap-[8px] h-[89.5px] items-start relative shrink-0 w-full" data-name="List">
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="Melbourne, VIC" additionalClassNames="w-[72.422px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="hello@jesscatering.com" additionalClassNames="w-[82.539px]" />
                      </div>
                      <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
                        <LinkText text="+61 412 345 678" additionalClassNames="w-[100.742px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[57px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(75,46,32,0.1)] border-solid inset-0 pointer-events-none" />
                <div className="font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#7f6b60]" data-name="Footer Content">
                  <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] leading-[30px] ml-0 mt-0 not-italic relative text-[16px] w-[295.302px]">Copyright © 2025 Jess Catering</p>
                  <p className="[grid-area:1_/_1] font-['DM_Sans:Regular',sans-serif] font-['Inter:Regular',sans-serif] leading-[30px] ml-[1279.5px] mt-0 not-italic relative text-[0px] text-[16px] text-right translate-x-[-100%] w-[505.481px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <span>{`All Rights Reserved | `}</span>
                    <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#6b8a47] underline">Terms and Conditions</span>
                    <span>{` | `}</span>
                    <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#6b8a47] underline">Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}