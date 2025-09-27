import React, { useContext, useState } from "react";
import { Context } from "../context/Contextprovider";
import { assets } from "../assets/assets";

const Output = ({}) => {
  const {
    input,
    setInput,
    loading,
    setLoading,
    setRecentPrompt,
    recentPrompt,
    sendFunc,
    showResult,
    resultData,
  } = useContext(Context);

 
  return (
    <div className="Output flex flex-col absolute left-1/2 -translate-x-1/2 max-h-[75%] gap-4 w-[900px] max-w-[90vw] h-full pb-50 overflow-y-scroll overflow-x-hidden box-border">
      <div className="flex justify-start w-full">
        <div className="input text-white rounded-xl px-4 py-2 max-w-[100%] w-full flex items-center gap-4 box-border">
          <img
            className="w-[2vw] h-[2vw] rounded-full object-cover object-top flex-shrink-0"
            src={assets.my_pic}
            alt=""
          />
          <p className="break-words overflow-wrap-break-word">{recentPrompt}</p>
        </div>
      </div>
     
       
      <div className="flex justify-start w-full">
        <div className="response flex items-start gap-4 text-white rounded-xl px-4 py-2 max-w-[100%] w-full box-border">
          <img
            src={assets.gemini_icon}
            className="w-[2vw] h-[2vw] rounded-full object-cover object-top flex-shrink-0"
            alt=""
          />
          
          {loading ? ( 
            <div className="loader">
              <hr  />
              <hr  /> 
              <hr  />
            </div>
            
            ): 
           <p className="result leading-8 break-words overflow-wrap-break-word max-w-full box-border" dangerouslySetInnerHTML={{ __html: resultData }}></p>
           } 
        </div>
      </div>
       
      
        
    </div>
  );
};

export default Output;