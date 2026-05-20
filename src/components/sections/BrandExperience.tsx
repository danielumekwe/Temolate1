export default function BrandExperience() {
  const clients = [
    "LearnAfrica",
    "Red Star Express",
    "Vitafoam",
    "Chams",
    "iConcepts",
    "FMDQ",
    "Redcare HMO",
    "SIFAX Group",
    "GTL Trustees",
    "CardinalStone",
    "Abbey Mortgage Bank",
    "Alternative Finance",
    "STL Trustees",
    "Lekki Port",
    "UTL Trust",
    "Ibile Holdings",
    "Baba Ijebu",
    "iTECO Network",
    "First E&P",
    "Weco Systems",
  ];

  return (
    <section className="bg-black text-white py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-neutral-500 mb-8">
          Brand Experience
        </p>

        <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-20">
          We are humble and proud to
          <br />
          work with{" "}
          <span className="text-[#D9862B]">amazing</span> clients.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="h-28 bg-neutral-900 border border-neutral-800 flex items-center justify-center px-6 hover:border-[#D9862B] transition"
            >
              <span className="text-neutral-300 font-bold text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}