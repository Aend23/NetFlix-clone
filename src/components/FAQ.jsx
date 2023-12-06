import React, { useEffect } from 'react';
import GetStarted from '../pages/GetStarted';
import { TbPlus } from "react-icons/tb";
import "../Faq.css"



function ques() {

  useEffect(()=>{
    const faqs = Array.from(document.getElementsByClassName("faq"));

    faqs.forEach(faq => {
      faq.addEventListener('click',()=>{
        
        if(faq.classList.contains('active')){
          faq.classList.remove('active');
        }else{
          faq.classList.add('active');
          faqs.forEach(otherFaq =>{
            if(otherFaq !== faq){
              otherFaq.classList.remove('active');
            }
            
          })
        }
        faq.ad
      });

    });

  },[]);
  
  return (
    <section className="flex box-border relative">
          <div className="py-16 px-44 m-auto w-full max-md:px-16 max-xl:px-20">

            <h1 className="text-5xl font-extrabold text-center">
              Frequently Asked Questions
            </h1>
            <div className="my-6">
              <ul className="list-none flex flex-col gap-1 text-2xl max-sm:text-xl ">
                <li className='faq'>
                  <div className="ques ">
                      <span>What is Netflix?</span> <TbPlus id="TbPlus" />
                  </div>
                  <div className='ans'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi natus, doloribus quaerat quas facilis quisquam dolores esse magni laboriosam.</p>
                  </div>
                </li>
                <li className='faq'>
                  <div className="ques">
                      <span>How much does Netflix cost?</span> <TbPlus id="TbPlus" className='' />
                  </div>
                  <div className='ans'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi natus, doloribus quaerat quas facilis quisquam dolores esse magni laboriosam.</p>
                  </div>
                </li>
                <li className='faq'>
                  <div className="ques">
                      <span>Where can I watch?</span> <TbPlus id="TbPlus" />
                  </div>
                  <div className='ans'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi natus, doloribus quaerat quas facilis quisquam dolores esse magni laboriosam.</p>
                  </div>
                </li>
                <li className='faq'>
                  <div className="ques">
                      <span>How do I cancel?</span> <TbPlus id="TbPlus" />
                  </div>
                  <div className='ans'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi natus, doloribus quaerat quas facilis quisquam dolores esse magni laboriosam.</p>
                  </div>
                </li >
                <li className='faq'>
                  <div className="ques">
                      <span>What can I watch on Netflix?</span>{" "}
                      <TbPlus id="TbPlus" />
                  </div>
                  <div className='ans'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi natus, doloribus quaerat quas facilis quisquam dolores esse magni laboriosam.</p>
                  </div>
                </li>
                <li className='faq'>
                  <div className="ques">
                      <span>Is Netflix good for kids?</span>{" "}
                      <TbPlus id="TbPlus" />
                  </div>
                  <div className='ans'>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam excepturi natus, doloribus quaerat quas facilis quisquam dolores esse magni laboriosam.</p>
                  </div>
                </li>
              </ul>
            </div>

            <GetStarted />
          </div>
          <div className="w-full h-[0.5rem] bottom-[-0.5rem] bg-zinc-800 absolute"></div>
        </section>
  )
}

export default ques
