import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='font-semibold text-black bg-violet-200 rounded-md p-2 mb-2'>Tailwind test</h1>
  <Card username  = "HoneyOP" Btntext="View profile"/>
  <Card username  = "Bee" Btntext = ""/>
    </>
  )
}

export default App
