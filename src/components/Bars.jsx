import React from 'react'
import {Link} from 'react-router-dom'

export default function Bars() {

  

  return (
          <div className="  w-[15rem] ">
            <div className="text-white list-none text-xl font-medium cursor-pointer gap-7  bg-neutral-800  flex flex-col rounded-md h-[calc(100vh-5.2rem)] w-full items-center justify-center righ">
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <Link to="/">
            <button className="text-white px-5 py-2 bg-red-600  rounded  ">
              Sign out
            </button>
          </Link>
            </div>
            
          </div>
  )
}
