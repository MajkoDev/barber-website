import { barberData } from "../pages/data";

const BarberCard = () => {
  const { persons } = barberData;

  const list = persons.map((person, index) => {
    <p id={index}>{person.subtitle}</p>;
  });

  return (
    <div className="m-2  w-96 p-4 text-center">
      <div className="">
        <div className="w-full lg:px-8 p-4 md:p-0 h-96 profile-2 bg-center bg-cover rounded-lg"></div>
      </div>

      <h3 className="font-semibold text-2xl mt-3">Barber Card {list}</h3>
      <h4 className="font-light text-lg italic mb-1">Barber</h4>
      <div id="socials" className="flex flex-auto justify-center items-center">
        <a href="">
          <svg
            className="h-7 w-7 m-1 hover:bg-slate-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
          </svg>
        </a>
        <a href="">
          <svg
            className="h-8 w-8 m-1 hover:bg-slate-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

{
  /*

profile-3
*/
}

export default BarberCard;
