import downloadImg from "../assets/downloadIcon.gif";
import BoxShot from "../assets/boxshot.png";
export default function Row2_Mob({ img }) {

 
  return (
    <>
      <div className="basis-1/2 relative" id='bottom'>
              <img
                src={img}
                alt=""
                />
              <div className="flex border-2 border-zinc-500 rounded-2xl h-24 items-center box-border min-w-[15rem] absolute bottom-[8%] left-[50%] my-auto bg-black -translate-x-1/2 overflow-hidden w-[60%]">
                <div className="shrink-0 grow-0 flex  px-3">
                  <img
                    className=" w-16 h-[4.7rem] object-contain"
                    src={BoxShot}
                    alt=""
                    />
                </div>
                <div className="mr-10">
                  <div className="font-bold">Stranger Things</div>
                  <div className="text-blue-600">Downloading...</div>
                </div>
                <div
                  className="h-12 w-12 text-white m-auto"
                  style={{
                    backgroundImage: `url(${downloadImg})`,
                    backgroundSize: "cover",
                  }}
                  ></div>  
              </div>
            </div>
    </>
  )
}
