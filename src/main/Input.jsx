import React, { useContext, useRef } from "react";
import { Context } from "../context/Contextprovider";


const Input = ({}) => {
  const textareaRef = useRef(null);
  const {input,setInput, setRecentPrompt, sendFunc, stopGeneration,loading} = useContext(Context);

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    setInput(e.target.value); // <-- use setInput, not setValue
  };


  return (
    <div className=" flex w-full flex-col items-center justify-end b">

      <div className="Input max-w-[900px] select-none fixed bottom-0 bg-[#1b1c1d]">
        <div className="bg-[#1b1c1d] border-[0.5px] border-[#666669] rounded-2xl px-5 py-3 justify-between flex text-white">
          <textarea
            ref={textareaRef}
            onInput={handleInput}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
            className="placeholder:text-zinc-500 w-full outline-none py-1 px-1 text-xl h-full bg-transparent resize-none overflow-hidden max-h-[300px]"
            rows={1}
            placeholder="Enter a prompt here"
          />
          <div className="gap-3 flex items-center text-2xl ">
            {/* <i className="ri-image-ai-line cursor-pointer"></i>
            <i className="ri-mic-line cursor-pointer"></i> */}
             {loading ? (
              <i 
                className="ri-stop-circle-line cursor-pointer text-red-500 hover:text-red-600 transition-colors" 
                onClick={stopGeneration}
              ></i>
            ) : (
              <i 
                className="ri-send-plane-2-line cursor-pointer hover:text-gray-600 transition-colors" 
                onClick={() => sendFunc()}
              ></i>
            )}
          </div>
        </div>
        <p  className="footer flex justify-center font-extralight text-[14px] my-2 select-none">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>

  );
};

export default Input;
