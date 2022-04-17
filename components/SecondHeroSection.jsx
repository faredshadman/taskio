import Image from "next/image";
const SecondHeroSection = () => {
  return (
    <section className="bg-[#85c0ab2c] relative font-montserrat py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2">
        <div>
          <div className="text-center">
            <span className="font-bold text-secondary">Taskio</span>
            <p className="sm:text-6xl text-4xl mt-2 text-primary font-extrabold">
              Günlük həyatınızı
            </p>
            <p className="sm:text-6xl text-4xl mt-2 text-secondary font-extrabold">
              asanlaşdırır!
            </p>
          </div>
          <ul className="list-disc mx-8 sm:ml-2 sm:mx-0 space-y-4 mt-10 marker:text-secondary inline-block">
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
        <div className="hidden xl:inline-block">
          <Image
            src="/img/second_section_svg.svg"
            width={500}
            height={500}
            alt="female metis t-shirt pose"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondHeroSection;
