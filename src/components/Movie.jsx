import {SiNetflix} from "react-icons/si";


export default function Movie({movie,w=72,h=48}) {
  // console.log(w)
  return (
    <div className={`box-border inline-block w-${w} mr-2 max-sm:w-56 h-full`}>
      <div className=" relative cursor-pointer transition ease-in-out duration-500">
        <div className={`transition ease-in-out duration-500  hover:scale-105 `}>
          <img
            className={`h-48 w-full max-sm:w-56 max-sm:h-40`}
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt=""
          />
        </div>

        <div className="absolute top-1 left-0">
          <SiNetflix className="h-6 w-7 text-red-700  opacity-90" />
        </div>
      </div>
    </div>
  );
}
