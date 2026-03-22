import svgPaths from "./svg-p8u8uz854l";

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px] uppercase">
        <span className="capitalize leading-[16px]">First Name</span>
        <span className="leading-[16px]">{` *`}</span>
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[36px] left-0 top-[0.01px] w-[426px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px]">Enter your first name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input />
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel />
      <StepEventDetails />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px] uppercase">
        <span className="capitalize leading-[16px]">Last Name</span>
        <span className="leading-[16px]">{` *`}</span>
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute h-[36px] left-[0.5px] top-[0.01px] w-[425px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px]">Enter your last name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails1() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input1 />
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel1 />
      <StepEventDetails1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container />
      <Container2 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px] uppercase">
        <span className="capitalize leading-[16px]">Email Address</span>
        <span className="leading-[16px]">{` *`}</span>
      </p>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute h-[36px] left-0 top-[0.04px] w-[426px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px]">Enter your email address</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails2() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input2 />
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel2 />
      <StepEventDetails2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px] uppercase">
        <span className="capitalize leading-[16px]">Phone Number</span>
        <span className="leading-[16px]">{` *`}</span>
      </p>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute h-[36px] left-[0.5px] top-[0.04px] w-[425px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px]">Enter your phone number</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails3() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input3 />
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel3 />
      <StepEventDetails3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container4 />
      <Container6 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px]">Event Type</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9939 15.9939">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pa00d880} id="Vector" stroke="var(--stroke-0, #4B2E20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
        </g>
      </svg>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute h-[36px] left-0 top-[0.05px] w-[426px]" data-name="Input">
      <div className="content-stretch flex gap-[111px] items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px] w-[296px] whitespace-pre-wrap">Select event type</p>
        <Icon />
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails4() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input4 />
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel4 />
      <StepEventDetails4 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px]">Number of guests</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute h-[36px] left-[0.5px] top-[0.05px] w-[425px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px]">Enter your number of guests</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails5() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input5 />
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel5 />
      <StepEventDetails5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container8 />
      <Container10 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px]">Delivery Type</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9939 15.9939">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pa00d880} id="Vector" stroke="var(--stroke-0, #4B2E20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
        </g>
      </svg>
    </div>
  );
}

function Input6() {
  return (
    <div className="absolute h-[36px] left-0 top-[0.08px] w-[426px]" data-name="Input">
      <div className="content-stretch flex gap-[111px] items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px] w-[296px] whitespace-pre-wrap">Select delivery type</p>
        <Icon1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails6() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input6 />
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel6 />
      <StepEventDetails6 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px]">Delivery Date</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9939 15.9939">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pa00d880} id="Vector" stroke="var(--stroke-0, #4B2E20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
        </g>
      </svg>
    </div>
  );
}

function Input7() {
  return (
    <div className="absolute h-[36px] left-[0.5px] top-[0.08px] w-[425px]" data-name="Input">
      <div className="content-stretch flex gap-[111px] items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px] w-[296px] whitespace-pre-wrap">Select delivery date</p>
        <Icon2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails7() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input7 />
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[7.993px] h-[59.979px] items-start min-h-px min-w-px relative" data-name="Container">
      <PrimitiveLabel7 />
      <StepEventDetails7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Container12 />
      <Container14 />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px]">Delivery Address</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="absolute h-[36px] left-0 top-[0.1px] w-[873px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px]">Enter delivery address</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails8() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input8 />
      <Container17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[7.993px] h-[60px] items-start relative shrink-0 w-[873px]" data-name="Container">
      <PrimitiveLabel8 />
      <StepEventDetails8 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px]">preferred Payment Method</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9939 15.9939">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.pa00d880} id="Vector" stroke="var(--stroke-0, #4B2E20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
        </g>
      </svg>
    </div>
  );
}

function Input9() {
  return (
    <div className="absolute h-[36px] left-0 top-[0.1px] w-[875px]" data-name="Input">
      <div className="content-stretch flex gap-[558px] items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px] w-[296px] whitespace-pre-wrap">Select preferred payment method</p>
        <Icon3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails9() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input9 />
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[7.993px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel9 />
      <StepEventDetails9 />
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="content-stretch flex h-[15.994px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="capitalize font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(75,46,32,0.6)] tracking-[0.6px]">Additional Notes</p>
    </div>
  );
}

function Icon4() {
  return <div className="opacity-50 shrink-0 size-[15.994px]" data-name="Icon" />;
}

function Input10() {
  return (
    <div className="absolute h-[36px] left-0 top-[0.1px] w-[875px]" data-name="Input">
      <div className="content-stretch flex gap-[1019px] items-center overflow-clip py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#a8a8a8] text-[14px] w-[313px] whitespace-pre-wrap">Enter any dietary restrictions or requests</p>
        <Icon4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#917e75] border-b-[1.572px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#917e75] h-[1.998px] left-0 top-[33.99px] w-0" data-name="Container" />;
}

function StepEventDetails10() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-full" data-name="StepEventDetails">
      <Input10 />
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[7.993px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel10 />
      <StepEventDetails10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[28px] py-[16px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#6b8a47] text-[16px]">Back to Menu</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#6b8a47] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[28px] py-[16px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Review Order</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

export default function Form() {
  return (
    <div className="bg-[#f9f7f4] content-stretch flex flex-col gap-[36px] items-start p-[40px] relative rounded-[16px] size-full" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[#6b8a47] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Container16 />
      <Container18 />
      <Container20 />
      <Frame4 />
    </div>
  );
}