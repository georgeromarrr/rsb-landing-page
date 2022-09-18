import React from "react";
import img1 from "../../assets/img/img_pkf_logo.jpg";
import img2 from "../../assets/img/image-vert02.jpg";
import img3 from "../../assets/img/image-vert03.jpg";
import img4 from "../../assets/img/image-vert04.jpg";

const Links = () => {
  return (
    <div className="mb-36 mx-40 p-2 laptop:mx-6 tablet:mx-6 mobile:mx-1">
      {/* desktop & large_laptop */}
      <div className="hidden desktop:block large_laptop:block">
        <div className="mx-4 p-2 flex justify-between items-center">
          <div className="cursor-pointer">
            <img src={img1} alt="pkf_logo" className="h-[82px] p-2" />
          </div>
          <div className="cursor-pointer">
            <img src={img2} alt="bd&p_logo" className="h-[82px] p-2" />
          </div>
          <div className="cursor-pointer">
            <img src={img3} alt="asnaf_logo" className="h-[82px] p-2" />
          </div>
          <div className="cursor-pointer">
            <img src={img4} alt="ctd_logo" className="h-[82px] p-2" />
          </div>
        </div>
      </div>

      {/* laptop */}
      <div className="hidden laptop:block">
        <div className="mx-4 p-2 items-center grid grid-cols-2 gap-10">
          <div className="cursor-pointer mx-auto ">
            <img src={img1} alt="pkf_logo" className="w-52 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img2} alt="bd&p_logo" className="w-55 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img3} alt="asnaf_logo" className="w-72 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img4} alt="ctd_logo" className="w-54 p-2" />
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="hidden tablet:block">
        <div className="mx-4 p-2 items-center grid grid-cols-1 gap-10">
          <div className="cursor-pointer mx-auto ">
            <img src={img1} alt="pkf_logo" className="w-72 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img2} alt="bd&p_logo" className="w-80 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img3} alt="asnaf_logo" className="w-96 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img4} alt="ctd_logo" className="w-80 p-2" />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden mobile:block">
        <div className="mx-4 p-2 items-center grid grid-cols-1 gap-10">
          <div className="cursor-pointer mx-auto ">
            <img src={img1} alt="pkf_logo" className="w-60 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img2} alt="bd&p_logo" className="w-64 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img3} alt="asnaf_logo" className="w-96 p-2" />
          </div>
          <div className="cursor-pointer mx-auto">
            <img src={img4} alt="ctd_logo" className="w-642 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
