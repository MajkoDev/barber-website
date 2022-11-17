const Form = () => {
  return (
    <div className="max-w-xl w-full">
      <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col">
          <div className="gap-2 flex flex-1">
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            ></input>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="surname"
              type="text"
              placeholder="Surname"
            ></input>
          </div>
          <input
            className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          ></input>
          <div class="flex justify-center">
            



   
</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
