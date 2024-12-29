import React, { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../assets/Data/data";
import { Icons } from "../../Library/IconLybrary";

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="p-8">
      <div className="text-center font-bold">
        <p className="text-base text-black">Our Services</p>
        <span className="text-[50px] text-black">From concept to cuisine</span>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseOver={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="flex justify-center">
                <img
                  src={service.image}
                  alt="food"
                  className={`w-32 h-32 rounded-full transform transition-transform duration-300 ${
                    hoverIndex === index ? "scale-110" : ""
                  }`}
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold m-3 text-textprimary">
                  {service.title}
                </p>
                <p className="text-lg font-semibold text-black">
                  {service.subtitle}
                </p>
                <p className="text-xs p-3">{service.shortdesc}</p>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/Service"
                  className="flex justify-center mt-5 hover:bg-textprimary hover:text-white p-2 w-fit rounded-full hover:animate-bounce"
                >
                  <Icons.Right />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
