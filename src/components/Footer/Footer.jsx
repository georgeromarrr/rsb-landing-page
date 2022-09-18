import React from "react";
import {
  FooterCredits,
  FooterLogo,
  IndustriesLinks,
  QuickLinks,
  ServicesLinks,
} from "./Components";

const Footer = () => {
  return (
    <div className="bg-[#363636]">
      <hr class="h-px bg-gray-400 border-0"></hr>

      {/* desktop */}
      <div className="hidden desktop:block">
        <div className="bg-white py-10">
          <div className="p-2 flex text-sm mx-40 px-2 justify-between">
            <div className="my-4">
              <FooterLogo styles={{ height: "60px" }} />
            </div>
            <div className="space-x-20 flex">
              <QuickLinks />
              <ServicesLinks />
              <IndustriesLinks />
            </div>
          </div>
        </div>
        <FooterCredits />
      </div>

      {/* large_laptop */}
      <div className="hidden large_laptop:block">
        <div className="bg-white py-10">
          <div className="p-2 flex flex-col text-sm mx-40 px-2 justify-between">
            <div className="mb-8 mt-4">
              <FooterLogo styles={{ height: "60px" }} />
            </div>
            <div className="space-x-20 flex justify-center">
              <QuickLinks />
              <ServicesLinks />
              <IndustriesLinks />
            </div>
          </div>
        </div>
        <FooterCredits />
      </div>

      {/* laptop */}
      <div className="hidden laptop:block">
        <div className="bg-white py-10">
          <div className="p-2 flex flex-col text-sm mx-12 px-3 justify-between">
            <div className="mb-8 mt-4">
              <FooterLogo styles={{ height: "60px" }} />
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 px-auto p-2">
                <QuickLinks />
                <ServicesLinks />
                <IndustriesLinks />
              </div>
            </div>
          </div>
        </div>
        <FooterCredits />
      </div>

      {/* tablet */}
      <div className="hidden tablet:block">
        <div className="bg-white py-10">
          <div className="p-2 flex flex-col text-sm mx-10 px-4">
            <div className="mb-8 mt-4">
              <FooterLogo styles={{ height: "60px" }} />
            </div>
            <div className="flex flex-col justify-center">
              <QuickLinks />
              <ServicesLinks />
              <IndustriesLinks />
            </div>
          </div>
        </div>
        <FooterCredits />
      </div>

      {/* mobile */}
      <div className="hidden mobile:block">
        <div className="bg-white py-10">
          <div className="p-2 flex flex-col text-sm mx-4 px-4">
            <div className="mb-8 mt-4">
              <FooterLogo styles={{ height: "60px" }} />
            </div>
            <div className="flex flex-col justify-center">
              <QuickLinks />
              <ServicesLinks />
              <IndustriesLinks />
            </div>
          </div>
        </div>
        <FooterCredits />
      </div>
    </div>
  );
};

export default Footer;
