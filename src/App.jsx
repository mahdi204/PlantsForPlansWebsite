import { useState } from 'react'
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Plans from './Components/Plans';
import Explanation from './Components/Explanation';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Plans />
      <Explanation />
    </>
  )
}

export default App
