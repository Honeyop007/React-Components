import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

  function App() {

    let [count,setcount]= useState(0);

    const addval = ()=>{
      if (count<20) {
   //if you want to add 5 at one click
        // setcount(count+1)
        // setcount(count+1)
        // setcount(count+1)
        // setcount(count+1)
        // setcount(count+1)      //insteaad of this 
// because: Because state updates are batched, all these updates use the initial count value (0) and each schedules the state to be updated to count + 1 (1). As a result, after all these updates, count will be 1, not 5.

        //use
        setcount((prevcounter)=>{return prevcounter+1}  )
        setcount((prevcounter)=> {return prevcounter+1}   )
        setcount((prevcounter)=> {return prevcounter+1}   )
        setcount((prevcounter)=>{return prevcounter+1}   )
        setcount((prevcounter)=> {return prevcounter+1}   )
      }
//       Why Functional Updates Work
// 1 : Sequential State Updates: Each setCount((prevCount) => prevCount + 1) call is queued with a function that takes the current state value at the time of the update and returns the new state.
//2: Latest State: By using the function form, React ensures that each update works with the latest state value. So, the first call sees the initial state, the second call sees the state after the first update, and so on.
      }
      const remval = ()=>{
        if (count>0) {
          count--
          
        }
        setcount(count)
        }
  
  return (
    <>
    <div className=' flex relative flex-row '>
    <div >
    <h1 className='font-semibold text-black bg-violet-200 rounded-md p-2 mb-2'>Tailwind test</h1>
  <Card username  = "HoneyOP" Btntext="View profile"/>
  <Card username  = "Bee" Btntext = ""/>
    </div>
  
    <div className='m-2'>
    <h1 className='font-semibold'>Counter</h1>
   
    <h2>Counter value: {count}</h2>
<button onClick={addval}>Enter Value:{count} </button>
<br /><br />
<button onClick={remval}>Remove Value:{count} </button>
<p>The counter is {count} </p>
    </div>
    </div >

    </>
  )
}

export default App
