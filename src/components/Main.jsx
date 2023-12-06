import React,{useState,useEffect, useContext} from 'react';
import axios from 'axios';
import {requests} from '../utils/request';
import MovieLists from '../components/MovieLists';
import HomePage from '../pages/HomePage';
import MoreInfo from '../pages/MoreInfo';
import MyContext from '../utils/MyContext';


function Main() {
    const [movie, setMovie] = useState([]);
    const [showInfo,setShowInfo] = useState(false);
    const {sharedState,updateSharedState} = useContext(MyContext);

useEffect(()=>{
  updateSharedState
  axios.get(requests.requestPopular).then((res)=>{
    setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
  }) 
},[]);

useEffect(()=>{
  if(sharedState){
   axios.get(requests.search+sharedState).then((res)=>{
    if(res.data.results.length === 0 ){
    return;}
     setMovie(res.data.results[0]);
   }) 
  }
 },[sharedState]);
  // console.log(movie  )

  const handleInfo = ()=>{
setShowInfo(true);

  }

  const handleClose = ()=>{
    setShowInfo(false);
  }

  useEffect(()=>{
    addEventListener('click',(e)=>{
      const moreInfo = document.getElementById('moreInfo');
      if( e.target == moreInfo){
        setShowInfo(false);
      }
    })
  },[])

  return (
    <>

       {movie?.id ? ( // Check if movie?.id is defined
      <div className='absolute w-full z-40' id='info'>
        {showInfo ? <MoreInfo movieId={movie.id} handleClose={(handleClose)}/> : <div></div>}
        {/* <MoreInfo movieId={movie.id} />  */}
      </div>
    ) : (
      <div className='absolute z-40 w-full hidden' id='info'>
    
      </div>
    )}
      <div className='bg-[#1f1f1f] '>
      <HomePage movie = {movie} handleInfo={handleInfo}/>
    <MovieLists title={'Now playing'} fetchUrl={requests.requestNowPlaying} row={1}/>
    <MovieLists title={'Top Rated'} fetchUrl={requests.requestTopRated} row={2}/>
    <MovieLists title={'Trending'} fetchUrl={requests.requestTrending} row={3}/>
    <MovieLists title={'Horror'} fetchUrl={requests.requestHorror} row={4}/>
    <MovieLists title={'Popular'} fetchUrl={requests.requestPopular} row={5}/>
    <MovieLists title={'Upcoming'} fetchUrl={requests.requestUpcoming} row={6}/>
      </div>
   
    </>
  )
}


export default Main
