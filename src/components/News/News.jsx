import React from "react";
import newsImg from "../../assets/img/attypresto3.jpg";

const News = () => {
  return (
    <>
      <div className="mx-40 p-2 laptop:mx-6 tablet:mx-6 mobile:mx-1 mb-44">
        {/* desktop */}
        <div className="hidden desktop:block">
          <div className="flex justify-between mx-2">
            <h2 className="w-1/4 text-4xl font-bold tracking-wider leading-tight p-4 self-start">
              Latest News
            </h2>
            <div className="w-4/6 flex flex-col py-16">
              <div className="italic tracking-wide my-6 flex border border-neutral-300 rounded-md shadow-lg cursor-pointer select-none">
                <img
                  src={newsImg}
                  alt="news_image"
                  className="w-full h-96 rounded-l-md mr-2"
                />
                <div className="space-y-3 self-center p-4">
                  <p className="font-semibold text-2xl">
                    BDP Law Offices’ Atty. Presto on Successful CTA Cases
                  </p>
                  <p className="text-sm">
                    Bernaldo, Directo, and Po Law Offices, also known as BDP law
                    offices, handles a broad range of legal matters from labor
                    cases, arbitration, tax cases, civil cases, and criminal
                    cases. Most of its cases are tax cases which can be
                    classified into two, namely the administrative level which
                    is handled by Atty. Pepito Po and the judicial level which
                    is handled by Atty. Christopher Presto.
                  </p>
                  <p className="text-end text-sm italic cursor-pointer py-2">
                    read more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* large_laptop */}
        <div className="hidden large_laptop:block">
          <div className="flex flex-col mx-auto">
            <h2 className="text-4xl font-bold tracking-wider leading-tight p-4 self-start">
              Latest News
            </h2>
            <div className="w-5/6 flex justify-center flex-col py-16  mx-auto">
              <div className="italic tracking-wide my-6 flex border border-neutral-300 rounded-md shadow-lg cursor-pointer select-none">
                <img
                  src={newsImg}
                  alt="news_image"
                  className="w-full h-auto rounded-l-md mr-2"
                />
                <div className="space-y-3 self-center p-4 mt-4">
                  <p className="font-semibold text-2xl">
                    BDP Law Offices’ Atty. Presto on Successful CTA Cases
                  </p>
                  <p className="text-sm">
                    Bernaldo, Directo, and Po Law Offices, also known as BDP law
                    offices, handles a broad range of legal matters from labor
                    cases, arbitration, tax cases, civil cases, and criminal
                    cases. Most of its cases are tax cases which can be
                    classified into two, namely the administrative level which
                    is handled by Atty. Pepito Po and the judicial level which
                    is handled by Atty. Christopher Presto.
                  </p>
                  <p className="text-end text-sm italic cursor-pointer py-2">
                    read more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div className="hidden laptop:block">
          <div className="flex flex-col mx-4">
            <h2 className="text-4xl font-bold tracking-wider leading-tight p-4 self-start">
              Latest News
            </h2>
            <div className="w-full flex justify-center flex-col py-16 p-4">
              <div className="italic tracking-wide my-6 flex border border-neutral-300 rounded-md shadow-lg cursor-pointer select-none">
                <img
                  src={newsImg}
                  alt="news_image"
                  className="w-full h-auto rounded-l-md mr-2"
                />
                <div className="space-y-3 self-center p-4 mt-4">
                  <p className="font-semibold text-2xl">
                    BDP Law Offices’ Atty. Presto on Successful CTA Cases
                  </p>
                  <p className="text-sm">
                    Bernaldo, Directo, and Po Law Offices, also known as BDP law
                    offices, handles a broad range of legal matters from labor
                    cases, arbitration, tax cases, civil cases, and criminal
                    cases. Most of its cases are tax cases which can be
                    classified into two, namely the administrative level which
                    is handled by Atty. Pepito Po and the judicial level which
                    is handled by Atty. Christopher Presto.
                  </p>
                  <p className="text-end text-sm italic cursor-pointer py-2">
                    read more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tablet */}
        <div className="hidden tablet:block">
          <div className="flex flex-col mx-4">
            <h2 className="text-4xl font-bold tracking-wider leading-tight p-2 self-start">
              Latest News
            </h2>
            <div className="w-full flex justify-center py-16 p-4">
              <div className="italic tracking-wide my-6 flex flex-col border border-neutral-300 rounded-md shadow-lg cursor-pointer select-none">
                <img
                  src={newsImg}
                  alt="news_image"
                  className="w-full h-auto rounded-t-md"
                />
                <div className="space-y-3 self-center p-4 mt-4">
                  <p className="font-semibold text-2xl">
                    BDP Law Offices’ Atty. Presto on Successful CTA Cases
                  </p>
                  <p className="text-sm">
                    Bernaldo, Directo, and Po Law Offices, also known as BDP law
                    offices, handles a broad range of legal matters from labor
                    cases, arbitration, tax cases, civil cases, and criminal
                    cases. Most of its cases are tax cases which can be
                    classified into two, namely the administrative level which
                    is handled by Atty. Pepito Po and the judicial level which
                    is handled by Atty. Christopher Presto.
                  </p>
                  <p className="text-end text-sm italic cursor-pointer py-2">
                    read more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="hidden mobile:block">
          <div className="flex flex-col mx-4">
            <h2 className="text-4xl font-bold tracking-wider leading-tight p-2 self-start">
              Latest News
            </h2>
            <div className="w-full flex justify-center py-16 p-2">
              <div className="italic tracking-wide my-6 flex flex-col border border-neutral-300 rounded-md shadow-lg cursor-pointer select-none">
                <img
                  src={newsImg}
                  alt="news_image"
                  className="w-full h-auto rounded-t-md"
                />
                <div className="space-y-3 self-center p-4 mt-4">
                  <p className="font-semibold text-2xl">
                    BDP Law Offices’ Atty. Presto on Successful CTA Cases
                  </p>
                  <p className="text-sm">
                    Bernaldo, Directo, and Po Law Offices, also known as BDP law
                    offices, handles a broad range of legal matters from labor
                    cases, arbitration, tax cases, civil cases, and criminal
                    cases. Most of its cases are tax cases which can be
                    classified into two, namely the administrative level which
                    is handled by Atty. Pepito Po and the judicial level which
                    is handled by Atty. Christopher Presto.
                  </p>
                  <p className="text-end text-sm italic cursor-pointer py-2">
                    read more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
