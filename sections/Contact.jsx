import Map from "../components/Map";

const Contact = () => {
  return (
    <div id='contact' className="section">
      <h1 className="text-2xl font-extralight mb-6">Contact</h1>

      <div className="intro">
        <h2 className="subtitle"></h2>
        <h1 className="title"></h1>
        <p className="description"></p>
      </div>

      <div className="options">
        <div className="phone">Phone</div>
        <div className="mail">Email</div>
        <div className="socials">Socials</div>
      </div>

      <Map />
    </div>
  );
};

export default Contact;
