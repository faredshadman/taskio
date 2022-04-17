import Image from "next/image";
const ThirdHeroSection = () => {
  return (
    <section className="bg-[#85c0ab2c] relative font-montserrat py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:inline-block">
          <Image
            src="/img/third_section_svg.svg"
            width={400}
            height={400}
            alt="female metis t-shirt pose"
          />
        </div>
        <div>
          <div className="text-center">
            <span className="font-extrabold text-2xl text-secondary">
              Taskio
            </span>
            <p className="text-4xl sm:text-5xl mt-2 text-primary font-extrabold">
              Evdən çıxmadan !
            </p>
            <p className="sm:text-5xl text-4xl mt-2 text-secondary font-extrabold">
              işləri həll edin
            </p>
          </div>
          <ul className="list-disc mx-6 sm:mx-0 sm:ml-2 space-y-4 mt-10 marker:text-secondary inline-block">
            <li>
              Sagittis id placerat amet, blandit mi feugiat. Urna velit in vitae
              donec orci, felis. Amet netus quam elit amet, est at pellentesque.
              Donec non nisl velit elementum duis.
            </li>
            <li>Sagittis id placerat amet, blandit mi feugiat. </li>
            <li>
              Amet netus quam elit amet, est at pellentesque. Donec non nisl
              velit elementum duis.
            </li>
            <li>Sagittis id placerat amet, blandit mi feugiat.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThirdHeroSection;
