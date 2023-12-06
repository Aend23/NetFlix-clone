import React, { useContext, useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Bars from "./Bars";
import { useLocation } from "react-router-dom";
import MyContext from "../utils/MyContext";

export default function Nav({}) {

  const [show, setShow] = useState(false);
  const [showBars, setShowBars] = useState(true);
  const [signIn,setSignIn] = useState('flex');
  const [main,setMain] = useState('hidden');
  const {updateSharedState} =useContext(MyContext);
  const location = useLocation();

  const searchInputRef = useRef();
  let searchVal;
  const handleSearch =(e)=>{
   searchVal = searchInputRef.current.value;
  updateSharedState(searchVal);
  
  }

  const path = location.pathname;
  useEffect(()=>{
    path === "/main"? setSignIn('hidden'): setSignIn('flex');
    path === "/main"? setMain(''): setMain('hidden');
  },[path]);

  const handleDisplay = () => {
    const searchBox = document.getElementById("search");
        searchBox.classList.toggle("max-w-full");
        if(!searchBox.classList.contains("hidden")){
          searchBox.classList.toggle("scale-100");
          searchBox.classList.toggle("scale-0");
        }
        updateSharedState('');
   searchInputRef.current.value ='';
   };



  const handleBars = () => {
    showBars ? setShowBars(false) : setShowBars(true)
    const bar = document.getElementById('bar');
    bar.classList.toggle('translate-x-0');
    bar.classList.toggle('translate-x-[100%]');


  };

  window.onscroll=() => {
    const bar = document.getElementById('bar');
    bar.classList.add("translate-x-[100%]");
    bar.classList.remove("translate-x-0");
      if((bar.classList.contains("translate-x-[100%]")))
      setShowBars(true);
    }

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed z-[99] h-20"> 
      <div
        className={` flex  h-full justify-between items-center px-14 py-5 ${
          show && "bg-black transition-all duration-500"
        } max-xl:px-6 `}
      >
        <div className="flex gap-14 max-xl:gap-6  items-center justify-between">
          <div>
        <Link to='/'>
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer max-xl:text-3xl">
            NETFLIX
          </h1>
        </Link>
          </div>

          <div className={`${signIn} h-fit items-center absolute right-4`}>
        <Link to='/signin'>
            <button className="text-white px-5 py-2 bg-red-600 mr-2 rounded">
              Sign In
            </button>
        </Link>
          </div>


          <div className={`${main}`} >
            <div className="flex items-center gap-8  text-white list-none text-xl font-medium cursor-pointer max-xl:text-lg max-xl:gap-4 max-md:hidden"
            >
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>My List</li>
            </div>
          </div>
        </div>

        <div className={`${main}`}>
        <div className=" flex h-fit items-center gap-4 max-xl:gap-2 box-border" id="">
          <div className=" flex items-center justify-between relative cursor-pointer" id="input">
            <div className="font-medium normal-case bg-transparent rounded-md border-gray-500 border-2 text-white p-2 max-xl:w-36 max-xl:h-10  max-md:w-60  max-sm:w-48 overflow-hidden flex items-center  transform duration-200 scale-0  transition-transition  " id="search" >
            
            <input
              className=" bg-transparent outline-none "
              type="search"
              placeholder=" Search..."
              ref={searchInputRef}
              onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                  searchVal = searchInputRef.current.value;
                updateSharedState(searchVal);
                }
              }}
            />
            <div className="text-2xl text-gray-500 hover:text-red-700 ">
            <BiSearchAlt2
              className=""
              onClick={handleSearch}
            />
            </div>
            </div>
            <div className="text-3xl text-gray-500 hover:text-red-700 mx-2">
            <BiSearchAlt2
              className=""
              onClick={handleDisplay}
            />
            </div>
          </div>
            
          <div className="relative w-full ">
          {showBars ? (
            <RiMenuUnfoldFill
              className="w-12 m-0  text-white md:hidden  bg-zinc-800/70 rounded cursor-pointer"
              id="RiMenuUnfoldFill"
              size={35}
              onClick={handleBars}
            />
          ) : (
              
            <RiMenuFoldFill
              className="w-12 m-0 text-white md:hidden  bg-zinc-800/70 bg-opacity-6 rounded cursor-pointer"
              size={35}
              id="RiMenuFoldFill"
              onClick={handleBars}
            />
          )}
          </div>

          
          <Link to="/">
            <button className="text-white px-4  py-2 bg-red-600  rounded  max-xl:p-0 max-xl:h-10 max-xl:w-16 max-md:hidden">
              Sign out
            </button>
          </Link>
        </div>
        </div>
      </div>
          <div id="bar" className="transform absolute right-0 translate-x-[100%] transition-transform duration-300">
          <Bars />
          </div>
    </div>
  );
}
