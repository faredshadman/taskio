import Image from "next/image";
import { ImPriceTag } from "react-icons/im";
const ServicesCard = ({ service }) => {
  return (
    <div className="rounded-lg transition-all duration-100 ease-in p-4 mb-10 text-primary shadow-xl relative flex flex-col">
      <Image
        className="rounded-lg"
        alt="photo"
        src={service.url}
        objectFit="cover"
        width={200}
        height={220}
      />
      <h2 className="font-extrabold mt-2">{service.name}</h2>
      <p className="text-sm opacity-60">{service.body}</p>
      <span className="font-bold mt-2 flex items-center">
        <ImPriceTag className="mr-4 text-secondary" />
        <span className="text-xl mr-2">
          {service.minPrice} - {service.maxPrice}
        </span>
        ₼
      </span>
    </div>
  );
};

export default ServicesCard;
