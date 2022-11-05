import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="py-4 sticky top-0 z-40 backdrop-blur transition-colors duration-300 bg-white/90 supports-backdrop-blur:bg-white/60 dark:bg-transparent lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between">
          {/* LOGO */}
          <div className="flex items-center md:gap-x-12 py-1">
            <a href="/#" className="font-semibold text-xl">
              Barber
            </a>
          </div>

          {/* MENU LINKS */}
          <div className="hidden md:flex md:gap-x-6 items-center"  >
            <a href="/#about" className=" rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900 hidden lg:block" >
              O nás
            </a>
            <a href="/#services" className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900">
              Služby & Cenník
            </a>
            <a href="/#booking" className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold">
              Rezervácia
            </a>
            <a href="/#barbers" className=" rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900 hidden lg:block">
              Barberi
            </a>
            <a href="/#contact" className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900">
              Kontakt
            </a>
          </div>

          {/* CONTACT BUTTON */}
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a href="/#contact" className="inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"              >
                <span>Objednaj sa hneď</span>
              </a>
            </div>
          </div>

          {/* MOBILE VERSION BUTTON */}
          <div className="-mr-1 md:hidden">
            <button className="relative z-10 flex h-8 w-8 items-center justify-center mobile-menu-button" onClick={() => setOpen(!open)}>
              <div className={open ? `hidden` : `inline-block`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={open ? `inline-block` : `hidden`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE VERSION MENU */}
        <div className={` flex-col bg-slate-100 rounded-lg items-center mt-2 ${open ? `flex` : `hidden`}`}  onClick={() => setOpen(false)}>
            <a href="/#about" className="rounded-lg py-1 px-2 text-md text-slate-900 hover:bg-slate-300 hover:text-slate-900 my-2">
              O nás
            </a>
            <a href="/#services" className="rounded-lg py-1 px-2 text-md text-slate-900 hover:bg-slate-300 hover:text-slate-900 my-2">
              Služby & Cenník
            </a>
            <a href="/#booking" className="rounded-lg py-1 px-2 text-md text-slate-900 hover:bg-slate-300 hover:text-slate-900 my-2 font-semibold">
              Rezervácia
            </a>
            <a href="/#barbers" className="rounded-lg py-1 px-2 text-md text-slate-900 hover:bg-slate-300 hover:text-slate-900 my-2">
              Barberi
            </a>
            <a href="/#contact" className="rounded-lg py-1 px-2 text-md text-slate-900 hover:bg-slate-300 hover:text-slate-900 my-2">
              Kontakt
            </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
