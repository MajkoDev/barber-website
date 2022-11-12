// Sections
import { Hero, About, Services, Barbers, Booking, Contact } from "../sections";
import { HeroCopy } from "../sections/HeroCopy";
import { footerData } from "../pages/data";
 
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Barbers />
      <Booking />
      <Contact />
    </>
  );
}
