import Image from "next/image";
const ChooseCard = () => {
  return (
    <div className="rounded-lg mx-auto z-50 group overflow-hidden w-[350px] h-[400px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        src="/img/choose_service_img.jpg"
        alt="help to choose best option for services"
      />
      <div className="z-10 p-6 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in absolute bottom-0 text-white">
        <p className="opacity-70 text-sm">29 Avq 2021</p>
        <p className="mt-2 text-lg font-bold">
          Elementum scelerisque iaculis orci ultrices risus ac curabitur
          adipiscing.
        </p>
      </div>
    </div>
  );
};

export default ChooseCard;
