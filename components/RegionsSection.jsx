import Image from "next/image";
import { BsPinMap } from "react-icons/bs";
import RegionCard from "./RegionCard";
const RegionsSection = ({ allRegions }) => {
  return (
    <section className="py-20 font-montserrat">
      <div className="max-w-6xl mx-auto">
        <p className="text-3xl sm:text-5xl mt-2 text-center sm:text-left text-primary font-extrabold">
          Xidmət göstərilən bölgələr
        </p>
        <div className="flex flex-col justify-center items-center mt-10 sm:flex-row sm:justify-between">
          <div className="mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {allRegions.map((region, index) => (
                <RegionCard key={index} region={region} />
              ))}
            </div>
          </div>
          <div className="hidden xl:inline-block">
            <Image
              src="/img/location_pin.svg"
              width={400}
              height={400}
              alt="location pin region"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
