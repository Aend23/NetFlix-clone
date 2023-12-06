import React from 'react'

function Footer() {
  return (
    <>
      <div className='flex box-border'>
        <div className='  m-auto w-full py-14 px-44 text-zinc-400 font-normal max-lg:px-10 max-lg:py-10'>
          <h3>Questions? Call 000-800-919-1694</h3>

          <div className='grid grid-cols-4 gap-2 my-6 max-lg:grid-cols-2'>
            <a href="#">FAQ</a>
            <a href="#">Help Center</a>
            <a href="#">Account</a>
            <a href="#">Media Center</a>
            <a href="#">Investor Relations</a>
            <a href="#">Jobs</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Corporate Information</a>
            <a href="#">Contact Us</a>
            <a href="#">Speed Test</a>
            <a href="#">Legal Notices</a>
            <a href="#">Only on Netflix</a>
          </div>

          {/* <div>
            <div>
              <label htmlFor="lang"> Select Language</label>
              <div>
                <img src="" alt="" />
                <select name="" id="lang">
                  <option value="en_IN">English</option>
                  <option value="hi_IN">हिन्दी</option>
                </select>
              </div>
            </div>
          </div> */}

          <h1 className='text-gray-500 font-semibold'>Netflix India</h1>

        </div>
      </div>
    </>
  )
}

export default Footer
