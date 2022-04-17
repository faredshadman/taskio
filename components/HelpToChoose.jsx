import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChooseCard from "./ChooseCard";
const HelpToChoose = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="py-20 font-montserrat">
      <div className="max-w-6xl mx-auto">
        <div className="text-2xl sm:text-4xl pb-10 px-10 sm:px-0 text-primary font-extrabold text-center">
          <p>Necə seçməli? Sizin üçün</p>
          <p>
            hazırladığımız <span className="text-secondary">məsləhətlərə</span>{" "}
            göz atın!
          </p>
        </div>
        <Slider className="md:mx-4" {...settings}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <ChooseCard key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HelpToChoose;
