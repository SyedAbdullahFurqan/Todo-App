import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,multiply, reset, incrementByAmount,Todolist } from './redux/Counter/Slice'
import Todo from './component/Todo.JSX'
import Contact from './Contact'

function App() 
{

 const tasks = useSelector(state => state.task)
 console.log(tasks)
 const counts = useSelector((state) => state.counter.value)
  console.log(counts)
 const dispatch = useDispatch()
  return (
    <>
    
<Todo/>
    {/* <Contact/>

<h1 className="bg-amber-300">saad</h1>
<h1>{counts}</h1>
<button onClick={()=>{
  dispatch(increment())
}}>+</button>
<button onClick={()=>{
  dispatch(decrement())
}}>-</button>
<button onClick={()=>{
  dispatch(multiply())
}}>*</button> 
<button onClick={()=>{
  dispatch(reset())
}}>reset</button> 

<button onClick={()=>{
  dispatch(incrementByAmount(2))
}}>+++</button> */}
    </>
  )
}

export default App
