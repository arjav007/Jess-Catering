import imgImageWithFallback from "figma:asset/89df004593ab1004ad95a12d506a7351a5eafc5e.png";
import imgImageWithFallback1 from "figma:asset/8085e53a45d132a615fd5775bb550d191b08cd93.png";
import imgImageWithFallback2 from "figma:asset/7dc0d6c2835088eea91239387b103e7260dca829.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function SignatureCuisines2() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[256px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 w-[389px]" data-name="SignatureCuisines" />;
}

function Container2() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[296px]" data-name="Container">
      <ImageWithFallback />
      <SignatureCuisines2 />
    </div>
  );
}

function Container3() {
  return <div className="absolute border-2 border-[#c49533] border-solid h-[256px] left-0 opacity-0 rounded-[14px] top-0 w-[389px]" data-name="Container" />;
}

function SignatureCuisines1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="SignatureCuisines">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px]">Parsi Specialties</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px]">Traditional fish and meat dishes</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <SignatureCuisines1 />
      <Frame />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px]">Indian Snacks</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px]">Samosas, bhajis, and more</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container5 />
      <Frame1 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function SignatureCuisines3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[256px] overflow-clip relative rounded-[14px] shrink-0 w-full" data-name="SignatureCuisines">
      <ImageWithFallback2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[28px] relative shrink-0 text-[#6b8a47] text-[24px]">{`Desserts & Chocolates`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6e564a] text-[16px]">Handcrafted sweet creations</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] items-center justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <SignatureCuisines3 />
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[339px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container4 />
      <Container6 />
    </div>
  );
}

export default function SignatureCuisines() {
  return (
    <div className="bg-[#f9f7f4] content-stretch flex flex-col gap-[48px] items-center justify-center p-[64px] relative size-full" data-name="SignatureCuisines">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#6b8a47] text-[52px] text-center">What We Love to Create</p>
      <Container />
    </div>
  );
}