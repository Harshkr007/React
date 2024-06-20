import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const name = "HarshChaudhary";
  const obj = {
    cardNo : 24,
    cardVal : 1,
    cardlog : `Enter`
  }
  const arr = [4,5,6];

  return (
    <>
     <h1 className='bg-orange-400 text-black p-4 mb-4'>Hello, this is Harsh at vite+Tailwind</h1>

     <Card userName = "Harsh" newObj = {obj.cardlog}/>
     <Card/>

    </>
  )
}

export default App
