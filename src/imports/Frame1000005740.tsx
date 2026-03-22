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

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative size-full">
      <Container />
      <Container2 />
    </div>
  );
}