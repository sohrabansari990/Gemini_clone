import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/Contextprovider'; // <-- use curly braces for named export
import Input from './Input';
import Output from './Output';


const Home = () => {

    // const { MainContextFunc } = useContext(Context);
    const { input, setInput, loading, setLoading, recentPrompt, setRecentPrompt, sendFunc,showResult,whileClicked } = useContext(Context);

    const cardPrompts = [
    "Suggest beautiful places to see on an upcoming road trip",
    "Give me creative ideas for a weekend project", 
    "Help me plan a productive daily routine",
    "Write a simple Python function to solve a common problem"
  ];

  const myPortfolio = "https://sohrabalefi.qzz.io/";

  return (
    <div className="home flex-1 min-h-[100vh] px-5 py-10  relative text-white whitespace-pre-wrap">
          <div className="nav flex justify-between items-center w-full text-white px-4 mb-[2vw]">
            <p onClick={()=>{
          whileClicked()
        }} className="text-[1.5vw]  cursor-pointer select-none text-[#A2A9B0] font-semibold">Gemini</p>
            <a href="https://sohrabalefi.qzz.io/" target="_blank">
            <img onClick={()=>{
              myPortfolio
            }}
              className="h-[3vw] w-[3vw] object-cover object-top rounded-full select-none cursor-pointer"
              src={assets.my_pic}
              alt=""
            /> </a>
          </div>
          
          {/* ============================================================================ */}

              {!showResult ? (

              <div className="Homepage flex mt-20 flex-col mx-auto text-left w-[900px] h-[77.5%] ">
                <div className="main_heading text-5xl leading-[3.5vw] select-none">
                  <h1 className="">
                    <span className="hello_dev bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent">
                      Hello, Dev.
                    </span>
                  </h1>
                  <h1 className="text-[#CCC9DC]">How can I help you today?</h1>
                </div>
                <div className="card mt-18 flex gap-4  text-white select-none">
                  <div onClick={()=>{
                    
                    sendFunc(cardPrompts[0])
                  }} className="sub_card bg-[#282a2c] rounded-md  sm:h-45 flex flex-col justify-between cursor-pointer transition-all duration-200  hover:bg-[#86858b] w-[16vw] p-3 leading-6 text-[1vw]">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <i className="ri-compass-3-line flex justify-end text-[1.4vw]"></i>
                  </div>
                  <div onClick={()=>{
                    
                    sendFunc(cardPrompts[1])
                  }} className="sub_card bg-[#282a2c] rounded-md  sm:h-45 flex flex-col justify-between cursor-pointer transition-all duration-200  hover:bg-[#86858b] w-[16vw] p-3 leading-6 text-[1vw]">
                    <p>Give me creative ideas for a weekend project</p>
                    <i className="ri-lightbulb-flash-line flex justify-end text-[1.4vw]"></i>
                  </div>
                  <div onClick={()=>{
                    
                    sendFunc(cardPrompts[2])
                  }} className="sub_card bg-[#282a2c] rounded-md  sm:h-45 flex flex-col justify-between cursor-pointer transition-all duration-200  hover:bg-[#86858b] w-[16vw] p-3 leading-6 text-[1vw]">
                    <p>Help me plan a productive daily routine</p>
                    <i className="ri-chat-2-line flex justify-end text-[1.4vw]"></i>
                  </div>
                  <div onClick={()=>{
                    
                    sendFunc(cardPrompts[3])
                  }} className="sub_card bg-[#282a2c] rounded-md  sm:h-45 flex flex-col justify-between cursor-pointer transition-all duration-200  hover:bg-[#86858b] w-[16vw] p-3 leading-6 text-[1vw]">
                    <p>Write a simple Python function to solve a common problem</p>
                    <i className="ri-code-s-slash-line flex justify-end text-[1.4vw]"></i>
                  </div>
                </div>
              </div>
              ) : <Output /> }
              <Input />
          
        </div>
  )
}

export default Home
