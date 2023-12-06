import { BsPlayFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import MovieLists from "../components/MovieLists";
import { requests, key } from "../utils/request";
import { RxCross2, RxSpeakerOff, RxSpeakerLoud } from "react-icons/rx";

export default function MoreInfo({ movieId,handleClose }) {
  // const a = "762430";
  const [movie, setMovie] = useState();
  const [genres, setGeners] = useState([]);
  const [videos, setVideos] = useState([]);
  const [mute, setMute] = useState(false);

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&append_to_response=videos,images`;
  // console.log(url)

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovie(res.data);
      setGeners(res.data.genres);
      setVideos(
        res.data.videos.results[
          Math.floor(Math.random() * res.data.videos.results.length)
        ]
      );
    });
  }, []);

  function HoursMin() {
    const hours = Math.floor(movie?.runtime / 60);
    const min = movie?.runtime % 60;
    return [hours + " hr ", min + " min"];
  }

  

  function truncate(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else str;
  }

  function handleMute() {
    setMute(!mute);
  }

  



  return (
    <div className="box-border relative w-full bg-black/75 py-16 " id="moreInfo">
      <div className="flex mx-auto py-14 px-14 max-lg:px-0 bg-neutral-800 relative max-sm:w-11/12 w-4/5 h-screen ">
        <RxCross2
          className="text-3xl text-white absolute right-4 top-4 hover:text-red-600 cursor-pointer"
          id="cross" onClick={handleClose}
        />
        <div className="w-full relative overflow-y-scroll " id="scroll-more">
          <div className="w-full relative px-4 ">
            <div
              className="absolute text-3xl bg-zinc-700/50 rounded-full top-1/4 right-16 text-gray-300 p-2 max-sm:text-xl max-md:text-2xl cursor-pointer"
              onClick={handleMute}
            >
              {mute? <RxSpeakerOff className="text-red-600"/> : <RxSpeakerLoud />}
            </div>
            {videos ? (
              <ReactPlayer
                className="max-lg:max-h-[22rem] max-sm:max-h-72 "
                url={`https://www.youtube.com/watch?v=${videos.key} `}
                playing={true}
                controls={false}
                height={"35rem"}
                width={"100%"}
                playsinline={false}
                muted={mute}
              />
            ) : (
              <img
                className="w-full h-96 "
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
              />
            )}

            <div className="absolute top-1/2 max-md:top-1/3">
              <div className="grid grid-cols-2 justify-between items-center gap-4 px-16 mb-8 text-white  max-md:px-5 max-lg:px-6 max-md:gap-2">
                <div className="basis-1/2">
                  <div className="mb-4 max-md:mb-2">
                    <span className="text-white font-extrabold text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg max-sm:font-bold">
                      {movie?.title}
                    </span>
                  </div>

                  <div className="w-full  text-black  flex text-xl  mb-3  max-md:mb-2 ">
                    <button className="flex items-center max-sm:gap-0 h-12 max-sm:h-10 max-sm:w-20 bg-white rounded justify-center w-28 font-extrabold max-sm:font-bold hover:bg-red-500 hover:text-white duration-500">
                      <BsPlayFill className="text-4xl max-md:text-3xl max-sm:text-2xl " />

                      <span>Play</span>
                    </button>
                  </div>
                  <div> {movie?.release_date}</div>
                  <div>{HoursMin()}</div>
                </div>

                <div className="basis-1/2">
                  <div className="text-white ">
                    <h1 className="font-bold text-white max-sm:text-sm">
                      {movie?.tagline}
                    </h1>

                    <span className=" max-sm:text-sm font-semibold">
                      Geners :{" "}
                    </span>
                    {genres.map((obj) => {
                      return (
                        <span className="mr-2" key={obj.id}>
                          {obj.name},
                        </span>
                      );
                    })}
                  </div>
                  <div>
                    <span className="font-semibold">Availabel in : </span>
                    {movie?.spoken_languages?.map((obj) => {
                      return <span className="mr-2">{obj.english_name},</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full top-10 relative ">
            {genres.map((gener) => {
              return (
                <MovieLists
                  fetchUrl={requests.geners + gener?.id}
                  row={gener?.id}
                  h={48}
                  w={40}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
