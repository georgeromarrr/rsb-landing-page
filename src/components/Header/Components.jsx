import desktop_img from "../../assets/img/bg_1920x859.jpg";
import laptop_img from "../../assets/img/bg_1200x859.jpg";
import tablet_img from "../../assets/img/bg_770x400.jpg";
import mobile_img from "../../assets/img/bg_425x375.jpg";

// background images
export const DesktopBg = () => {
  return (
    <>
      <img src={desktop_img} alt="1920x859" className="w-full" />
    </>
  );
};

export const LaptopBg = () => {
  return (
    <>
      <img src={laptop_img} alt="1200x859" className="w-full" />
    </>
  );
};

export const TabletBg = () => {
  return (
    <>
      <img src={tablet_img} alt="770x400" className="w-full" />
    </>
  );
};

export const MobileBg = () => {
  return (
    <>
      <img src={mobile_img} alt="425x375" className="w-full" />
    </>
  );
};

// components
export const DesktopHeader = () => {
  return (
    <>
      <div className="relative">
        <DesktopBg />
        <div className="absolute top-0 w-full h-full flex items-end bg-cerulean/60">
          <div className="mx-auto text-start">
            <div className="px-8 py-24 mx-40 drop-shadow-2xl">
              <h1 className="text-6xl font-bold pb-6 tracking-wide text-white">
                We are professionals committed in providing you quality service.
              </h1>
              <p className="text-2xl text-white">
                Since 1994, RSBA is your all-around professional service
                provider.
              </p>
              <button
                type="button"
                className="mt-16 text-white font-semibold text-lg tracking-wide px-12 py-3 border-2 border-white rounded-sm hover:border-golden_frame hover:bg-golden_frame"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const LargeLaptopHeader = () => {
  return (
    <>
      <div className="relative">
        <DesktopBg />
        <div className="absolute top-0 w-full h-full flex items-end bg-cerulean/60">
          <div className="mx-auto text-start">
            <div className="px-8 py-24 mx-40 drop-shadow-2xl">
              <h1 className="text-5xl font-bold pb-4 tracking-wide text-white">
                We are professionals committed in providing you quality service.
              </h1>
              <p className="text-xl text-white">
                Since 1994, RSBA is your all-around professional service
                provider.
              </p>
              <button
                type="button"
                className="mt-12 text-white font-semibold tracking-wide px-12 py-3 border-2 border-white rounded-sm hover:border-golden_frame hover:bg-golden_frame"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const LaptopHeader = () => {
  return (
    <>
      <div className="relative">
        <TabletBg />
        <div className="absolute top-0 w-full h-full flex items-end bg-cerulean/60">
          <div className="mx-auto text-start">
            <div className="px-8 py-16 mx-6 drop-shadow-2xl">
              <h1 className="text-4xl font-bold pb-4 tracking-wide text-white">
                We are professionals committed in providing you quality service.
              </h1>
              <p className="text-base text-white">
                Since 1994, RSBA is your all-around professional service
                provider.
              </p>
              <button
                type="button"
                className="mt-8 text-white font-semibold tracking-wide px-12 py-3 border-2 border-white rounded-sm hover:border-golden_frame hover:bg-golden_frame"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TabletHeader = () => {
  return (
    <>
      <div className="relative">
        <LaptopBg />
        <div className="absolute top-0 w-full h-full flex items-end bg-cerulean/60">
          <div className="mx-auto text-start">
            <div className="px-8 py-12 mx-4 drop-shadow-2xl">
              <h1 className="text-3xl font-bold pb-2 tracking-wide text-white">
                We are professionals committed in providing you quality service.
              </h1>
              <p className="text-sm text-white">
                Since 1994, RSBA is your all-around professional service
                provider.
              </p>
              <button
                type="button"
                className="mt-6 text-white font-semibold tracking-wide px-10 py-2 border-2 border-white rounded-sm hover:border-golden_frame hover:bg-golden_frame"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MobileHeader = () => {
  return (
    <>
      <div className="relative">
        <MobileBg />
        <div className="absolute top-0 w-full h-full flex items-end bg-cerulean/60">
          <div className="mx-auto text-start">
            <div className="px-4 py-8 mx-4 drop-shadow-2xl">
              <h1 className="text-2xl font-bold pb-1 tracking-wide text-white">
                We are professionals committed in providing you quality service.
              </h1>
              <p className="text-xs text-white">
                Since 1994, RSBA is your all-around professional service
                provider.
              </p>
              <button
                type="button"
                className="mt-4 text-white text-sm font-semibold tracking-wide px-10 py-2 border-2 border-white rounded-sm hover:border-golden_frame hover:bg-golden_frame"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
