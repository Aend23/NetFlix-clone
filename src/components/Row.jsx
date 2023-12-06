import React, { useEffect, useState } from "react";

import ScrollReveal from "../utils/reveal";
function Row({ heading, desp, row =null, component = null, img, video }) {
  let reverse = '';
  row ? (reverse = "flex-row-reverse") : (reverse = "");

  useEffect(() => {
    ScrollReveal().reveal("#top", { origin: "top" });
    ScrollReveal().reveal("#bottom", { origin: "bottom" });
  });

  return (
    <section className=" box-border flex  h-full relative w-full">
      <div
        className={`flex ${reverse} items-center px-44 py-16 max-lg:flex-col  max-lg:px-3 justify-center`}
      >
        <div className="basis-1/2 w-full text-center " id="top">
          <h1
            className="text-5xl font-extrabold max-md:text-4xl max-sm:text-3xl "
            id="heading"
          >
            {heading}
          </h1>
          <p className="mt-6 text-2xl max-md:text-xl" id="desp">
            {desp}
          </p>
        </div>

        {component ? (
          component
        ) : (
          <div
            className=" basis-1/2 bg-opacity-0 relative flex items-center justify-center"
            id="bottom"
          >
            {video ? (
              <div className="absolute z-0 le">
                <video autoPlay loop muted className="">
                  <source
                    className=""
                    src={`${video}`}
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            ) : (
              <div></div>
            )}

            <div className="z-10">
              <img className="le" src={img} alt="" />
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-[0.5rem] bottom-[-0.5rem] bg-zinc-800 absolute"></div>
    </section>
  );
}

export default Row;
