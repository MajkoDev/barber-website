import { footerData } from "../pages/data";

const Footer = () => {
  const { title, items } = footerData;

  return (
    <footer className="bg-gray-800 text-amber-50 ">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="flex">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href} className='m-2 font-light'>{item.name}</a>
            </li>
          );
        })}
      </ul>
      <div className="">

      </div>
      <p className="text-medium font-thin mt-4">© 2021 Flex. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
