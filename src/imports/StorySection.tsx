import imgImageWithFallback from "figma:asset/ecaeb2387c249616c77b273d85d16cd7b69f71ad.png";

function ImageWithFallback() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[500px] items-start left-0 overflow-clip rounded-[16px] top-0 w-[592px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function StorySection1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="StorySection">
      <p className="absolute font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[40px] left-0 not-italic text-[#6b8a47] text-[36px] top-[-0.5px]">How It All Began</p>
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

function Container1() {
  return (
    <div className="absolute bg-[#f9f7f4] content-stretch flex flex-col gap-[20px] items-start left-[640px] p-[48px] rounded-[16px] top-[87.88px] w-[592px]" data-name="Container">
      <StorySection1 />
      <StorySection2 />
      <StorySection3 />
    </div>
  );
}

export default function StorySection() {
  return (
    <div className="relative size-full" data-name="StorySection">
      <Container />
      <Container1 />
    </div>
  );
}