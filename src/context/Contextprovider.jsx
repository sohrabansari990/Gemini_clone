import React, { useState } from 'react'
import { createContext } from 'react'
import askGenini from '../gemini_key/Gemini_key'
import MarkdownIt from 'markdown-it';



const md = new MarkdownIt();

export const Context = createContext();




const Contextprovider = (props) => {

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  // recent prompt is gonna be used to store the input data 
  const [recentPrompt, setRecentPrompt] = useState('');
  // prev prompt gonna be used to show it in the Sidebar
  const [previousPrompt, setPreviousPrompt] = useState([]);
  // when its true - show result will hide the main homepage text and show the output data from ai
  const [showResult, setShowResult] = useState(false);
  // this state gonna be used to show the output data 
  const [resultData, setResultData] = useState('');
  
  const [timeoutIds, setTimeoutIds] = useState([]);


// ===================================================================
// stop func  
const stopGeneration = () => {
  setLoading(false);
  
  // Clear all pending timeouts to stop typing effect
  timeoutIds.forEach(id => clearTimeout(id));
  setTimeoutIds([]);
};
// =================================================================
// typingEffect
const typingEffect = (index, nextWord) => {
  const timeoutId = setTimeout(function() {
    setResultData(prev => prev + nextWord)
  }, 75 * index);
  
  // Store timeout ID so we can cancel it later
  setTimeoutIds(prev => [...prev, timeoutId]);
}
// ===============================================================
// NewChat
  const whileClicked = ()=>{
    setShowResult(false)
    setResultData('')
  }
  // ==============================================
  // AI result
  const sendFunc = async (prompt) => {
  
  const currentPrompt = prompt || input;
  
  setRecentPrompt(currentPrompt)  
  
  setPreviousPrompt(prev => [currentPrompt,...prev])
  setResultData('')
  setLoading(true)
  setShowResult(true)
  
  const result = await askGenini(prompt || input)
  
  // Convert markdown to HTML
  const htmlResult = md.render(result);
  
  // Apply typing effect
  let freshResult = htmlResult.split(" ");
  for(let i = 0; i < freshResult.length; i++){
    const newWord = freshResult[i]
    typingEffect(i, newWord + " ")
  }
  
  
  

  setInput('')
  setLoading(false)
}
// ============================================================
// const handleCardsClick = () => {
//   setShowResult(true)
//   setResultData('')
// }
  

    

  const MainContextFunc ={
      input,
      setInput,
      loading,
      setLoading,
      recentPrompt,
      setRecentPrompt,
      previousPrompt,
      setPreviousPrompt,
      showResult,
      setShowResult,
      resultData,
      setResultData,
      sendFunc,
      whileClicked,
      stopGeneration 
    }


  


  return (
    <Context.Provider value={MainContextFunc}>
        {props.children}
    </Context.Provider>
  )
}

export default Contextprovider
