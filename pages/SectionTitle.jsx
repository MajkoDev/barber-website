function SectionTitle({ children }) {
  return (
    <h1 class="mb-12 text-4xl font-extrabold text-gray-600 md:text-5xl lg:text-6xl w-full flex justify-center">
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {children}
      </span>
    </h1>
  );
}

export default SectionTitle;
