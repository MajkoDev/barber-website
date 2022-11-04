import { heroData } from "../pages/data";
import Video from "../components/Video";

const Hero = () => {
  const { title, subtitle, btnPrimaryText, btnSecondaryText } = heroData;

  return (
    <div className="mx-auto max-w-7xl section bg-gray-300" id="#hero">


        <h1 className="mx-auto max-w-4xl font-display text-[3rem] sm:text-7xl font-bold tracking-tight text-slate-900">{title}</h1>
        
        <p className="mx-auto mt-6 px-6 max-w-2xl text-lg tracking-tight text-slate-700">{subtitle}</p>
        
        <div className="mt-10 flex justify-center gap-x-6">
          <button className="m-2 items-center justify-center rounded-full py-2 px-4 text-sm">{btnPrimaryText}</button>
          <button className="m-2 items-center justify-center rounded-full py-2 px-4 text-sm">{btnSecondaryText}</button>
        </div>
      


    </div>
  );
};

export default Hero;
