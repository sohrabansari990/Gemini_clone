import React, { useContext, useState } from "react";
import { Context } from "../context/Contextprovider";


const Sidebar = () => {
    const [shrink, setshrink] = useState(false)

    const {input, recentPrompt,setRecentPrompt, previousPrompt, setPreviousPrompt, sendFunc, whileClicked} = useContext(Context);
    
    const loadPrompt = (prompt) => {
      sendFunc(prompt)

      setPreviousPrompt(prev => [...prev,  input])
      setRecentPrompt(prompt)
    }

  return (
    <div className="sidebar min-h-[100vh] bg-[#282a2c] flex-col justify-between inline-flex px-3 py-10 ">
      <div className="top">
        <div>
            <i onClick={()=>{
               setshrink(close=>!close)
            }} className="ri-menu-line text-[1.5vw] pl-2 text-[#CCC9DC] cursor-pointer"></i>
        </div>
        
        <div onClick={()=>{
          whileClicked()
        }} className="mt-15 inline-flex gap-2 items-center bg-[#3D3F42] rounded-4xl px-3 py-1 cursor-pointer ">
          <i className="ri-add-line text-[1.3vw] text-[#CCC9DC]"></i>
          {shrink? <p className="text-[#CCC9DC] whitespace-nowrap text-[1vw]">New Chat</p> : null} 
        </div>
        <div className="mt-8 text-[#CCC9DC] flex flex-col">
          {shrink ? <p className="transition-all duration-500 ease-in-out text-[1vw]">Recents</p> : null}
          {shrink ? 

            previousPrompt.reverse().map((item,index) => {
                return (
                  
                  <div key={index} onClick={() => loadPrompt(item)} className="inline-flex mt-3 hover:bg-[#3D3F42] hover:text-[#CCC9DC] transition-all duration-500 ease-in-out px-2 py-1 rounded-4xl cursor-pointer items-center">
                    <i className="ri-chat-4-line text-[1.1vw] px-2"></i>
                      <p className="text-[1.7vh] flex-col"> {item.slice(0,10)} ...</p>
                    
                  </div>
                )}
              )

              : null}
        </div>
      </div>
      {/* ======================================================================================== */}

      <div className="bottom flex-col space-y-1 text-[#A2A9B0]">
         
        <div onClick={()=>{
              alert("coming soon")
            }} className="flex justify-start items-center cursor-pointer pl-3 gap-2 hover:bg-[#3D3F42] hover:text-[#CCC9DC] py-1 transition-all duration-500 ease-in-out rounded-4xl">
            <i className="ri-question-line text-[1.3vw]"></i>
            {shrink ?
            <p className="text-[1vw] font-medium">Help</p>
            : null}
        </div>
        
        <div onClick={()=>{
              alert("coming soon")
            }} className="flex justify-start items-center cursor-pointer pl-3 gap-2 hover:bg-[#3D3F42] hover:text-[#CCC9DC] py-1 transition-all duration-500 ease-in-out rounded-4xl">
            <i className="ri-history-line text-[1.3vw]"></i>
            {shrink ?
            <p className="text-[1vw] font-medium">Activity</p>
            : null}
        </div>
        <div onClick={()=>{
              alert("coming soon")
            }} className="flex justify-start items-center cursor-pointer pl-3 gap-2 hover:bg-[#3D3F42] hover:text-[#CCC9DC] py-1 transition-all duration-500 ease-in-out rounded-4xl">
            <i className="ri-settings-5-line text-[1.3vw]"></i>
            {shrink ?
            <p className="text-[1vw] font-medium">Settings</p>
            :null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
