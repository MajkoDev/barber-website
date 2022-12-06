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
import About_v1 from "../sections/about/About_v1";
import About_v2 from "../sections/about/About_v2";

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
      <About_v2 />
      <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
        <div class="flex flex-col md:flex-row lg:-mx-8">
          <div class="w-full lg:w-1/2 lg:px-8">
            <h6 class="text-sm uppercase font-semibold tracking-widest">
              Patient testimonials
            </h6>
            <h2 class="text-3xl leading-tight font-bold mt-4">
              Why choose the Mesothelioma Center?
            </h2>
            <p class="mt-2 leading-relaxed">
              Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt
              lacus tellus, sed aliquam est vehicula a. Pellentesque consectetur
              condimentum nulla, eleifend condimentum purus vehicula in. Donec
              convallis sollicitudin facilisis. Integer nisl ligula, accumsan
              non tincidunt ac, imperdiet in enim. Donec efficitur ullamcorper
              metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a,
              faucibus mi.
            </p>
          </div>
          <div class="w-full lg:w-1/2 lg:px-8">
            <div class="bg-gray-400 w-full h-72 rounded-lg"></div>
            <p class="italic text-sm mt-2 text-right">
              Aenean ante nisi, gravida non mattis semper.
            </p>
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
      <div id="booking" className="section py-2 min-h-[70vh]">
        <h5 className="bg-black text-white text-xl font-semibold">Booking</h5>

        <div className="section  bg-slate-100">
          <h1 className="font-bold text-2xl mb-4">Booking Section</h1>

          <div className="container">
            <h2 className="subtitle"></h2>
            <h1 className="title"></h1>
          </div>
          <Form />
        </div>
      </div>

      <div id="book" className="grid place-content-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="email"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck87"
                checked
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="exampleCheck87"
              >
                Send me a copy of this message
              </label>
            </div>
            <button
              type="submit"
              class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* CONTACT */}
      <Contact />
    </>
  );
}
