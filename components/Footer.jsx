import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-[#F0F3F4] font-montserrat mx-auto text-center lg:text-left">
      <div className="max-w-6xl mx-auto pt-10">
        <div className="flex pb-10 justify-center items-center flex-col lg:justify-between  border-b-[1px] border-[#B5B5B5] sm:items-start sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10">
          <div className="sm:w-3/12 w-8/12 mx-auto">
            <h1 className="text-secondary mb-6 font-extrabold text-4xl">
              Taskio
            </h1>
            <p className="mb-6">
              Fermentum nulla integer consequat porttitor vitae nulla
              scelerisque at
            </p>
            <div className="flex items-center justify-center text-xl space-x-4">
              <FaFacebook className="text-[blue] transform transition duration-200 hover:scale-125" />
              <FaTelegramPlane className="transform transition duration-200 hover:scale-125" />
              <FaInstagram className="text-[red] transform transition duration-200 hover:scale-125" />
              <FaYoutube className="text-[red] transform transition duration-200 hover:scale-125" />
              <FaGithub className="transform transition duration-200 hover:scale-125" />
            </div>
          </div>
          <div className="grid w-9/12 lg:grid-cols-3 grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold pb-6 text-gray-800">
                Kateqoriyalar
              </h5>
              <ul className="list-none mb-0 space-y-4">
                <li>Usta</li>
                <li>Yük daşıma</li>
                <li>Təmizlik</li>
                <li>Bütün kateqoriyalar</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold pb-6 text-gray-800">
                Gizlilik siyasəti
              </h5>

              <ul className="list-none mb-0 space-y-4">
                <li>Şərtlər və qaydalar</li>
                <li>Şəxsi məlumarların gizliliyi</li>
                <li>Ödəmə üsulları</li>
                <li>Ərazilər</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold pb-6 text-gray-800">Şirkət</h5>

              <ul className="list-none mb-0 space-y-4">
                <li>Takio haqqında</li>
                <li>Necə Taskioçu bilərəm?</li>
                <li>Şikayət bildir</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex items-center py-4 space-y-10 sm:space-y-0 flex-col sm:flex-row justify-between">
          <span>
            Copyright © {new Date().getFullYear()} Taskio. Bütün hüquqlar
            qorunur.
          </span>
          {/*  */}
          <div className="flex text-xl space-x-4">
            <RiMastercardFill className="text-secondary transform transition duration-200 hover:scale-125" />
            <RiVisaLine className="text-primary transform transition duration-200 hover:scale-125" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
