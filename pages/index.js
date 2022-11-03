// Sections
import { Hero, About, Services, Barbers, Booking, Contact } from "../sections";
import { HeroCopy } from "../sections/HeroCopy";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Barbers />
      <Booking />
      <Contact />
      <div className="flex-1 justify-center items-center">
      <div className="container bg-slate-100 ">
        <h1 className="text-4xl font-bold text-gray-900">This is my Title</h1>
        <p className="text-md font-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      </div>
    </>
  );
}
