import React from "react";
import AccessDenieds from "../../assets/Vector illustrator/403.avif";

const AccessDenied = () => {
  return (
    <div className="h-[90%] w-full flex items-center justify-center">
      <div>
        <div className="block  justify-center">
          <img
            src={AccessDenieds}
            alt=""
            className=" w-4/5 md:w-3/5 mix-blend-darken"
          />
        </div>
        <div className="">
          <p className="text-center text-2xl md:text-5xl font-bold m-3 text-gray-800">
            We are Sorry...
          </p>
          <p className="text-center font-semibold text-gray-400">
            The Page your'r trying to access has restricted access. <br />{" "}
            Please refer to your system administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
