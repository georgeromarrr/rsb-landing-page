import { Link, useNavigate } from "react-router-dom";
import imgLogo from "../../assets/img/logo.png";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon,
  TwitterIcon,
} from "../../assets/icons/Icons";

export const navigation = [
  { name: "Services", page: "services" },
  { name: "Industries", page: "industries" },
  { name: "Careers", page: "careers" },
  { name: "About Us", page: "about-us" },
  { name: "Quality Assurance", page: "quality-assurance" },
  { name: "Seminars", page: "seminars" },
  { name: "News", page: "news" },
];

export const industries = [
  {
    name: "BANKS AND NON-BANKING FINANCIAL INSTITUTIONS",
    page: "industries/1",
  },
  { name: "NON-PROFIT ORGANIZATIONS", page: "industries/2" },
  { name: "ENERGY", page: "industries/3" },
  { name: "MINING", page: "industries/4" },
  { name: "REAL ESTATE DEVELOPMENT", page: "industries/5" },
  { name: "RETAIL ", page: "industries/6" },
  { name: "MANUFACTURING", page: "industries/7" },
  {
    name: "BRANCHES, ROHQ, REPRESENTATIVE AND HEAD OFFICES",
    page: "industries/8",
  },
];

export const services = [
  { name: "Assurance", page: "assurance" },
  { name: "Non-assurance", page: "non-assurance" },
  { name: "Advisory", page: "advisory" },
  { name: "Taxation", page: "taxation" },
  { name: "Technical and Training", page: "technical-and-training" },
];

export const socialMedia = [
  {
    name: "instagram",
    icon: (
      <InstagramIcon className="h-4 w-4 fill-white hover:fill-golden_frame" />
    ),
  },
  {
    name: "facebook",
    icon: (
      <FacebookIcon className="h-4 w-4 fill-white hover:fill-golden_frame" />
    ),
  },
  {
    name: "linkedin",
    icon: (
      <LinkedInIcon className="h-4 w-4 fill-white hover:fill-golden_frame" />
    ),
  },
  {
    name: "youtube",
    icon: (
      <YouTubeIcon className="h-4 w-4 fill-white hover:fill-golden_frame" />
    ),
  },
  {
    name: "twitter",
    icon: (
      <TwitterIcon className="h-4 w-4 fill-white hover:fill-golden_frame" />
    ),
  },
];

export const FooterLogo = ({ styles }) => {
  return (
    <>
      <img src={imgLogo} alt="RSB Logo" style={styles} />
    </>
  );
};

export const QuickLinks = () => {
  const redirectTo = useNavigate();
  return (
    <>
      <div className="my-4 space-y-3">
        <h2 className="text-lg uppercase font-semibold">Quick Links</h2>
        <ul className="text-sm space-y-1">
          {navigation.map((item) => (
            <li
              className="uppercase cursor-pointer hover:text-golden_frame"
              key={item.name}
              onClick={() => redirectTo(`/${item.page}`)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const IndustriesLinks = () => {
  const redirectTo = useNavigate();
  return (
    <>
      <div className="my-4 space-y-3">
        <h2 className="text-lg uppercase font-semibold">Industries</h2>
        <ul className="text-sm space-y-1">
          {industries.map((item) => (
            <li
              className="uppercase cursor-pointer hover:text-golden_frame"
              key={item.name}
              onClick={() => redirectTo(`/${item.page}`)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const ServicesLinks = () => {
  const redirectTo = useNavigate();
  return (
    <>
      <div className="my-4 space-y-3">
        <h2 className="text-lg uppercase font-semibold">Services</h2>
        <ul className="text-sm space-y-1">
          {services.map((item) => (
            <li
              className="uppercase cursor-pointer hover:text-golden_frame"
              key={item.name}
              onClick={() => redirectTo(`/${item.page}`)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const FooterCredits = () => {
  return (
    <>
      {/* desktop */}
      <div className="hidden desktop:block">
        <div className="pb-6 pt-5 text-sm text-white mx-40 px-2 flex justify-between items-center">
          <div>
            © 2014 - 2022 R.S. Bernaldo & Associates. All Rights Reserved |
            Handfully created by
            <span className="italic font-medium cursor-pointer hover:text-gold">
              <a href="https://www.linkedin.com/in/romar-george-doinog-a027901a9">{` georgeromarrr`}</a>
            </span>
          </div>
          <div className="flex space-x-4">
            {socialMedia.map((item) => (
              <div
                className="rounded-full border border-white p-2 cursor-pointer hover:border-cerulean"
                key={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* large_laptop */}
      <div className="hidden large_laptop:block">
        <div className="pb-5 pt-7 text-sm text-white mx-40 px-2 flex flex-col justify-center items-center">
          <div className="flex space-x-4 mb-3">
            {socialMedia.map((item) => (
              <div
                className="rounded-full border border-white p-2 cursor-pointer hover:border-cerulean"
                key={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="my-3">
            © 2014 - 2022 R.S. Bernaldo & Associates. All Rights Reserved |
            Handfully created by
            <span className="italic font-medium cursor-pointer hover:text-gold px-1">
              <a href="https://www.linkedin.com/in/romar-george-doinog-a027901a9">{`  georgeromarrr`}</a>
            </span>
          </div>
        </div>
      </div>

      {/* laptop */}
      <div className="hidden laptop:block">
        <div className="pb-6 pt-7 text-sm text-white mx-10 flex flex-col justify-center items-center">
          <div className="flex space-x-4 mb-3">
            {socialMedia.map((item) => (
              <div
                className="rounded-full border border-white p-2 cursor-pointer hover:border-cerulean"
                key={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="my-3 flex justify-center">
            © 2014 - 2022 R.S. Bernaldo & Associates. All Rights Reserved |
            Handfully created <span className="mx-1"> by </span>
            <span>
              <a
                className="italic font-medium cursor-pointer hover:text-gold"
                href="https://www.linkedin.com/in/romar-george-doinog-a027901a9"
              >
                georgeromarrr
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="hidden tablet:block">
        <div className="pb-6 pt-7 text-sm text-white mx-1 grid grid-cols items-center">
          <div className="flex space-x-4 mb-3 justify-center">
            {socialMedia.map((item) => (
              <div
                className="rounded-full border border-white p-2 cursor-pointer hover:border-cerulean"
                key={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="my-3 flex flex-col mx-auto">
            <p className="mx-auto">© 2014 - 2022 R.S. Bernaldo & Associates.</p>
            <span className="mx-auto space-x-1">
              <span>All Rights Reserved | Handfully created by</span>
              <a
                className="italic font-medium cursor-pointer hover:text-gold"
                href="https://www.linkedin.com/in/romar-george-doinog-a027901a9"
              >
                georgeromarrr
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden mobile:block">
        <div className="pb-6 pt-7 text-xs text-white mx-1 grid grid-cols items-center">
          <div className="flex space-x-4 mb-3 justify-center">
            {socialMedia.map((item) => (
              <div
                className="rounded-full border border-white p-2 cursor-pointer hover:border-cerulean"
                key={item.name}
              >
                {item.icon}
              </div>
            ))}
          </div>
          <div className="my-3 flex flex-col mx-auto">
            <p className="mx-auto">© 2014 - 2022 R.S. Bernaldo & Associates.</p>
            <span className="mx-auto space-x-1">
              <span>All Rights Reserved | Handfully created by</span>
              <a
                className="italic font-medium cursor-pointer hover:text-gold"
                href="https://www.linkedin.com/in/romar-george-doinog-a027901a9"
              >
                georgeromarrr
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
