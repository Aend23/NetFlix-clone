import React from "react";
import {Link,useNavigate} from "react-router-dom";

export default function SignIn() {
  const navigation  = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigation('/homepage');

  }
  return (
    <>
      <div className=" w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />

        <div className="bg-black/60 w-full h-screen top-0 left-0 fixed"></div>
        <div className="fixed w-full z-50 py-24 px-4">
          <div className="bg-black/75 max-w-[450px] h-[600px] mx-auto text-white rounded-lg max-md:max-w-[550px]">
            <div className="max-w-[320px] mx-auto py-16 max-md:px-8 max-md:max-w-[550px]">
              <h2 className="text-white text-3xl  font-medium ">Sign In</h2>
              <form className=" w-full flex flex-col py-6"
              // onSubmit={handleSumbit}
              >
                <input
                  className="bg-neutral-700 rounded p-3 my-2"
                  type="email"
                  placeholder="Email or phone number"
                  autoComplete="Email"
                />
                <input
                  className="bg-neutral-700 rounded p-3 my-2"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />

                <button className="py-3 mt-10 mb-1 bg-red-600 font-bold rounded">Sign In</button>
                <div className="flex justify-between mb-[4rem] text-gray-400">
                 <p><input type="checkbox" className="" /> Remember me</p>
                  <span>Need help?</span>
                </div>
                <p>

                <span className="text-gray-400">New to Netflix?</span><Link to="/signup">  Sign Up now. 
                </Link>
                </p>
                <p className="text-gray-400">
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
