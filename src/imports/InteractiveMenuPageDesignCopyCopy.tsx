import svgPaths from "./svg-dkxnzvvx5n";
import clsx from "clsx";
import imgImage17 from "figma:asset/9b9a4edf7c8601ed956cfe7bef6b37a49cfa92de.png";
import imgImageWithFallback from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";
import imgImageWithFallback1 from "figma:asset/23dab75c5b47c133865cf83bcc26afbb8c3b920d.png";
import imgImageWithFallback2 from "figma:asset/4179209616a8b397c059b945f301f6290769ccc4.png";
import imgImageWithFallback3 from "figma:asset/ccdc245a0e9cbfe62e124e99e25c54c412675de9.png";

function Link({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[1.75866e+07px] shrink-0 size-[47.998px]">
      <div aria-hidden="true" className="absolute border-[#6b8a47] border-[1.572px] border-solid inset-0 pointer-events-none rounded-[1.75866e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.572px] pr-[1.58px] py-[1.572px] relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function ContactForm({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[1.75866e+07px] shrink-0 size-[39.997px]">
      <div aria-hidden="true" className="absolute border-[#6b8a47] border-[1.572px] border-solid inset-0 pointer-events-none rounded-[1.75866e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.572px] relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[19.999px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9986 19.9986">
        {children}
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
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#6b8a47] text-[20px] text-nowrap top-[-0.43px]">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 1">
          <line id="Line 1" stroke="var(--stroke-0, #917E75)" x2="312" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#938279] text-[14px] text-nowrap tracking-[0.5496px]">{text}</p>
      <Helper />
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

export default function InteractiveMenuPageDesignCopyCopy() {
  return (
    <div className="bg-white relative size-full" data-name="Interactive Menu Page Design (Copy) (Copy)">
      <div className="absolute bg-white h-[2800px] left-0 top-0 w-[440px]" data-name="Contact">
        <div className="absolute bg-white h-[1032px] left-0 top-[905px] w-[440px]" data-name="ContactForm">
          <div className="absolute content-stretch flex flex-col gap-[31.996px] h-[495px] items-start left-[24px] top-[537px] w-[392px]" data-name="Container">
            <div className="content-stretch flex flex-col gap-[31.996px] h-[299.962px] items-start relative shrink-0 w-full" data-name="ContactForm">
              <div className="h-[35.992px] relative shrink-0 w-full" data-name="Heading 2">
                <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#6b8a47] text-[28px] text-nowrap top-[-1.05px]">Contact Details</p>
              </div>
              <div className="h-[231.973px] relative shrink-0 w-full" data-name="Container">
                <div className="absolute content-stretch flex gap-[15.994px] h-[39.997px] items-start left-0 top-0 w-[345.102px]" data-name="Container">
                  <ContactForm>
                    <Icon>
                      <g id="Icon">
                        <path d={svgPaths.p3a379600} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                        <path d={svgPaths.p6e10100} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                      </g>
                    </Icon>
                  </ContactForm>
                  <Wrapper additionalClassNames="h-[40px] w-[124px]">
                    <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[41px] justify-center leading-[0] left-[0.02px] not-italic text-[#2e1b12] text-[16px] top-[19.52px] translate-y-[-50%] w-[124px]">
                      <p className="leading-[24px]">Jerestene Saher</p>
                    </div>
                  </Wrapper>
                </div>
                <div className="absolute content-stretch flex gap-[15.994px] h-[39.997px] items-center left-0 top-[63.99px] w-[345.102px]" data-name="Container">
                  <ContactForm>
                    <Icon>
                      <g clipPath="url(#clip0_4052_383)" id="Icon">
                        <path d={svgPaths.p39eb1400} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                        <path d={svgPaths.p3964c8a0} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4052_383">
                          <rect fill="white" height="19.9986" width="19.9986" />
                        </clipPath>
                      </defs>
                    </Icon>
                  </ContactForm>
                  <Wrapper additionalClassNames="h-[24.003px] w-[281.888px]">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2e1b12] text-[16px] text-nowrap top-[-0.9px]">56 McDougall Pl, Truganina VIC 3029</p>
                  </Wrapper>
                </div>
                <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-[127.98px] w-[345.102px]" data-name="Container">
                  <div className="content-stretch flex items-center justify-center p-[1.572px] relative rounded-[1.75866e+07px] shrink-0 size-[39.997px]" data-name="ContactForm">
                    <div aria-hidden="true" className="absolute border-[#6b8a47] border-[1.572px] border-solid inset-0 pointer-events-none rounded-[1.75866e+07px]" />
                    <Icon>
                      <g clipPath="url(#clip0_4052_373)" id="Icon">
                        <path d={svgPaths.p31419d00} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                        <path d={svgPaths.p19595700} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4052_373">
                          <rect fill="white" height="19.9986" width="19.9986" />
                        </clipPath>
                      </defs>
                    </Icon>
                  </div>
                  <div className="content-stretch flex h-[19.393px] items-start relative shrink-0 w-[286.916px]" data-name="ContactForm">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e1b12] text-[16px] w-[287px]">
                      <p className="leading-[24px]">request@jesscateringservices.com.au</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-[191.98px] w-[345.102px]" data-name="Container">
                  <div className="content-stretch flex items-center justify-center p-[1.572px] relative rounded-[1.75866e+07px] shrink-0 size-[39.997px]" data-name="ContactForm">
                    <div aria-hidden="true" className="absolute border-[#6b8a47] border-[1.572px] border-solid inset-0 pointer-events-none rounded-[1.75866e+07px]" />
                    <Icon>
                      <g clipPath="url(#clip0_4052_380)" id="Icon">
                        <path d={svgPaths.pb72c700} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4052_380">
                          <rect fill="white" height="19.9986" width="19.9986" />
                        </clipPath>
                      </defs>
                    </Icon>
                  </div>
                  <div className="content-stretch flex h-[19.393px] items-start relative shrink-0 w-[103.072px]" data-name="ContactForm">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e1b12] text-[16px] w-[104px]">
                      <p className="leading-[24px]">0415 282 931</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[83.008px] items-start pb-0 pt-[24.519px] px-0 relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[0.524px_0px_0px] border-[rgba(107,138,71,0.2)] border-solid inset-0 pointer-events-none" />
              <div className="h-[58.489px] relative shrink-0 w-full" data-name="ContactForm">
                <p className="absolute font-['Abhaya_Libre:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[#4b2e20] text-[18px] top-[-0.48px] w-[392px]">{`"Food tastes better when shared — let's start planning your next gathering."`}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[15.994px] h-[47.998px] items-start relative shrink-0 w-full" data-name="Container">
              <Link>
                <Icon>
                  <g clipPath="url(#clip0_4052_387)" id="Icon">
                    <path d={svgPaths.p32aab100} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                    <path d={svgPaths.p202ddd00} id="Vector_2" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                    <path d="M14.5823 5.41628H14.5906" id="Vector_3" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4052_387">
                      <rect fill="white" height="19.9986" width="19.9986" />
                    </clipPath>
                  </defs>
                </Icon>
              </Link>
              <Link>
                <Icon>
                  <g clipPath="url(#clip0_4052_377)" id="Icon">
                    <path d={svgPaths.p3b132f00} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4052_377">
                      <rect fill="white" height="19.9986" width="19.9986" />
                    </clipPath>
                  </defs>
                </Icon>
              </Link>
              <Link>
                <Icon>
                  <g clipPath="url(#clip0_4052_392)" id="Icon">
                    <path d={svgPaths.pb85d200} id="Vector" stroke="var(--stroke-0, #6B8A47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66655" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4052_392">
                      <rect fill="white" height="19.9986" width="19.9986" />
                    </clipPath>
                  </defs>
                </Icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[72px] items-center justify-between left-[2px] pb-px pt-0 px-[24px] top-0 w-[440px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e1e8da] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="h-[40px] relative shrink-0 w-[59px]" data-name="image 17">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
        <Wrapper additionalClassNames="h-[40px] w-[314.852px]">
          <div className="absolute aspect-[24/24] left-[91.74%] right-0 top-[calc(50%+1px)] translate-y-[-50%]" data-name="Navigation / menu-burger">
            <div className="absolute contents inset-[-0.02%]" data-name="Group">
              <GroupPath additionalClassNames="inset-[47.92%_22.91%]" />
              <GroupPath additionalClassNames="inset-[64.59%_22.91%_31.24%_22.91%]" />
              <GroupPath additionalClassNames="inset-[31.24%_22.91%_64.59%_22.91%]" />
              <div className="absolute inset-[-0.02%]" data-name="Rectangle" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="absolute h-[771px] left-[24px] overflow-clip top-[72px] w-[393px]" data-name="AboutHero">
        <div className="absolute h-[377px] left-0 overflow-clip rounded-[16px] top-[394px] w-[393px]" data-name="Container">
          <div className="absolute h-[426.112px] left-[0.08px] top-[0.05px] w-[393.092px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col h-[426.112px] items-start left-0 opacity-0 pb-0 pt-[-21.306px] px-[-19.655px] top-0 w-[393.092px]" data-name="Container">
              <div className="h-[468.722px] relative shrink-0 w-full" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
              </div>
            </div>
            <div className="absolute h-[468.722px] left-[-19.65px] top-[-21.31px] w-[432.401px]" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
            </div>
            <div className="absolute content-stretch flex flex-col h-[426.112px] items-start left-0 opacity-0 pb-0 pt-[-21.306px] px-[-19.655px] top-0 w-[393.092px]" data-name="Container">
              <div className="h-[468.722px] relative shrink-0 w-full" data-name="ImageWithFallback">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
              </div>
            </div>
          </div>
          <div className="absolute bg-gradient-to-r from-[rgba(249,247,244,0.4)] h-[426.112px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[393.092px]" data-name="Container" />
          <div className="absolute h-[396px] left-0 rounded-[16px] top-0 w-[394px]" data-name="ImageWithFallback">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback} />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageWithFallback3} />
            </div>
          </div>
        </div>
        <div className="absolute bg-white h-[362px] left-0 top-0 w-[393px]" data-name="Container">
          <div className="absolute content-stretch flex h-[19.393px] items-start left-[2px] top-[44.09px] w-[99.166px]" data-name="Text">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d5b36b] text-[16px] text-nowrap tracking-[0.8px] uppercase">GET IN TOUCH</p>
          </div>
          <div className="absolute h-[119.991px] left-[2px] top-[81.99px] w-[329.1px]" data-name="Heading 1">
            <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[60px] left-0 not-italic text-[#6b8a47] text-[48px] top-[-0.99px] w-[345px]">We’d Love to Hear From You.</p>
          </div>
          <div className="absolute bg-[#d5b36b] h-[1.998px] left-[2px] top-[213.98px] w-[63.992px]" data-name="Container" />
          <div className="absolute h-[53px] left-[2px] top-[239px] w-[391px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(75,46,32,0.8)] top-px w-[386px]">{`Whether you're planning a cozy dinner or a grand celebration, we're here to make it delicious.`}</p>
          </div>
          <div className="absolute bg-[#6b8a47] h-[47px] left-0 rounded-[10px] top-[315px] w-[138px]" data-name="Button">
            <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[23px] justify-center leading-[0] left-[24px] not-italic text-[16px] text-white top-[23.5px] translate-y-[-50%] w-[125px]">
              <p className="leading-[24px]">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col gap-[36px] h-[487px] items-start left-[24px] pb-0 pt-[40px] px-[40px] rounded-[16px] top-[899px] w-[392px]" data-name="Form">
        <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#938279] text-[14px] text-nowrap tracking-[0.5496px]">First Name</p>
            <Helper />
          </div>
        </div>
        <Text text="Last Name" />
        <Text text="Email Address" />
        <Text text="Phone Number" />
        <div className="content-stretch flex flex-col gap-[68px] items-start relative shrink-0 w-full">
          <Text text="Tell us a little about your requirement..." />
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
            <div className="bg-[#6b8a47] relative rounded-[10px] shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[28px] py-[16px] relative w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Contact Us</p>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6e564a] text-[14px] text-center text-nowrap">We usually reply within 24 hours.</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f5f3f0] content-stretch flex flex-col h-[818px] items-start left-0 pb-0 pt-[1.572px] px-0 top-[1982px] w-[440px]" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#d5b36b] border-[1.572px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="h-[816.477px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[31.996px] items-start pb-0 pl-[24px] pr-[23.995px] pt-[47.998px] relative size-full">
            <div className="h-[607.958px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[15.994px] h-[127.992px] items-start left-0 top-0 w-[345.102px]" data-name="Container">
                <HeadingText text="About" />
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
                <HeadingText text="Menu" />
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
                <HeadingText text="Chocolates" />
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
                <HeadingText text="Contact Info" />
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
    </div>
  );
}