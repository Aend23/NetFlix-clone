import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie';

export default function Row({fetchUrl,row,h,w,title=null}) {
    const [movies, setMovies] = useState([]);

  useEffect(()=>{
    axios.get(fetchUrl).then((res)=>{
      setMovies(res.data.results);
    //   console.log(res);
    });  
  },[fetchUrl]);

  let slider = document.getElementById('slider'+row);
  function slideLeft(){
 slider.scrollLeft += 500;
  }



  function slideRight(){
slider.scrollLeft -= 500;
  }
  // console.log(fetchUrl)

  return (
       
        <div className='m-4 relative'>
        <div className=''>
            <h3 className='text-white font-semibold text-2xl '>{title}</h3>
        </div>
        <div className='flex items-center relative group'>
        <MdChevronLeft className='bg-white left-0 z-50 absolute opacity-50 hover:opacity-90 rounded-full hidden group-hover:block cursor-pointer' size={35} onClick={slideLeft}/>
            <div id={'slider'+row} className='whitespace-nowrap mt-2 mb-6  overflow-x-scroll scroll-smooth scrollbar-hide' >
                {
                    movies.map((movie,id)=>{
                     return  (
                         <Movie movie={movie} key={movie.id} h={h} w={w}/>
                        )
                    })
                }
            </div>
            <MdChevronRight className='bg-white right-0 absolute rounded-full hidden group-hover:block opacity-50 hover:opacity-90' size={35} onClick={slideRight}/>
            </div>
        </div>
  )
}
