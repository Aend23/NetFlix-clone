import React,{useState,useEffect} from 'react';
import {BsPlayFill} from "react-icons/bs";
import {PiInfoLight} from "react-icons/pi";
import ReactPlayer from 'react-player';

const HomePage = ({movie,handleInfo}) => {
  // console.log(movie);

  return (
    <>
    <div className='h-[550px] w-full z-0'>
      <div className='w-full h-full'>
        <div className='bg-gradient-to-t from-[#1f1f1f] w-full h-[650px] absolute '></div>
        {/* <div className='bg-gradient-to-t from-black w-full h-full absolute'></div> */}
        <div className='object-cover z-[99] '>
          <img className=' w-full h-[650px] ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

          {/* <ReactPlayer
              className=" max-lg:max-h-[22rem] max-sm:max-h-80"
              url={`https://www.youtube.com/watch?v=${videos.key} `}
              playing={true}
              controls={false}
              height={"35rem"}
              width={"100%"}
              playsinline={false}
              muted={true}
            /> */}
            
        </div>

        <div className='absolute top-1/3 mx-16 h-full'>
      

          <div className='mb-12'>
            <span className='text-white font-extrabold text-3xl'>{movie?.title}</span>
          </div>

          <div className='flex gap-8'>
          <div className='w-28 bg-white text-black h-12  rounded flex text-xl font-bold p-2'>
          <button className='flex items-center   gap-2'> <BsPlayFill className='text-4xl'/> <span>Play</span></button>
          </div>
          <div className='bg-gray-400 w-40 h-12  rounded flex p-3 bg-opacity-40' id='ibtn' onClick={(handleInfo)}>
          <button className='text-white bg-opacity-10 flex items-center gap-3' > <PiInfoLight className='text-4xl bg-transparent' /> <span className='font-semibold text-white text-lg'>More info</span></button>
          </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default HomePage
