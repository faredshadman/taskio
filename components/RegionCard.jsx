import { BsPinMap } from "react-icons/bs";
const RegionCard = ({ region }) => {
  return (
    <div className="inline-flex hover:scale-110 transition-all duration-200 ease-in-out rounded-lg shadow-lg bg-white py-2 pl-6 pr-28 items-center space-x-4">
      <BsPinMap className="text-secondary text-2xl" />
      <div>
        <h3 className="text-lg text-primary font-extrabold">{region}</h3>
        <span className="text-sm">Bütün rayonlar daxil</span>
      </div>
    </div>
  );
};

export default RegionCard;
