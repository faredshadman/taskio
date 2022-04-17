import { BsArrowRightShort } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServicesCard from "./ServicesCard";
const PopularServices = ({ services }) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="font-montserra pb-10">
      <div className="max-w-6xl mx-auto pt-10">
        <div className="flex items-center justify-around font-bold sm:justify-between">
          <h1 className="text-xl sm:text-5xl ">
            Populyar <span className="text-secondary">Xidmətlər</span>
          </h1>
          <button className="flex text-primary font-bold italic underline items-center">
            Daha çox
            <BsArrowRightShort className="text-2xl text-secondary ml-2" />
          </button>
        </div>
        <Slider className="mt-10 font-montserrat" {...settings}>
          {services.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularServices;
