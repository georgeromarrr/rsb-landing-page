import React, { useState } from "react";
import { ExitIcon, MenuIcon } from "../../assets/icons/Icons";

export const AssuranceService = [
  { name: "EXTERNAL AUDIT" },
  { name: "FINANCIAL REVIEW" },
  { name: "LONG-FORM REPORTS" },
  { name: "DUE DILIGENCE" },
  { name: "BUSINESS VALUATION SERVICES/ FAIRNESS OPINION" },
  { name: "INDEPENDENT CPA REPORT FOR COURT OF TAX APPEALS" },
  { name: "OPERATIONS AUDIT" },
];

export const NonAssuranceService = [
  { name: "REVIEW AND COMPILATION" },
  { name: "BOOK RECONSTRUCTION" },
  { name: "ALIGNMENT TO PFRS" },
  { name: "AGREED-UPON PROCEDURES" },
  { name: "ACCOUNTING SYSTEM REVIEW AND IMPLEMENTATION" },
  { name: "TRANSACTION OUTSOURCING/ SECONDMENT" },
  { name: "PEZA and BOI Registration and Reporting Compliance" },
];

export const AdvisoryService = [
  { name: "MERGERS AND ACQUISITIONS" },
  { name: "INTERNAL AUDIT" },
];

export const TaxationService = [
  { name: "OTHER TAX SERVICES" },
  { name: "TAXATION COMPLIANCE AUDIT" },
  { name: "TAX PLANNING AND CONSULTANCY" },
];

export const TechService = [
  { name: "IN-HOUSE TRAINING" },
  { name: "SEMI-ANNUAL SEMINARS" },
];

export const SectionTitle = () => {
  return (
    <>
      {/* desktop */}
      <div className="hidden desktop:block">
        <div className="flex justify-between items-center mx-2">
          <h2 className="w-1/4 text-4xl font-bold tracking-wider leading-tight p-4">
            Explore our Services
          </h2>
          <p className="w-4/6 text-xl italic tracking-wide p-4">
            We take responsibility in developing our understanding of your
            business and any related transaction. In this way we are able to
            give you an output that is catered specifically for you.
          </p>
        </div>
      </div>

      {/* large_laptop */}
      <div className="hidden large_laptop:block">
        <div className="mx-2">
          <h2 className="text-4xl font-bold tracking-wider leading-tight p-4">
            Explore our Services
          </h2>
          <p className="text-xl italic tracking-wide p-4">
            We take responsibility in developing our understanding of your
            business and any related transaction. In this way we are able to
            give you an output that is catered specifically for you.
          </p>
        </div>
      </div>

      {/* laptop */}
      <div className="hidden laptop:block">
        <div className="mx-2">
          <h2 className="text-4xl font-bold tracking-wider leading-tight p-4">
            Explore our Services
          </h2>
          <p className="text-xl italic tracking-wide p-4">
            We take responsibility in developing our understanding of your
            business and any related transaction. In this way we are able to
            give you an output that is catered specifically for you.
          </p>
        </div>
      </div>

      {/* tablet */}
      <div className="hidden tablet:block">
        <div className="mx-2">
          <h2 className="text-3xl font-bold tracking-wider leading-tight px-2 mb-5">
            Explore our Services
          </h2>
          <p className="text-base italic tracking-wide px-2">
            We take responsibility in developing our understanding of your
            business and any related transaction. In this way we are able to
            give you an output that is catered specifically for you.
          </p>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden mobile:block">
        <div className="mx-2">
          <h2 className="text-3xl font-bold tracking-wider leading-tight px-2 mb-5">
            Explore our Services
          </h2>
          <p className="text-sm italic tracking-wide px-2">
            We take responsibility in developing our understanding of your
            business and any related transaction. In this way we are able to
            give you an output that is catered specifically for you.
          </p>
        </div>
      </div>
    </>
  );
};

export const SectionSubTitle = () => {
  const [isA_MenuOpen, setA_MenuOpen] = useState(false);
  const [isB_MenuOpen, setB_MenuOpen] = useState(false);
  const [isC_MenuOpen, setC_MenuOpen] = useState(false);
  const [isD_MenuOpen, setD_MenuOpen] = useState(false);
  const [isE_MenuOpen, setE_MenuOpen] = useState(false);

  return (
    <>
      {/* desktop */}
      <div className="hidden desktop:block">
        <div className="mt-16 w-10/12 mx-auto divide-y divide-neutral-300 select-none ">
          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setA_MenuOpen(!isA_MenuOpen)}
            >
              <h2 className="uppercase">Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isA_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setB_MenuOpen(!isB_MenuOpen)}
            >
              <h2 className="uppercase">Non-Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isB_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {NonAssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setC_MenuOpen(!isC_MenuOpen)}
            >
              <h2 className="uppercase">Advisory</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isC_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AdvisoryService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setD_MenuOpen(!isD_MenuOpen)}
            >
              <h2 className="uppercase">Taxation</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isD_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TaxationService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setE_MenuOpen(!isE_MenuOpen)}
            >
              <h2 className="uppercase">Technical & Training</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isE_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TechService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        </div>
      </div>

      {/* large_laptop */}
      <div className="hidden large_laptop:block">
        <div className="mt-16 w-11/12 mx-auto divide-y divide-neutral-300 select-none ">
          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setA_MenuOpen(!isA_MenuOpen)}
            >
              <h2 className="uppercase">Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isA_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setB_MenuOpen(!isB_MenuOpen)}
            >
              <h2 className="uppercase">Non-Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isB_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {NonAssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setC_MenuOpen(!isC_MenuOpen)}
            >
              <h2 className="uppercase">Advisory</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isC_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AdvisoryService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setD_MenuOpen(!isD_MenuOpen)}
            >
              <h2 className="uppercase">Taxation</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isD_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TaxationService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setE_MenuOpen(!isE_MenuOpen)}
            >
              <h2 className="uppercase">Technical & Training</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isE_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TechService.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center p-4 text-lg font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-6 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        </div>
      </div>

      {/* laptop */}
      <div className="hidden laptop:block">
        <div className="mt-16 w-fulldivide-y divide-neutral-300 select-none">
          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setA_MenuOpen(!isA_MenuOpen)}
            >
              <h2 className="uppercase">Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isA_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-4 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setB_MenuOpen(!isB_MenuOpen)}
            >
              <h2 className="uppercase">Non-Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isB_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {NonAssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-4 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setC_MenuOpen(!isC_MenuOpen)}
            >
              <h2 className="uppercase">Advisory</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isC_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AdvisoryService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-4 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setD_MenuOpen(!isD_MenuOpen)}
            >
              <h2 className="uppercase">Taxation</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isD_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TaxationService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-4 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setE_MenuOpen(!isE_MenuOpen)}
            >
              <h2 className="uppercase">Technical & Training</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isE_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TechService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4">{item.name}</p>
                    <p className="px-4 py-1 text-sm uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        </div>
      </div>

      {/* tablet */}
      <div className="hidden tablet:block">
        <div className="mt-16 w-full divide-y divide-neutral-300 select-none ">
          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setA_MenuOpen(!isA_MenuOpen)}
            >
              <h2 className="uppercase">Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isA_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4 w-3/5">{item.name}</p>
                    <p className="px-4 py-1 text-xs uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setB_MenuOpen(!isB_MenuOpen)}
            >
              <h2 className="uppercase">Non-Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isB_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {NonAssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4 w-3/5">{item.name}</p>
                    <p className="px-4 py-1 text-xs uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setC_MenuOpen(!isC_MenuOpen)}
            >
              <h2 className="uppercase">Advisory</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isC_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AdvisoryService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4 w-3/5">{item.name}</p>
                    <p className="px-4 py-1 text-xs uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setD_MenuOpen(!isD_MenuOpen)}
            >
              <h2 className="uppercase">Taxation</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isD_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TaxationService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4 w-3/5">{item.name}</p>
                    <p className="px-4 py-1 text-xs uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-3xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setE_MenuOpen(!isE_MenuOpen)}
            >
              <h2 className="uppercase">Technical & Training</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isE_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TechService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-4 justify-between items-center p-4 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-4 w-3/5">{item.name}</p>
                    <p className="px-4 py-1 text-xs uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden mobile:block">
        <div className="mt-16 w-full divide-y divide-neutral-300 select-none">
          <>
            <div
              className="text-2xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setA_MenuOpen(!isA_MenuOpen)}
            >
              <h2 className="uppercase">Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isA_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isA_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-2 justify-between items-center p-2 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-2 w-2/4">{item.name}</p>
                    <p className="px-3 py-1 text-xs text-center uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-2xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setB_MenuOpen(!isB_MenuOpen)}
            >
              <h2 className="uppercase">Non-Assurance</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isB_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isB_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {NonAssuranceService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-2 justify-between items-center p-2 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-2 w-2/4">{item.name}</p>
                    <p className="px-3 py-1 text-xs text-center uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-2xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setC_MenuOpen(!isC_MenuOpen)}
            >
              <h2 className="uppercase">Advisory</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isC_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isC_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {AdvisoryService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-2 justify-between items-center p-2 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-2 w-2/4">{item.name}</p>
                    <p className="px-3 py-1 text-xs text-center uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-2xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setD_MenuOpen(!isD_MenuOpen)}
            >
              <h2 className="uppercase">Taxation</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isD_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isD_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TaxationService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-2 justify-between items-center p-2 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-2 w-2/4">{item.name}</p>
                    <p className="px-3 py-1 text-xs text-center uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>

          <>
            <div
              className="text-2xl font-bold tracking-wider leading-tight p-4 mx-2 flex items-center justify-between "
              onClick={() => setE_MenuOpen(!isE_MenuOpen)}
            >
              <h2 className="uppercase">Technical & Training</h2>
              <ExitIcon
                className={`h-6 w-6 cursor-pointer stroke-black ${
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[2700deg]"
                    : "transition duration-500 transform origin-center -rotate-[0deg] hover:transition-none hover:duration-0"
                }`}
                pathOne={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center -rotate-[0deg]"
                    : "transition duration-500 transform origin-center -rotate-[360deg] hover:transition-none hover:duration-0"
                }
                pathTwo={
                  isE_MenuOpen
                    ? "transition duration-500 transform origin-center rotate-[0deg]"
                    : "transition duration-500 transform origin-center rotate-[450deg] hover:transition-none hover:duration-0"
                }
              />
            </div>
            {isE_MenuOpen ? (
              <ul className="p-2 mx-4 items-center">
                {TechService.map((item) => (
                  <li
                    key={item.name}
                    className="flex gap-x-2 justify-between items-center p-2 font-medium cursor-pointer hover:text-cerulean hover:bg-neutral-200"
                  >
                    <p className="px-2 w-2/4">{item.name}</p>
                    <p className="px-3 py-1 text-xs text-center uppercase rounded-full border border-cerulean text-cerulean hover:bg-cerulean hover:text-white">
                      learn more
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        </div>
      </div>
    </>
  );
};
