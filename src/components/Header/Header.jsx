import React from "react";
import {
  DesktopHeader,
  LargeLaptopHeader,
  LaptopHeader,
  TabletHeader,
  MobileHeader,
} from "./Components";

const Header = () => {
  return (
    <div className="mb-24">
      <div className="hidden desktop:block">
        <DesktopHeader />
      </div>

      <div className="hidden large_laptop:block">
        <LargeLaptopHeader />
      </div>

      <div className="hidden laptop:block">
        <LaptopHeader />
      </div>

      <div className="hidden tablet:block">
        <TabletHeader />
      </div>

      <div className="hidden mobile:block">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
