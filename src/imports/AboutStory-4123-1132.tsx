import imgImageWithFallback from "figma:asset/a4aaaba0c5b842f15db65ce95f4d89083006a758.png";

function ImageWithFallback() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[500px] items-start overflow-clip relative rounded-[16px] shrink-0 w-[592px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function StorySection1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="StorySection">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[40px] left-0 not-italic text-[#6b8a47] text-[36px] top-[-0.5px]">Our Story</p>
    </div>
  );
}

function StorySection2() {
  return <div className="bg-[#c49533] h-[2px] shrink-0 w-[64px]" data-name="StorySection" />;
}

function StorySection3() {
  return (
    <div className="h-[146.25px] relative shrink-0 w-full" data-name="StorySection">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#6e564a] text-[18px] top-[0.5px] w-[491px] whitespace-pre-wrap">It all started with a passion passed down from my mother. As a teenager, I helped her in the kitchen every day — learning that cooking is both art and love. Those early memories shaped everything Jess Catering stands for today.</p>
    </div>
  );
}

function Home() {
  return (
    <div className="h-[26px] relative shrink-0 w-[135.023px]" data-name="Home">
      <div aria-hidden="true" className="absolute border-[#6b8a47] border-b border-solid inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[68px] not-italic text-[#6b8a47] text-[16px] text-center top-[-1px]">Read Our Story →</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f9f7f4] content-stretch flex flex-col gap-[20px] items-start p-[48px] relative rounded-[16px] shrink-0 w-[592px]" data-name="Container">
      <StorySection1 />
      <StorySection2 />
      <StorySection3 />
      <Home />
    </div>
  );
}

function StorySection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="StorySection">
      <Container />
      <Container1 />
    </div>
  );
}

export default function AboutStory() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[64px] relative size-full" data-name="AboutStory">
      <StorySection />
    </div>
  );
}