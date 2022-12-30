import { barberData } from "../pages/data";

const BarberCard = () => {
  const { persons } = barberData;

  const list = persons.map((person, index) => {
    <p>{person.subtitle}</p>

  })

  return (
    <div className="m-2 border w-64 p-4 text-center">
      <div class="w-full lg:px-8 p-4 md:p-0 bg-gray-600 h-[22rem]">
      </div>

      <h3 className="font-semibold text-xl mt-2">Barber Card {list}</h3>
      {list}
    </div>
  );
};

export default BarberCard;

{
  /*
        className="section h-[100vh] flex items-center justify-center bg-fixed bg-center bg-cover custom-img"
*/
}
