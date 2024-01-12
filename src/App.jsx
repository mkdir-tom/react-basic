import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(10)


  const user = {
    name: "mkdir-tom",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElFcXaXKQgyKTLcreaO_Ldr4oUYka-JPmcg&usqp=CAU",
  }

  function handleClick (){
    alert('hi')
  }

  function increaseCount (){
    setCount(count+1)
  }

  function dereaseCount (){
    if(count < 1){
      alert('count is to zoro')
    }else{
      setCount(count-1)
    }
  }

  return (
    <>
      <h3>Count is : {count}</h3>
      <button onClick={increaseCount}> Increase Count </button>
      <button onClick={dereaseCount}> Decrease Count </button>
      <Profile data={user}/>
      <Products/>
      <button onClick={handleClick}> Hi </button>
    </>
  )
}

export default App
