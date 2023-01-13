// Components
import BarberCard from "../components/BarberCard";
import Form from "../components/Form";
import Map from "../components/Map";

// Data
import { heroData, sectionTitle, serviceData } from "../pages/data";
import barberImg from "../public/images/barber4.jpg";
import Link from "next/link";
import Image from "next/image";
import barger5 from "../public/images/barber5.jpg";
import Contact from "../sections/contact/Contact";
import About_v1 from "../sections/about/About_v1";
import About_v2 from "../sections/about/About_v2";
import SectionTitle from "./SectionTitle";
import { BsFillTelephoneFill, BsPhoneFill } from "react-icons/bs";

// Carts
import ServiceCard from "../components/ServiceCard";
import OtherCard from "../components/OtherCard";
import ServiceHair from "../components/cards/ServiceHair";
import ServiceBeard from "../components/cards/ServiceBeard";
import ServiceComplete from "../components/cards/ServiceComplete";

export default function Home() {
  // Data
  const { title, subtitle, btnPrimaryText, btnSecondaryText } = heroData;

  return (
    <>
      {/* ====================================== HERO ============================================================================ */}
      <div
        id="#hero"
        className="section h-[100vh] flex items-center justify-center bg-fixed bg-center bg-cover custom-img"
      >
        <h1 className="mx-auto max-w-4xl font-display text-[3rem] sm:text-7xl font-bold tracking-tight text-white">
          {title}
        </h1>
        <p className="mx-auto mt-6 px-6 max-w-2xl text-xl tracking-tight text-slate-300 text-center">
          {subtitle}
        </p>

        <div className="mt-3 flex md:flex-row">
          <button className="m-3 px-9 py-3 text-white font-semibold text-lg border-2 hover:bg-white hover:text-black">
            <a href="#services">Naša Ponuka</a>
          </button>
          <button className="m-3 px-9 py-3 text-white font-semibold text-lg border-2 hover:bg-white hover:text-black">
            <a href="#contact">Kde nás nájdete?</a>
          </button>
        </div>
      </div>

      {/* 
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      ================ ABOUT ============================================================================ */}
      <section
        id="about"
        class="relative bg-slate-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-24 
        md:h-[100vh]"
      >
        <SectionTitle>O nás</SectionTitle>
        <div className="mb-8"></div>

        <div class="flex flex-col md:flex-row lg:-mx-8">
          <div class="w-full lg:w-1/2 lg:px-8 flex flex-col justify-center mr-2 text-center md:text-left">
            <h6 class="text-xs md:text-sm uppercase font-semibold tracking-widest mt-2">
              Patient testimonials
            </h6>
            <h2 class="text-3xl leading-tight font-bold mt-4 mb-2">
              Why choose the Mesothelioma Center?
            </h2>
            <p class="mt-2 leading-relaxed pb-4 font-light md:font-normal">
              Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt
              lacus tellus, sed aliquam est vehicula a. Pellentesque consectetur
              condimentum nulla, eleifend condimentum purus vehicula in. Donec
              convallis sollicitudin facilisis. Integer nisl ligula, accumsan
              non tincidunt ac, imperdiet in enim. Donec efficitur ullamcorper
              metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a,
              faucibus mi.
            </p>
          </div>
          <div class="w-full lg:w-1/2 lg:px-8 p-4 md:p-0">
            <div class="about-img bg-center bg-cover h-[32rem] rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* 
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      ================ SERVICES ============================================================================ */}
      <div id="services" className="section py-24 min-h-[70vh] bg-slate-100">
        <SectionTitle>{serviceData.title}</SectionTitle>
        <div className="mb-4"></div>
        <p className="mx-auto px-2 max-w-2xl md:text-lg tracking-tight text-slate-800 text-center italic font-light mb-2">
          {serviceData.text}
        </p>
        <div className="flex flex-row flex-wrap mt-4 justify-center">
          <ServiceHair />
          <div>
            <ServiceBeard />
            <ServiceComplete />
          </div>
        </div>
      </div>

      {/* 
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      ================ BARBERS ============================================================================ */}
      <div
        id="barbers"
        className="flex flex-col  items-center bg-gray-50 py-24 min-h-[70vh] justify-start"
      >
        <SectionTitle>Barberi</SectionTitle>
        <p className="mb-4 max-w-2xl md:text-lg uppercase italic font-light text-slate-800 text-center">
          spoznajte náš tím
        </p>

        <div className="w-full flex flex-wrap gap-4 md:gap-8 justify-center ">
          <div className="mt-14">
            <BarberCard />
          </div>
          <BarberCard />
        </div>
      </div>

      {/* 
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      ================ BOKING ============================================================================ */}
      <div
        id="booking"
        className="section py-2 min-h-[40vh] reservation-img bg-fixed bg-center bg-cover opacity-90	hover:opacity-95"
      >
        <h1 class="mb-4 text-4xl font-extrabold text-gray-600 md:text-5xl lg:text-6xl w-full flex justify-center">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Rezervácia
          </span>
        </h1>

        <button className="m-4 px-12 py-3 font-semibold text-lg border-2 border-[#fafafa] bg-[#e4e4e7] hover:bg-[#fafafa]  text-black">
          <a href="#contact"> Objednaj sa online</a>
        </button>
      </div>

      {/* 
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      =
      ================ CONTACT ============================================================================ */}
      <Contact />
      {/* ----------------------------------------------- */}

      <div className="m-5 p-5 min-h-[100px] flex flex-row">
        

        

        <div className="p-12 bg-gradient-to-r from-sky-500 to-indigo-500">
          
        </div>
      </div>

      <div>
        
      </div>
      <div>
        
      </div>
      <div>
       
      </div>
      <div>
      
      </div>
    </>
  );
}
