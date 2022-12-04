// Components
import ServiceCard from "../components/ServiceCard";
import BarberCard from "../components/BarberCard";
import Form from "../components/Form";
import Map from "../components/Map";

// Data
import { heroData } from "../pages/data";

import barberImg from "../public/images/barber4.jpg";

import Link from "next/link";
import Image from "next/image";
import OtherCard from "../components/OtherCard";

import barger5 from "../public/images/barber5.jpg";
import Contact from "../sections/contact/Contact";



export default function Home() {
  // Data
  const { title, subtitle, btnPrimaryText, btnSecondaryText } = heroData;

  return (
    <>
      {/* HERO */}
      <div
        id="#hero"
        className="section h-[100vh] flex items-center justify-center bg-fixed bg-center bg-cover custom-img"
      >
        <h1 className="mx-auto max-w-4xl font-display text-[3rem] sm:text-7xl font-bold tracking-tight text-white">
          {title}
        </h1>
        <p className="mx-auto mt-6 px-6 max-w-2xl text-lg tracking-tight text-slate-600 text-center">
          {subtitle}
        </p>
      </div>

      {/* ABOUT */}

      <div className="section py-24 bg-gray-50" id="about">
        <h5 className="bg-black text-white text-xl font-semibold">About</h5>

        <div className="flex md:flex-row flex-col-reverse justify-center items-center">


        <div class="w-full lg:w-1/2 lg:px-8">
          <div class="bg-gray-400 w-full h-72 rounded-lg"></div>
        </div>

          {/*
          <div className="container justify-center items-center flex">

            <div className="aspect-square">

            </div>
          </div>
          <div className=" container m-4 p-12 border bg-cover bg-center h-[700px] about-img">

              <h1 className="text-5xl font-extralight text-center">Image</h1>
          </div>
            */}

          {/* Text */}
          <div
            className="container m-4 p-12 border text-center 
          overflow-hidden rounded-xl shadow-lg shadow-gray-900/5 bg-white"
          >
            <h2 className="mb-2 font-semibold">About</h2>
            <h1 className="mb-6 text-5xl font-extralight ">Who We Are?</h1>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>






      <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
      <div class="flex flex-col md:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8">
          <h6 class="text-sm uppercase font-semibold tracking-widest">Patient testimonials</h6>
          <h2 class="text-3xl leading-tight font-bold mt-4">Why choose the Mesothelioma Center?</h2>
          <p class="mt-2 leading-relaxed">Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus,
            sed aliquam est vehicula a. Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula
            in. Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in
            enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus
            mi.</p>
        </div>

        <div class="w-full lg:w-1/2 lg:px-8">
          <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p class="italic text-sm mt-2 text-right">Aenean ante nisi, gravida non mattis semper.</p>
        </div>
      </div>
    </section>





      {/* SERVICES */}
      <div id="services" className="section py-24 min-h-[70vh] bg-slate-100">
        <h5 className="bg-black text-white text-xl font-semibold">Services</h5>

        <h1 className="my-4 font-semibold text-5xl italic">Services</h1>
        <div className="intro">
          <h2 className="subtitle"></h2>
          <h1 className="title"></h1>
          <p className="description"></p>
        </div>
        <div className="not-prose my-8 grid grid-cols-1 gap sm:grid-cols-2">
          <OtherCard />
          <OtherCard />
          <OtherCard />
        </div>
      </div>

      {/* BARBERS */}
      <div
        id="barbers"
        className="flex flex-col  items-center bg-gray-50 py-24 min-h-[70vh] justify-start"
      >
        <h5 className="bg-black text-white text-xl font-semibold">Barbers</h5>

        <h1 className="text-5xl font-extralight mb-6">Barbers Section</h1>
        <div className="intro">
          <h2 className="subtitle"></h2>
          <h1 className="title"></h1>
          <p className="description"></p>
        </div>
        <div className="barbers">
          <BarberCard />
          <BarberCard />
          <BarberCard />
        </div>
      </div>

      {/* BOKING */}
      <div id="booking" className="section py-24 min-h-[70vh]">
        <h5 className="bg-black text-white text-xl font-semibold">Booking</h5>

        <div className="section h-screen bg-slate-100">
          <h1 className="font-bold text-2xl mb-4">Booking Section</h1>

          <div className="container">
            <h2 className="subtitle"></h2>
            <h1 className="title"></h1>
          </div>
          <Form />
        </div>
      </div>

      {/* CONTACT */}
      <Contact />
    </>
  );
}
