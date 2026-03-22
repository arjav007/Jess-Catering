import imgImageWithFallback from "figma:asset/35b29a957dc8fcdefb693de6bf192f9e9ba11f04.png";
import imgImageWithFallback1 from "figma:asset/23dab75c5b47c133865cf83bcc26afbb8c3b920d.png";
import imgImageWithFallback2 from "figma:asset/6a4d55282a122b6156d097025368791c1d1847c6.png";
import imgImageWithFallback3 from "figma:asset/4179209616a8b397c059b945f301f6290769ccc4.png";
import imgImageWithFallback4 from "figma:asset/d656888c2ea17addca26ab25f9d6a943faa00362.png";
import imgImageWithFallback5 from "figma:asset/ecaeb2387c249616c77b273d85d16cd7b69f71ad.png";
import imgImageWithFallback6 from "figma:asset/7dc0d6c2835088eea91239387b103e7260dca829.png";
import imgImageWithFallback7 from "figma:asset/89df004593ab1004ad95a12d506a7351a5eafc5e.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center">
      <p className="font-['Abhaya_Libre_SemiBold:Regular',sans-serif] leading-[48px] relative shrink-0 text-[#6b8a47] text-[52px]">Behind the Scenes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#6e564a] text-[18px]">A glimpse into our kitchen where passion meets perfection</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[415.992px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[320px] left-0 top-0 w-[415.992px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function BehindTheScenes1() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] h-[320px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 w-[415.992px]" data-name="BehindTheScenes" />;
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[320px] overflow-clip relative rounded-[96px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[389px]" data-name="Container">
      <ImageWithFallback2 />
      <BehindTheScenes1 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[320px] left-0 top-0 w-[415.992px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function BehindTheScenes2() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] h-[320px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 w-[415.992px]" data-name="BehindTheScenes" />;
}

function CarouselItem() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[320px] overflow-clip relative rounded-[96px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[389px]" data-name="CarouselItem">
      <ImageWithFallback3 />
      <BehindTheScenes2 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="h-[320px] relative rounded-[96px] shrink-0 w-[389px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[96px] size-full" src={imgImageWithFallback7} />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[32px] items-center left-[calc(50%+200px)] top-0">
      <ImageWithFallback />
      <ImageWithFallback1 />
      <Container1 />
      <CarouselItem />
      <ImageWithFallback4 />
      <ImageWithFallback5 />
      <ImageWithFallback6 />
      <ImageWithFallback7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[320px] overflow-x-auto overflow-y-clip relative shrink-0 w-[1359px]">
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function BehindTheScenes() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[64px] relative size-full" data-name="BehindTheScenes">
      <Container />
    </div>
  );
}