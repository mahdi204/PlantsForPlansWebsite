import { useState } from 'react'
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Plans from './Components/Plans';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
      <Plans />
    </>
  )
}

export default App
