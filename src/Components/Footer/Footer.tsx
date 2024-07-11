import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto p-6 flex justify-between items-center max-mobile:flex-col max-mobile:items-start max-mobile:gap-4">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="" width={60} />
          <span className="text-[0.8rem] italic font-[300]">
            Our Vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[2rem] font-bold text-orange-500">
            Information
          </span>
          <span className="text-[0.9rem] italic font-[300]">
            145 New york, FL 4571, USA
          </span>

          <div className="flex items-center mt-4 font-[400] justify-center gap-3 text-[0.8rem] text-blue">
            <span>Property</span>
            <span>Service</span>
            <span>Products</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
