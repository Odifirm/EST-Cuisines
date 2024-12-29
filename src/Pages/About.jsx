import React from "react";
import { Icons } from "../Library/IconLybrary";
import image from "../assets/images/img2.jpg";
import image2 from "../assets/images/img3.jpg";

const About = () => {
  return (
    <div className=" bg-primary">
      <div className="p-5 my-1">
        <div className="text-center">
          <p className="text-2xl  font-extralight">About Us</p>
          <p className="order-center flex justify-center p-2 text-xs">
            <Icons.Dwon />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="w-full justify-center items-start gap-20 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className=" rounded-xl object-cover "
                src={image}
                alt="about Us image"
              />
            </div>
            <div className="pt-2">
              <img
                className=" sm:ml-0 ml-auto rounded-xl object-cover"
                src={image2}
                alt="about Us image"
              />
            </div>
          </div>
          <div className="relative h-fit mt-5 bg-white rounded-tl-xl rounded-br-xl rounded-bl-[2.5rem] rounded-tr-[2.5rem]  p-14 mobile:p-10 md:p-14  ">
            <div className="absolute left-3 flex items-center gap-3 text-xs top-3">
              <div className=" w-3 h-3 top-3 left-3 bg-primary rounded-full p-2 "></div>
              <span>WHAT WE DO</span>
            </div>
            <p className="mobile:text-xl sm:text-xl xs:text-xl md:text-2xl lg:text-3xl">
              We provide catering service for all events since 2001
            </p>
            <p className="text-sm mt-5">
              We have been providing exceptional catering and cooking services
              for over 25 years. Our commitment to quality and customer
              satisfaction has made us a trusted name in the industry. Whether
              it's a small gathering or a large event, we ensure that every
              detail is taken care of, delivering delicious food and impeccable
              service.
            </p>
            <p className="text-sm mt-5">
              Our team of experienced chefs and staff are dedicated to making
              your event a success. We use only the freshest ingredients and
              customize our menus to suit your preferences and dietary needs.
              Let us help you create memorable experiences with our top-notch
              catering services. service.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-16">
        <div className="text-xs my-3 ">
          <span>WHAT WE DO</span>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5"> */}
        <div className="flex gap-5 mobile:block sm:block md:flex lg:flex">
          <div className="w-1/4">
            <p className="text-3xl">Event formats</p>
          </div>
          <div className="mobile:w-full sm:w-full md:w-3/4 lg:w-3/4 ">
            <div className="flex items-center justify-between gap-5">
              <div className="w-3/4">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
              </div>
              <div className="cursor-pointer">View More --</div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
