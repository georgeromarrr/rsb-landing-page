import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MenuIcon,
  ExitIcon,
  SearchIcon,
  ArrowIcon,
} from "../../assets/icons/Icons";
import logo from "../../assets/img/logo.png";

// logo
export const BrandLogo = ({ styles }) => {
  return (
    <>
      <img src={logo} alt="RSB Logo" style={styles} />
    </>
  );
};

// navigation
export const navigation = [
  { name: "Services", page: "services" },
  { name: "Industries", page: "industries" },
  { name: "Careers", page: "careers" },
  { name: "About Us", page: "about-us" },
];

export const sub_navigation = [
  { name: "News", page: "news" },
  { name: "Quality Assurance", page: "quality-assurance" },
  { name: "Seminars", page: "seminars" },
];

// searchbutton
export const SearchBtn = (props) => {
  return (
    <>
      {/* desktop */}
      <div
        className="mx-2 h-full hidden desktop:block large_laptop:block"
        onClick={props.onClick}
      >
        <div className="flex space-x-6 font-medium h-full">
          <div className={props.className}>
            <div className="self-center tracking-wide uppercase flex px-1">
              <SearchIcon className="h-6 w-6 my-auto mx-1" />
              <p className="mx-1 font-medium my-auto">Search</p>
            </div>
          </div>
        </div>
      </div>

      {/* laptop */}
      <div
        className="hidden laptop:block cursor-pointer py-3 border border-sea_green mb-12"
        onClick={props.onClick}
      >
        <div className="flex space-x-6 h-full ">
          <div className="self-center tracking-wide flex px-3">
            <SearchIcon className="h-5 w-5 my-auto mr-1 stroke-sea_green fill-sea_green" />
            <p className="mx-2 my-auto italic text-sm text-gray-400 font-light">
              Search...
            </p>
          </div>
        </div>
      </div>

      {/* tablet */}
      <div
        className="hidden tablet:block cursor-pointer py-3 border border-sea_green mb-12"
        onClick={props.onClick}
      >
        <div className="flex space-x-6 h-full ">
          <div className="self-center tracking-wide flex px-3">
            <SearchIcon className="h-5 w-5 my-auto mr-1 stroke-sea_green fill-sea_green" />
            <p className="mx-2 my-auto italic text-sm text-gray-400 font-light">
              Search...
            </p>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        className="hidden mobile:block cursor-pointer py-3 border border-sea_green mb-12"
        onClick={props.onClick}
      >
        <div className="flex space-x-6 h-full">
          <div className="self-center tracking-wide flex px-3">
            <SearchIcon className="h-5 w-5 my-auto stroke-sea_green fill-sea_green" />
            <p className="mx-2 my-auto italic text-sm text-gray-400 font-light">
              Search...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

//sub navigation
export const SubNav = () => {
  const redirectTo = useNavigate();
  return (
    <>
      {/* desktop */}
      <div className="bg-white mb-2 hidden desktop:block ">
        <div className="mx-40 p-1">
          <div className="flex justify-center">
            <div className="p-2 px-4 tracking-wide uppercase font-medium cursor-pointer h-[87px]">
              <div className="flex gap-x-12 h-full">
                {sub_navigation.map((item) => (
                  <div
                    className="flex cursor-pointer space-x-6 border-y-4 border-transparent hover:border-t-transparent hover:border-b-gold select-none"
                    key={item.name}
                    onClick={() => redirectTo(`/${item.page}`)}
                  >
                    <div className="self-center tracking-wide uppercase px-1">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* laptop */}
      <div className="hidden laptop:block large_laptop:block">
        <div className="flex flex-col gap-y-3 px-1 text-base">
          {sub_navigation.map((item) => (
            <div
              className="flex cursor-pointer px-1 space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold select-none"
              key={item.name}
              onClick={() => redirectTo(`/${item.page}`)}
            >
              <div className="self-center tracking-wide uppercase px-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* tablet */}
      <div className="hidden tablet:block z-0">
        <div className="flex flex-col gap-y-3 px-1 text-base">
          {sub_navigation.map((item) => (
            <div
              className="flex cursor-pointer px-1 space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold select-none"
              key={item.name}
              onClick={() => redirectTo(`/${item.page}`)}
            >
              <div className="self-center tracking-wide uppercase px-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* tablet */}
      <div className="hidden mobile:block z-0">
        <div className="flex flex-col gap-y-3 px-1 text-base">
          {sub_navigation.map((item) => (
            <div
              className="flex cursor-pointer px-1 space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold select-none"
              key={item.name}
              onClick={() => redirectTo(`/${item.page}`)}
            >
              <div className="self-center tracking-wide uppercase px-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//search content
export const SearchBar = ({ onClick }) => {
  const [hasValue, setValue] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const textInput = useRef("");

  const handleInput = (e) => {
    if (e.target.value) {
      setValue(true);
      setinputValue(e.target.value);
    } else {
      setValue(false);
      setinputValue(e.target.value);
    }
  };

  const handleClear = () => {
    textInput.current.value = "";
    setValue(false);
  };

  return (
    <>
      {/* desktop */}
      <div className="bg-white mb-2 h-[400px] hidden desktop:block large_laptop:block">
        <div className="mx-40 flex justify-center items-top pt-8 pb-5">
          <div className="w-[800px] h-12 px-4 flex border border-sea_green">
            <div className="self-center" disable="true">
              <SearchIcon className="h-6 w-6 stroke-sea_green fill-sea_green" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              ref={textInput}
              onChange={handleInput}
              className="bg-transparent m-2 px-2 w-full placeholder:italic placeholder:tracking-wide focus:outline-0"
            />
            {hasValue ? (
              <button type="button">
                <ExitIcon
                  className="h-5 w-5 stroke-black"
                  onClick={handleClear}
                  pathOne="transform origin-center -rotate-[42deg]"
                  pathTwo="transform origin-center rotate-[42deg]"
                />
              </button>
            ) : undefined}
          </div>
        </div>
        <div className="w-[800px] mx-auto px-14">
          {hasValue ? <p>See all result for '{inputValue}'</p> : ""}
        </div>
      </div>

      {/* laptop */}
      <div className="bg-white mb-2 h-screen hidden laptop:block">
        <div className="flex justify-end">
          <button type="button" className="m-4" onClick={onClick}>
            <ExitIcon
              className="h-6 w-6 stroke-sea_green"
              onClick={handleClear}
              pathOne="transform origin-center -rotate-[42deg]"
              pathTwo="transform origin-center rotate-[42deg]"
            />
          </button>
        </div>
        <div className="mx-12 flex justify-center items-top pt-10 pb-5">
          <div className="w-full h-12 px-4 flex border border-sea_green">
            <div className="self-center" disable="true">
              <SearchIcon className="h-6 w-6 stroke-sea_green fill-sea_green" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              ref={textInput}
              onChange={handleInput}
              className="bg-transparent m-2 px-2 w-full placeholder:italic placeholder:tracking-wide focus:outline-0"
            />
            {hasValue ? (
              <button type="button">
                <ExitIcon
                  className="h-5 w-5 stroke-black"
                  onClick={handleClear}
                  pathOne="transform origin-center -rotate-[42deg]"
                  pathTwo="transform origin-center rotate-[42deg]"
                />
              </button>
            ) : undefined}
          </div>
        </div>
        <div className="w-[800px] mx-auto px-14">
          {hasValue ? <p>See all result for '{inputValue}'</p> : ""}
        </div>
      </div>

      {/* tablet */}
      <div className="bg-white mb-2 h-screen hidden tablet:block">
        <div className="flex justify-end">
          <button type="button" className="m-4" onClick={onClick}>
            <ExitIcon
              className="h-6 w-6 stroke-sea_green"
              onClick={handleClear}
              pathOne="transform origin-center -rotate-[42deg]"
              pathTwo="transform origin-center rotate-[42deg]"
            />
          </button>
        </div>
        <div className="mx-12 flex justify-center items-top pt-10 pb-5">
          <div className="w-full h-12 px-4 flex border border-sea_green">
            <div className="self-center" disable="true">
              <SearchIcon className="h-6 w-6 stroke-sea_green fill-sea_green" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              ref={textInput}
              onChange={handleInput}
              className="bg-transparent m-2 px-2 w-full placeholder:italic placeholder:tracking-wide focus:outline-0"
            />
            {hasValue ? (
              <button type="button">
                <ExitIcon
                  className="h-5 w-5 stroke-black"
                  onClick={handleClear}
                  pathOne="transform origin-center -rotate-[42deg]"
                  pathTwo="transform origin-center rotate-[42deg]"
                />
              </button>
            ) : undefined}
          </div>
        </div>
        <div className="w-[800px] mx-auto px-14">
          {hasValue ? <p>See all result for '{inputValue}'</p> : ""}
        </div>
      </div>

      {/* mobile */}
      <div className="bg-white mb-2 h-screen hidden mobile:block">
        <div className="flex justify-end">
          <button type="button" className="m-4" onClick={onClick}>
            <ExitIcon
              className="h-6 w-6 stroke-sea_green"
              onClick={handleClear}
              pathOne="transform origin-center -rotate-[42deg]"
              pathTwo="transform origin-center rotate-[42deg]"
            />
          </button>
        </div>
        <div className="mx-8 flex justify-center items-top pt-10 pb-5">
          <div className="w-full h-12 px-4 flex border border-sea_green">
            <div className="self-center" disable="true">
              <SearchIcon className="h-6 w-6 stroke-sea_green fill-sea_green" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              ref={textInput}
              onChange={handleInput}
              className="bg-transparent m-2 px-2 w-full placeholder:italic placeholder:tracking-wide focus:outline-0"
            />
            {hasValue ? (
              <button type="button">
                <ExitIcon
                  className="h-5 w-5 stroke-black"
                  onClick={handleClear}
                  pathOne="transform origin-center -rotate-[42deg]"
                  pathTwo="transform origin-center rotate-[42deg]"
                />
              </button>
            ) : undefined}
          </div>
        </div>
        <div className="w-[800px] mx-auto px-14">
          {hasValue ? <p>See all result for '{inputValue}'</p> : ""}
        </div>
      </div>
    </>
  );
};

//main nav
export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const redirectTo = useNavigate();

  const handleClickNav = () => {
    setNavOpen(!isNavOpen);
    if (isSearchOpen === true) {
      setSearchOpen(false);
    }
  };

  const handleClickMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (isSearchOpen === true) {
      setSearchOpen(false);
    }

    if (isNavOpen === true) {
      setNavOpen(false);
    }
  };

  const handleClickSearch = () => {
    setSearchOpen(!isSearchOpen);
    if (isNavOpen === true) {
      setNavOpen(false);
    }

    if (isMenuOpen === true) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* desktop view */}
      <div className="hidden desktop:block">
        <div className="w-screen fixed top-0 z-50">
          <div className="border-b border-stone-300 bg-white">
            <div className="mx-40 p-2">
              <nav className="p-2 flex justify-between">
                <div className="flex">
                  <Link to="/" className="p-1">
                    <div className="flex justify-center pt-1">
                      <BrandLogo styles={{ height: "55px" }} />
                    </div>
                    <p className="text-xs pt-1 font-semibold px-1 tracking-wider select-none">
                      <span className="text-cerulean">R.S. BERNALDO</span>
                      <span className="text-cerulean px-1">&</span>
                      <span className="text-golden_frame">ASSOCIATES</span>
                    </p>
                  </Link>
                  <div className="mx-8 p-2">
                    <div className="flex space-x-6 font-medium h-full">
                      {navigation.map((item) => (
                        <div
                          className="flex cursor-pointer space-x-6 border-y-4 border-transparent hover:border-t-transparent hover:border-b-gold select-none"
                          key={item.name}
                          onClick={() => redirectTo(`/${item.page}`)}
                        >
                          <div className="self-center tracking-wide uppercase px-1">
                            {item.name}
                          </div>
                        </div>
                      ))}

                      <div
                        className={`flex cursor-pointer space-x-6 border-y-4 border-transparent hover:border-t-transparent hover:border-b-gold select-none ${
                          isNavOpen ? "border-b-gold" : ""
                        }`}
                        onClick={handleClickNav}
                      >
                        <div className="self-center tracking-wide uppercase flex px-1 select-none">
                          News & Events
                          <span
                            className={`self-center mx-1 ${
                              isNavOpen ? "origin-center rotate-180" : ""
                            }`}
                          >
                            <ArrowIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 flex gap-x-8">
                  <SearchBtn
                    className={`flex cursor-pointer space-x-3 border-y-4 border-transparent hover:border-t-transparent hover:border-b-gold select-none ${
                      isSearchOpen ? "border-b-gold" : ""
                    }`}
                    onClick={handleClickSearch}
                  />
                  <div className="self-center flex gap-x-4">
                    <button className="px-8 py-3 font-medium text-sea_green rounded-sm border-2 border-sea_green hover:text-white hover:bg-sea_green stroke-sea_green hover:stroke-white">
                      Get Started
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {isNavOpen ? <SubNav /> : null}
          {isSearchOpen ? <SearchBar onClick={handleClickSearch} /> : null}
        </div>
      </div>

      {/* large laptop view */}
      <div className="hidden large_laptop:block">
        <div className="w-screen fixed top-0 z-50">
          <div className="border-b border-stone-300 bg-white">
            <div className="mx-40 p-2">
              <nav className="p-2 flex justify-between">
                <div className="items-center flex">
                  <div className="mr-6">
                    <button
                      type="button"
                      className="px-4 py-3 rounded-sm border-2 border-sea_green bg-white hover:bg-sea_green stroke-sea_green hover:stroke-white"
                      onClick={handleClickMenu}
                    >
                      <MenuIcon
                        className="h-6 w-6 cursor-pointer"
                        pathOne={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                        pathTwo={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center -rotate-[42deg]"
                            : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathThree={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center rotate-[42deg]"
                            : "transition duration-500 transform origin-center rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathFour={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                      />
                    </button>
                  </div>
                  <Link to="/" className="p-1">
                    <div className="flex justify-center pt-1">
                      <BrandLogo styles={{ height: "55px" }} />
                    </div>
                    <p className="text-xs pt-1 font-semibold px-1 tracking-wider select-none">
                      <span className="text-cerulean">R.S. BERNALDO</span>
                      <span className="text-cerulean px-1">&</span>
                      <span className="text-golden_frame">ASSOCIATES</span>
                    </p>
                  </Link>
                </div>
                <div className="p-2 flex gap-x-8">
                  <SearchBtn
                    className={`flex cursor-pointer space-x-3 border-y-4 border-transparent hover:border-t-transparent hover:border-b-gold select-none ${
                      isSearchOpen ? "border-b-gold" : ""
                    }`}
                    onClick={handleClickSearch}
                  />
                  <div className="self-center flex gap-x-4">
                    <button className="px-8 py-3 font-medium text-sea_green rounded-sm border-2 border-sea_green hover:text-white hover:bg-sea_green stroke-sea_green hover:stroke-white">
                      Get Started
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {isSearchOpen ? <SearchBar onClick={handleClickSearch} /> : null}
          {isMenuOpen ? (
            <div className="mb-2">
              <div className="w-1/3">
                <div className="flex font-medium h-screen ml-40 pl-4 bg-white">
                  <div className="flex flex-col gap-y-3 py-8 w-full p-1 text-lg">
                    {navigation.map((item) => (
                      <div
                        className="flex cursor-pointer space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold select-none"
                        key={item.name}
                        onClick={() => redirectTo(`/${item.page}`)}
                      >
                        <div className="self-center tracking-wide uppercase px-1">
                          {item.name}
                        </div>
                      </div>
                    ))}
                    <>
                      <div
                        className="px-1 flex cursor-pointer justify-between select-none space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold"
                        onClick={handleClickNav}
                      >
                        News & Events
                        <span
                          className={`self-center mx-1 tracking-wide uppercase ${
                            isNavOpen ? "origin-center rotate-180" : ""
                          }`}
                        >
                          <ArrowIcon />
                        </span>
                      </div>
                      {isNavOpen ? <SubNav /> : null}
                    </>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* laptop view */}
      <div className="hidden laptop:block">
        <div className="w-screen fixed top-0 z-50">
          <div className="border-b border-stone-300 bg-white">
            <div className="mx-6 p-2">
              <nav className="p-2 flex justify-between">
                <div className="items-center flex">
                  <div className="m-2 mr-6">
                    <button
                      type="button"
                      className="px-4 py-3 rounded-sm border-2 border-sea_green bg-white hover:bg-sea_green stroke-sea_green hover:stroke-white"
                      onClick={handleClickMenu}
                    >
                      <MenuIcon
                        className="h-6 w-6 cursor-pointer"
                        pathOne={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                        pathTwo={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center -rotate-[42deg]"
                            : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathThree={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center rotate-[42deg]"
                            : "transition duration-500 transform origin-center rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathFour={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                      />
                    </button>
                  </div>
                  <Link to="/" className="p-1">
                    <div className="flex justify-center pt-1">
                      <BrandLogo styles={{ height: "55px" }} />
                    </div>
                    <p className="text-xs pt-1 font-semibold px-1 tracking-wider select-none">
                      <span className="text-cerulean">R.S. BERNALDO</span>
                      <span className="text-cerulean px-1">&</span>
                      <span className="text-golden_frame">ASSOCIATES</span>
                    </p>
                  </Link>
                </div>
                <div className="p-2 flex gap-x-8">
                  <div className="self-center flex gap-x-4">
                    <button className="px-8 py-3 font-medium text-sea_green rounded-sm border-2 border-sea_green hover:text-white hover:bg-sea_green stroke-sea_green hover:stroke-white">
                      Get Started
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {isSearchOpen ? <SearchBar onClick={handleClickSearch} /> : null}
          {isMenuOpen ? (
            <div className="mb-2">
              <div className="w-3/5 bg-white">
                <div className="flex font-medium h-screen mx-6 p-2">
                  <div className="flex flex-col gap-y-3 py-8 w-full p-1 text-lg">
                    <SearchBtn onClick={handleClickSearch} />
                    {navigation.map((item) => (
                      <div
                        className="flex cursor-pointer space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold select-none"
                        key={item.name}
                        onClick={() => redirectTo(`/${item.page}`)}
                      >
                        <div className="self-center tracking-wide uppercase px-1">
                          {item.name}
                        </div>
                      </div>
                    ))}
                    <>
                      <div
                        className="px-1 flex cursor-pointer justify-between select-none space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold"
                        onClick={handleClickNav}
                      >
                        News & Events
                        <span
                          className={`self-center mx-1 tracking-wide uppercase ${
                            isNavOpen ? "origin-center rotate-180" : ""
                          }`}
                        >
                          <ArrowIcon />
                        </span>
                      </div>
                      {isNavOpen ? <SubNav /> : null}
                    </>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* tablet view */}
      <div className="hidden tablet:block">
        <div className="w-screen fixed top-0 z-50">
          <div className="border-b border-stone-300 bg-white">
            <div className="mx-6 p-2">
              <nav className="p-2 flex justify-between">
                <div className="items-center flex">
                  <div className="m-2 mr-6">
                    <button
                      type="button"
                      className="px-4 py-3 rounded-sm border-2 border-sea_green bg-white hover:bg-sea_green stroke-sea_green hover:stroke-white"
                      onClick={handleClickMenu}
                    >
                      <MenuIcon
                        className="h-6 w-6 cursor-pointer"
                        pathOne={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                        pathTwo={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center -rotate-[42deg]"
                            : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathThree={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center rotate-[42deg]"
                            : "transition duration-500 transform origin-center rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathFour={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                      />
                    </button>
                  </div>
                  <Link to="/" className="p-1">
                    <div className="flex justify-center pt-1">
                      <BrandLogo styles={{ height: "55px" }} />
                    </div>
                    <p className="text-xs pt-1 font-semibold px-1 tracking-wider select-none">
                      <span className="text-cerulean">R.S. BERNALDO</span>
                      <span className="text-cerulean px-1">&</span>
                      <span className="text-golden_frame">ASSOCIATES</span>
                    </p>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          {isSearchOpen ? <SearchBar onClick={handleClickSearch} /> : null}
          {isMenuOpen ? (
            <div className="mb-2">
              <div className="w-5/6 bg-white">
                <div className="flex font-medium h-screen mx-6 p-2">
                  <div className="flex flex-col gap-y-3 py-8 w-full p-1 text-lg relative">
                    <SearchBtn onClick={handleClickSearch} />
                    {navigation.map((item) => (
                      <div
                        className="flex cursor-pointer space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold select-none"
                        key={item.name}
                        onClick={() => redirectTo(`/${item.page}`)}
                      >
                        <div className="self-center tracking-wide uppercase px-1">
                          {item.name}
                        </div>
                      </div>
                    ))}
                    <>
                      <div
                        className="px-1 flex cursor-pointer justify-between select-none space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold"
                        onClick={handleClickNav}
                      >
                        News & Events
                        <span
                          className={`self-center mx-1 tracking-wide uppercase ${
                            isNavOpen ? "origin-center rotate-180" : ""
                          }`}
                        >
                          <ArrowIcon />
                        </span>
                      </div>
                      {isNavOpen ? <SubNav /> : null}
                      <div className="p-2 bottom-40 absolute z-50 w-full">
                        <button className="mt-4 px-8 py-2 w-full font-medium text-sea_green rounded-sm border-2 border-sea_green hover:text-white hover:bg-sea_green stroke-sea_green hover:stroke-white">
                          Get Started
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* mobile view */}
      <div className="hidden mobile:block">
        <div className="w-screen fixed top-0 z-50">
          <div className="border-b border-stone-300 bg-white">
            <div className="mx-2 p-2">
              <nav className="p-2 flex justify-between">
                <div className="items-center flex">
                  <div className="m-2 mr-12">
                    <button
                      type="button"
                      className="px-4 py-3 rounded-sm border-2 border-sea_green bg-white hover:bg-sea_green stroke-sea_green hover:stroke-white"
                      onClick={handleClickMenu}
                    >
                      <MenuIcon
                        className="h-6 w-6 cursor-pointer"
                        pathOne={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                        pathTwo={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center -rotate-[42deg]"
                            : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathThree={
                          isMenuOpen
                            ? "transition duration-500 transform origin-center rotate-[42deg]"
                            : "transition duration-500 transform origin-center rotate-[0deg] hover:transition-none hover:duration-0"
                        }
                        pathFour={
                          isMenuOpen
                            ? "transition duration-200 opacity-0"
                            : "transition duration-[500ms] opacity-100 hover:transition-none hover:duration-0"
                        }
                      />
                    </button>
                  </div>
                  <Link to="/" className="p-1">
                    <div className="flex justify-center pt-1">
                      <BrandLogo styles={{ height: "50px" }} />
                    </div>
                    <p className="text-[10px] pt-1 font-semibold px-1 tracking-wider select-none">
                      <span className="text-cerulean">R.S. BERNALDO</span>
                      <span className="text-cerulean px-1">&</span>
                      <span className="text-golden_frame">ASSOCIATES</span>
                    </p>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          {isSearchOpen ? <SearchBar onClick={handleClickSearch} /> : null}
          {isMenuOpen ? (
            <div className="mb-2">
              <div className="w-5/6 bg-white">
                <div className="flex font-medium h-screen mx-6 p-2">
                  <div className="flex flex-col gap-y-3 py-8 w-full p-1 text-lg relative">
                    <SearchBtn onClick={handleClickSearch} />
                    {navigation.map((item) => (
                      <div
                        className="flex cursor-pointer space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold select-none"
                        key={item.name}
                        onClick={() => redirectTo(`/${item.page}`)}
                      >
                        <div className="self-center tracking-wide uppercase px-1">
                          {item.name}
                        </div>
                      </div>
                    ))}
                    <>
                      <div
                        className="px-1 flex cursor-pointer justify-between select-none space-x-6 border-x-4 border-transparent hover:border-r-transparent hover:border-l-gold"
                        onClick={handleClickNav}
                      >
                        News & Events
                        <span
                          className={`self-center mx-1 tracking-wide uppercase ${
                            isNavOpen ? "origin-center rotate-180" : ""
                          }`}
                        >
                          <ArrowIcon />
                        </span>
                      </div>
                      {isNavOpen ? <SubNav /> : null}
                      <div className="p-2 bottom-40 absolute z-50 w-full">
                        <button className="mt-4 px-8 py-2 w-full font-medium text-sea_green rounded-sm border-2 border-sea_green hover:text-white hover:bg-sea_green stroke-sea_green hover:stroke-white">
                          Get Started
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
