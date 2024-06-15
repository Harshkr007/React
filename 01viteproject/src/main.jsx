import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import (local name) from (real address in String Format)

function MyApp(){
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
    
}

  const newElement = (
    <a href="https://googl.com" target = '_blank'>Visit Google</a>
  )

  const reactElement = React.createElement(
    `a`,{
      href : `https://google.com`,
      target:'_blanck'
    },
    `click me to visit google`
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  /* <React.StrictMode>
     {<App/> }
   </React.StrictMode>,
   */
   
  //newElement

  reactElement
)
