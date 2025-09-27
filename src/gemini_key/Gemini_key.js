import { GoogleGenAI } from "@google/genai";

const Api_key = 'AIzaSyDthFujEU2eBQ78OgfNiClbOODSJmPOI2A'
const ai = new GoogleGenAI({ apiKey: Api_key });

async function askGemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });
  // If response.text doesn't exist, adjust as needed
  return response.text;
  
}

export default askGemini;