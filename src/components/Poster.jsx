import React from "react";
import Homepage from "../assets/Homepage.jpg";
import GetStarted from "../pages/GetStarted";

export default function Poster() {
  return (
    <>
    <div className="box-border relative h-full w-full ">
      <div className=" h-full w-full overflow-hidden">
        <img
          className="object-cover h-[650px] w-full "
          src={Homepage}
          alt="/"
        />
      </div>
      <div className="bg-black/60 w-full h-[650px] top-0 left-0 absolute "></div>
      <div className="absolute top-72 z-50 w-full max-sm:top-52 max-md:top-60 ">
        <div className="w-full h-full m-auto max-h-[400px] flex flex-col justify-center items-center px-4">
          <h1 className="text-white z-[50] text-5xl font-bold max-sm:text-2xl text-center max-lg:text-4xl max-md:text-3xl">
            Laughter. Tears. Thrills. Find it all on NetFlix.
          </h1>
          <p className=" text-center text-xl mt-6 sm:text-xl">
            Endless entertainment starts at just ₹ 149. Cancel anytime.
          </p>
          <GetStarted />
        </div>
      </div>
      <div className="w-full h-[0.5rem] bottom-[-0.5rem] bg-zinc-800"></div>
    </div>
    </>
  );
}
