import { serviceHair } from "../pages/data";

const example = {
  title: "Pánsky strih",
  price: "25.00 €",
  time: "30 min",
  description: "klasický pánsky strih, strihanie nožnicami, strojčekom",
};

const ServiceCard = () => {
  return (
    <section class="m-4 flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
      <h3 class="flex items-center text-sm justify-center font-semibold pb-2 text-gray-900 border-b-2 border-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-6 w-6 flex-none fill-gray-500 rotate-90"
        >
          <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
        </svg>

        {/* 
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        className="h-6 w-6 flex-none fill-gray-500 -rotate-90">

          <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"/></svg>

  
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6 flex-none fill-gray-500">
          <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>          
        */}

        <span class="ml-4 text-lg">Vlasy</span>
        {/* 
            <span class="ml-4">Brada</span>
            <span class="ml-4">Vlasy & Brada</span>
          */}
      </h3>

      <div className="py-3 pb-6  border-b-2 border-gray-300 border-dotted border-opacity-70">
        <div className=" flex flex-row w-full items-center justify-between text-gray-900">
          <p class="relative flex text-2xl font-semibold tracking-tight ">
            <span aria-hidden="false" class="transition duration-300">
              {example.title}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-gray-900">{example.price}</p>
            <p class="text-right font-semibold text-sm text-gray-700">
              {example.time}
            </p>
          </div>
        </div>
        <p class="mt-1 text-sm text-gray-700">{example.description}</p>
      </div>

      <a
        class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
        aria-label="Get started with the Investor plan for [object Object]"
        href="/call"
      >
        Objednať sa
      </a>
    </section>
  );
};

export default ServiceCard;
