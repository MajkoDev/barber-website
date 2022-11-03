import { footerData } from "../pages/data";

const Footer = () => {
  const { title, items } = footerData;

  return (
    <footer className="bg-gray-600 text-amber-50">
      <div className="flex flex-row mx-3 pt-4">
        <h2 className="text-3xl font-semibold mb-4 ">{title}</h2>
      </div>

      <ul className="list-none justify-end text-end pr-20 md:flex-1 md:flex-col">
        {items.map((item, index) => {
          return (
            <li key={index} className=" relative group mb-2">
              <a
                href={item.href}
                className="mb-2 text-lg font-light 
              transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-lg duration-300" >
                {item.name}
              </a>
              <span className="absolute -bottom-1 right-0 w-0 h-[0.1rem] bg-slate-200 group-hover:w-32 group-hover:transition-all"></span>
            </li>
          );
        })}
      </ul>

      <p className="text-medium font-thin mt-4">
        © 2021 Flex. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
