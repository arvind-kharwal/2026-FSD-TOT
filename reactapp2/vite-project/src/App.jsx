import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ImageManipulation from './Component/ImageManipulation'
import Login from './Component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2  style = {{color:'red'}}>Welcome to MERN Stack Development</h2>
          {/* <h1 style={{backgroundColor: 'pink',color:'blue'}}>value of a = {a}</h1> */}
          {/* <Gallery /> */}
          {/* <MyCounter /> */}
          {/* <ImageManipulation /> */}
          <Login />
          </div>
  )
}

export default App
