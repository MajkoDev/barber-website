import Data from "./Data";
import Map from "./Map";
import Maps from "./Maps";

const Contact = () => {
  return (
    <>
      <div id="contact" className="section py-24 min-h-[70vh]">
        {/* TITLE */}
        <h1 class="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Kontaktujte nás
        </h1>
        {/* CONTACTS */}
        <Data />
      </div>
      {/* MAP */}
      <Map />
      <Maps />
    </>
  );
};

export default Contact;
