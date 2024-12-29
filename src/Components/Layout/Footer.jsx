import React from "react";
import { Icons } from "../../Library/IconLybrary";

const Footer = () => {
  return (
    <div className="relative h-auto bg-black rounded-t-lg py-10">
      <div className="flex justify-center">
        <div className="z-0 -top-8 w-40 h-40 md:w-52 md:h-52 flex justify-center items-center bg-black rounded-full absolute">
          <span className="font-bold text-center h-fit -mt-12 p-2 text-textprimary text-lg md:text-xl">
            E S T Cuisines
          </span>
        </div>
      </div>
      <div className="relative  z-10 mt-20 h-fit text-center px-5 md:px-10 rounded-lg text-[12px] md:text-[0.7rem] text-base-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-4">
          <div className="text-left">
            <div>
              <span className="text-lg">Location</span>
            </div>
            <div className="py-5">
              <span className="">
                Gouda Sahi 2nd Line, Mandiapalli Berhampur University, near by
                Fhishery college, Brahmapur, Odisha 760007
              </span>
            </div>
          </div>

          <div className="text-left px-8">
            <div>
              <span className="text-lg">Contact</span>
            </div>
            <div className="py-5">
              <p>+91 760 90 52 502</p>
              <p>
                <a href="mailto:info@gmail.com">info@email.com</a>
              </p>
            </div>
            <div>Mon - Sun: 10:00 - 6:00 PM</div>
          </div>
          <div>
            <p className="text-[12px] md:text-[0.7rem] text-base-100">
              Let's make your event memorable and unforgettable with our
              catering.
            </p>
            <p className="m-3">Join Our email List</p>
            <div class="relative my-6">
              <input
                type="email"
                required
                class="w-full bg-white text-black bg-transparent 
                 text-sm border rounded-full pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
                placeholder="Enter email"
              />
              <button
                class="absolute top-1 right-1 flex items-center bg-none  py-1 px-2.5 border border-transparent text-center text-sm 
                text-textprimary outline-none
                transition-all gap-2 shadow-sm hover:shadowfocus:shadow-none  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Subcribe <Icons.Right className="text-sm" />
              </button>
            </div>
          </div>
          <div>
            <span className="text-lg">Explore More</span>
          </div>
          <div>
            <span className="text-lg">Events</span>
          </div>
        </div>
        <hr />
        <div className="text-sm flex flex-col md:flex-row justify-between items-center my-2">
          <div className="flex gap-1 items-center">
            Copyright ©
            <span className="text-textprimary cursor-pointer">
              <a href="https://odifirm.in">ODIFIRM</a>
            </span>
            . All rights reserved.
          </div>
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            FOLLOW US.
            <Icons.Facebook className="text-sm" />
            <Icons.Twitter className="text-sm" />
            <Icons.Instagram className="text-sm" />
            <Icons.Linkedin className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
