import { footerData } from "../pages/data";

const Footer2 = () => {
  const { title, items } = footerData;

  return (
    <footer id="footer">
      
      <div className="flex justify-center items-center">
        <h2 className="text-2xl">{title}</h2>
      </div>

      <div className="max-w-screen-xl px-4 py-12 pt-3">
        <nav className="flex flex-wrap justify-center ">
          {items.map((item, index) => {
            return (
              <p key={index} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </p>
            );
          })}
        </nav>
      </div>

    </footer>
  );
};

export default Footer2;
