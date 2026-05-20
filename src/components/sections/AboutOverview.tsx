export default function AboutOverview() {
  const items = [
    {
      icon: "✦",
      title: "Founded in 2017",
      desc: "Web365 Nigeria has built digital solutions and online platforms helping businesses grow.",
    },

    {
      icon: "◉",
      title: "Dedicated Team",
      desc: "Designers, developers and marketers working together to deliver quality solutions.",
    },

    {
      icon: "★",
      title: "Trusted by Clients",
      desc: "Serving businesses, organizations and entrepreneurs across multiple industries.",
    },

    {
      icon: "↗",
      title: "Over 550 Projects",
      desc: "Website design, ecommerce, branding, SEO and digital infrastructure projects delivered.",
    },

    {
      icon: "◎",
      title: "Professional Services",
      desc: "Helping businesses build strong digital experiences and online visibility.",
    },

    {
      icon: "✧",
      title: "Our Philosophy",
      desc: "Build websites that create visibility, trust and measurable business growth.",
    },
  ];

  return (
    <section className="bg-black text-white py-32">

      <div className="max-w-7xl mx-auto px-10">

        <p className="uppercase tracking-[0.4em] text-center text-neutral-500 mb-8">
          Overview
        </p>

        <h2 className="text-center text-5xl lg:text-7xl font-black mb-24">
          WEB365 at a{" "}
          <span className="text-[#D9862B]">
            glance
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-neutral-800">

          {items.map((item, index) => (
            <div
              key={index}
              className="
              p-12
              border-r
              border-b
              border-neutral-800
              min-h-[280px]
              "
            >

              <div className="text-[#D9862B] text-4xl mb-8">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black mb-8">
                {item.title}
              </h3>

              <p className="text-neutral-400 leading-9 text-lg">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}