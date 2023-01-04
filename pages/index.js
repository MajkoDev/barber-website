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
        spoznajte náš tím</p>

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
      <div id="booking" className="section py-2 min-h-[70vh] bg-slate-200">
        <SectionTitle>Rezervácia</SectionTitle>
        <div className="p-3"></div>

        <div id="book" className="grid place-content-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">

            <form>

            </form>


            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>

            </form>

          <div className="m-4 bg-slate-600 p-3"></div>

            <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /> 
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
    </div>
  </div>
</form>

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
      ================ CONTACT ============================================================================ */}
      <Contact />
      {/* ----------------------------------------------- */}
    </>
  );
}
