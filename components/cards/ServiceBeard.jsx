import { beardServices } from "../../pages/data";

const ServiceBeard = () => {
  const { items } = beardServices;

  const list = items.map((item, index) => (
    <div
      id={index}
      className="py-3 pb-6 border-t-2 border-gray-300 border-opacity-70"

    >
      <div className=" flex flex-row w-full items-center justify-between text-gray-900">
        <p class="relative flex text-xl font-semibold tracking-tight ">
          <span aria-hidden="false" class="transition duration-300">
            {item.title}
          </span>
        </p>
        <p className="text-md font-bold text-gray-900">{item.price}</p>
      </div>
      <div className="flex items-start justify-between gap-2">
        <p class="mt-1 mr-2 text-sm text-gray-700">{item.description}</p>
        <p class="text-right font-semibold text-sm text-gray-700 w-[110px]">
          {item.time}
        </p>
      </div>
    </div>
  ));

  return (
    <section class="m-4 flex flex-col w-[420px] md:w-[560px] overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white ">
      {/* ============================== TITLE ================= */}
      <h3 class="flex items-center text-sm justify-center font-semibold pb-2 text-gray-900 border-b-2 border-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-6 w-6 flex-none fill-gray-500 -rotate-90"
        >
          <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
        </svg>

        <span class="ml-4 text-lg">Brada</span>
      </h3>
      {/* ============================== LIST ================= */}
      <div>{list}</div>
    </section>
  );
};

export default ServiceBeard;
