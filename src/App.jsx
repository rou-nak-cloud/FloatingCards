import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

const App = () => {
  return (
    <>
      <div className='bg-zinc-800 w-full h-screen relative'>
        < Background />
        <Foreground />
      </div>
    </>
  )
}

export default App
