import BarberCard from "../components/BarberCard";

const Barbers = () => {
  return (
    <div id='barbers' className="section">
      <h1 className="text-5xl font-extralight mb-6">Barbers Section</h1>

      <div className="intro">
        <h2 className="subtitle"></h2>
        <h1 className="title"></h1>
        <p className="description"></p>
      </div>
      <div className="barbers">
        <BarberCard />
        <BarberCard />
        <BarberCard />
      </div>
    </div>
  );
};

export default Barbers;
