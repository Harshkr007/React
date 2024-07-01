import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
 

  return (
    <>
      <UserContextProvider>
        <h1>hello react</h1>
        <Login/>              { /*  childrens */}
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
