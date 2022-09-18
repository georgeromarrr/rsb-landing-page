import React from "react";
import { SectionTitle, SectionSubTitle } from "./Components";

const Services = () => {
  return (
    <div className="mb-32">
      <div className="mx-40 p-2 laptop:mx-6 tablet:mx-6 mobile:mx-1">
        <SectionTitle />
      </div>
      <div className="mx-40 p-2 laptop:mx-6 tablet:mx-6 mobile:mx-1">
        <SectionSubTitle />
      </div>
    </div>
  );
};

export default Services;
