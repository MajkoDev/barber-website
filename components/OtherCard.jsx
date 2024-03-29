const OtherCard = () => {
  return (
    <section class="m-4 flex flex-col  w-[360px] overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
      <h3 class="flex items-center text-sm font-semibold text-gray-900">
        <svg
          viewBox="0 0 40 40"
          aria-hidden="true"
          class="h-6 w-6 flex-none fill-gray-500"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
          ></path>
        </svg>
        <span class="ml-4">Investor</span>
      </h3>
      <p class="relative mt-5 flex text-3xl tracking-tight text-gray-900">
        <span aria-hidden="false" class="transition duration-300">
          $7
        </span>
        <span
          aria-hidden="true"
          class="absolute left-0 top-0 transition duration-300 pointer-events-none -translate-x-6 select-none opacity-0"
        >
          $70
        </span>
      </p>
      <p class="mt-3 text-sm text-gray-700">
        You’ve been investing for a while. Invest more and grow your wealth
        faster.
      </p>
      <div class="order-last mt-6">
        <ul
          role="list"
          class="-my-2 divide-y text-sm divide-gray-200 text-gray-700"
        >
          <li class="flex py-2">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none text-cyan-500"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            <span class="ml-4">Commission-free trading</span>
          </li>
          <li class="flex py-2">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none text-cyan-500"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            <span class="ml-4">Multi-layered encryption</span>
          </li>
          <li class="flex py-2">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none text-cyan-500"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            <span class="ml-4">One tip every hour</span>
          </li>
          <li class="flex py-2">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none text-cyan-500"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            <span class="ml-4">Invest up to $15,000 each month</span>
          </li>
          <li class="flex py-2">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none text-cyan-500"
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                fill="currentColor"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
            </svg>
            <span class="ml-4">Basic transaction anonymization</span>
          </li>
        </ul>
      </div>
      <a
        class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
        aria-label="Get started with the Investor plan for [object Object]"
        href="/register"
      >
        Subscribe
      </a>
    </section>
  );
};

export default OtherCard;
