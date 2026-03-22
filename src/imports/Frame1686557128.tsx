function Container() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(213,179,107,0.3)] h-[2px] left-[calc(50%+0.5px)] top-[calc(50%-13px)] w-[1158px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[#6b8a47] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Libre_Caslon_Display:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">I</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container2 />
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

function Container3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(213,179,107,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <ProgressIndicator />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[87px]">
      <Container3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#6e564a] text-[14px] w-[min-content]">Event Details</p>
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

function Container4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(213,179,107,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <ProgressIndicator1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[87px]">
      <Container4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#6e564a] text-[14px] text-center w-[min-content]">Review</p>
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

function Container5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[2px] relative rounded-[16777200px] shrink-0 size-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(213,179,107,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <ProgressIndicator2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Container5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6e564a] text-[14px] text-center whitespace-nowrap">Confirm</p>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#f9f7f4] content-stretch flex items-center justify-between px-[64px] py-[16px] relative size-full">
      <Container />
      <Container1 />
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}