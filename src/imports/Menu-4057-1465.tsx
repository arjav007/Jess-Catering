import svgPaths from "./svg-p0dhjv6860";
import clsx from "clsx";
import imgImage17 from "figma:asset/9b9a4edf7c8601ed956cfe7bef6b37a49cfa92de.png";
import imgImageWithFallback from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";
import imgImageWithFallback1 from "figma:asset/809412d2a82f3b98cbc6ca6930f0a6251ec21032.png";
import imgImageWithFallback2 from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";
import imgImageWithFallback3 from "figma:asset/05555e67db5820a2b2acddcd6dfd96e095a49d9c.png";
import imgImageWithFallback4 from "figma:asset/8fa9984f236b1f51c733311bf81fe4b983331ad3.png";
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
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("bg-white h-[48px] relative rounded-[1.67772e+07px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[26px] not-italic text-[#6e564a] text-[16px] text-nowrap top-[calc(50%-12px)]">{text}</p>
    </div>
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

export default function Menu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Menu">
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
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#6b8a47] text-[16px] text-nowrap">Menu</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[16px] text-nowrap">Catering Order</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[16px] text-nowrap">Chocolates Order</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6e564a] text-[16px] text-nowrap">About Us</p>
                  <Text text="Contact Us" additionalClassNames="px-[24px] py-[8px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f7f4] content-stretch flex gap-[78px] items-center p-[64px] relative shrink-0">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[504px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#c49533] text-[16px] tracking-[0.8px] uppercase w-full">Our MENU</p>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[64px] min-w-full not-italic relative shrink-0 text-[#6b8a47] text-[52px] w-[min-content]">Crafted with Care, Inspired by Tradition.</p>
            <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="Container" />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#6e564a] text-[20px] w-[504px]">From soulful Parsi specialties to beloved Indian snacks, every dish from Jess Catering celebrates home-style flavor with elegance. Our handcrafted chocolates bring the perfect sweet finish to every celebration.</p>
            <Text text="Explore Menu" additionalClassNames="px-[28px] py-[16px]" />
          </div>
        </div>
        <div className="h-[652px] relative rounded-[16px] shrink-0 w-[649px]" data-name="ImageWithFallback">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback} />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback1} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] items-start pl-[64px] pr-0 py-[36px] relative shrink-0 w-[1350px]">
        <div className="bg-[#6b8a47] h-[48px] relative rounded-[1.67772e+07px] shrink-0 w-[66px]" data-name="Button">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[calc(50%-12px)]">All</p>
        </div>
        <ButtonText text="Parsi Specialties" additionalClassNames="w-[175.914px]" />
        <ButtonText text="Indian Snacks" additionalClassNames="w-[156.797px]" />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[48px] items-start pb-[64px] pt-0 px-0 relative shrink-0 w-full">
        {[...Array(3).keys()].map((_, i) => (
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[32px] items-center px-[64px] py-0 relative w-full">
                {[...Array(3).keys()].map((_, i) => (
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="h-[288px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="ImageWithFallback">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[14px] size-full" src={imgImageWithFallback2} />
                      <div className="absolute content-stretch flex gap-[8px] h-[8px] items-start left-[calc(50%+0.5px)] top-[263px] translate-x-[-50%] w-[64px]" data-name="MenuCard">
                        {[...Array(2).keys()].map((_, i) => (
                          <div className="bg-[rgba(255,255,255,0.5)] rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Button" />
                        ))}
                        <div className="basis-0 bg-white grow h-[8px] min-h-px min-w-px rounded-[1.67772e+07px] shrink-0" data-name="Button" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="MenuCard">
                      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] text-nowrap">Dhokla</p>
                      <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start not-italic relative shrink-0">
                        <p className="leading-[26px] relative shrink-0 text-[#6e564a] text-[16px] w-[395px]">Soft, spongy steamed cakes made from fermented chickpea flour, garnished with mustard seeds and curry leaves.</p>
                        <p className="leading-[28px] relative shrink-0 text-[#c49533] text-[20px] text-nowrap">A$18 / Dozen</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="bg-[#faf8f5] relative shrink-0 w-full">
          <div className="content-stretch flex items-start p-[64px] relative w-full">
            <div className="h-[500px] overflow-clip relative rounded-[16px] shrink-0 w-[565px]" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImageWithFallback4} />
              <div className="absolute h-[620px] left-[-3px] top-[-27px] w-[572px]" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] h-[500px] items-start justify-center pl-[64px] pr-0 py-0 relative shrink-0 w-[666px]" data-name="Container">
              <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] min-w-full not-italic relative shrink-0 text-[#6b8a47] text-[52px] w-[min-content]">Order With Ease</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(75,46,32,0.8)] w-[min-content]">Select your dishes, share your event details, and review before confirming — a seamless, handcrafted experience.</p>
              <div className="h-[28px] relative shrink-0 w-[480px]" data-name="Link">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
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
            </div>
          </div>
        </div>
        <div className="bg-white h-[356px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative size-full">
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
  );
}