import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

function GetStarted() {

const [email , setEmail] = useState("");
// console.log(email)
const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate("/signup",{ state: email})
  }

  return (
    <div className="w-full ">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center text-lg my-6 max-sm:text-sm ">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="justify-center items-center flex max-sm:flex-col w-full">
          <div>
          <input
            className="bg-zinc-900 border py-4 rounded mr-2 w-[22rem] px-4 max-sm:mb-3 max-md:w-72 max-sm:w-96"
            type="email"
            placeholder="Email address"
            autoComplete="Email"
            name="email"
            minLength={5} maxLength={50}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          </div>
          {/* <Link to={`/signup/${email}`}> */}
          <button className="bg-red-600 rounded font-bold max-sm:font-semibold py-4 px-7 text-2xl max-md:text-xl max-md:px-5" type="submit">
            Get Started &gt;
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

export default GetStarted;
