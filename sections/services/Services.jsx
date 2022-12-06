import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  return (
    <div id='services' className="section h-screen">
      <h1>Services</h1>
      <div className="intro">
        <h2 className="subtitle"></h2>
        <h1 className="title"></h1>
        <p className="description"></p>
      </div>
      <div className="not-prose my-8 grid grid-cols-1 gap sm:grid-cols-2">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
