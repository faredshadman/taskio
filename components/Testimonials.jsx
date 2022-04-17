import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useState } from "react";
const Testimonials = () => {
  const [value, setValue] = useState(3.5);
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    centerPadding: "150px",
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="py-20 font-montserrat bg-[#85c0ab33]">
      <h1 className="font-extrabold text-5xl text-center">
        Müştərilərdən <span className="text-secondary">rəylər</span>
      </h1>

      <Slider className="mt-10" {...settings}>
        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-white shadow-lg rounded-md p-6">
            <div className="flex items-start justify-between">
              <Image
                className="rounded-full"
                src="/img/profile_1.jpg"
                width={56}
                height={56}
                alt="profile picture of person who commented"
              />
              <div className="w-full text-sm ml-4 font-medium text-primary">
                <p className="tracking-tight">
                  Laoreet condimentum tristique nunc consectetur semper semper
                  nulla laoreet elit. Neque velit amet lorem varius ac tempor
                  egestas aenean. Vel ultricies nunc blandit proin.
                </p>
                <div className="pt-6">
                  <div className="flex pb-2 items-center justify-between">
                    <span>Jakob Franci</span>
                    <li className="pr-4">Designer</li>
                  </div>
                  <Rating
                    size="small"
                    name="half-rating-read"
                    defaultValue={value}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
