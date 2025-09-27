import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Home from './main/Home'

const App = () => {
  
  return (
    <div className='APP inline-flex w-full'>
      <Sidebar />
      <Home />
      {/* <h1 className='text-white'>Hello</h1> */}
      
    </div>
  )
}

export default App 
