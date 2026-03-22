function Frame() {
  return (
    <div className="bg-[#6b8a47] relative rounded-[10px] shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[28px] py-[16px] relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Contact Us</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[896px]" data-name="CTASection">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center w-[747px] whitespace-pre-wrap">Ready to host your next event or gift our handmade chocolates?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#6e564b] text-[20px] text-center">{`Let's create something memorable together.`}</p>
      <Container1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative size-full">
        <CtaSection />
      </div>
      <div aria-hidden="true" className="absolute border-[#c49533] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}