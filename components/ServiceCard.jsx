const ServiceCard = () => {
  return (
    <div className=" relative overflow-hidden p-2 m-4 md:flex gap-2 border-2 rounded-xl max-w-[500px]">
      <div className="mb-2">
        <h2 className="font-semibold text-lg text-gray-900">Service Card</h2>
        <p className="font-300 text-sm text-gray-700">
          Description of lorem ipsum dolor sit amet consectetur, adipisicing
          elit
        </p>
      </div>
      <div className="min-w-[120px] flex sm:flex-row md:flex-col justify-evenly items-center ">
        <p className="font-semibold text-normal text-gray-900">30 minutes</p>
        <button className="text-amber-600 hover:text-amber-400 curson-pointer font-bold text-base p-2">
          Objednaj
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
