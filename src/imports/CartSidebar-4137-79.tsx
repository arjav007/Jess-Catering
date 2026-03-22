function Container3() {
  return (
    <div className="bg-[#6b8a47] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px] whitespace-nowrap">0</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] whitespace-nowrap">Your Order</p>
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[45px] relative shrink-0 w-[341.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(213,179,107,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative size-full">
        <p className="leading-[24px] relative shrink-0 text-[#6e564a] text-[16px] whitespace-nowrap">Samosa</p>
        <p className="leading-[20px] relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] w-[38px]">Qty: 1</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.477px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#c49533] text-[16px] top-0 w-[48px]">$25.00</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(107,138,71,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-px pt-[12px] relative size-full">
        <Container5 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative size-full">
        <p className="leading-[24px] relative shrink-0 text-[#6e564a] text-[16px] whitespace-nowrap">Pasta</p>
        <p className="leading-[20px] relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] w-[38px]">Qty: 1</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.477px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Libre_Caslon_Display:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#c49533] text-[16px] top-0 w-[48px]">$25.00</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[73px] items-start justify-between pb-px pt-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(107,138,71,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Paragraph1 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[71.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#6e564a] text-[18px] top-[0.5px] whitespace-nowrap">Subtotal</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <p className="font-['Libre_Caslon_Display:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#6b8a47] text-[24px] whitespace-nowrap">$50.00</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#6b8a47] h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[calc(50%-92.67px)] not-italic text-[16px] text-white top-[15px] whitespace-nowrap">Proceed to Event Details</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[133px] items-start pt-[17px] relative shrink-0 w-[341.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(213,179,107,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container9 />
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[222px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[425px] h-full items-end relative">
        <Container6 />
        <Container8 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[781px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container4 />
      <Frame />
    </div>
  );
}

export default function CartSidebar() {
  return (
    <div className="bg-[#f9f7f4] content-stretch flex flex-col items-start pt-[28px] px-[24px] relative rounded-[14px] size-full" data-name="CartSidebar">
      <div aria-hidden="true" className="absolute border-[#c49533] border-solid border-t-4 inset-0 pointer-events-none rounded-[14px]" />
      <Container />
    </div>
  );
}