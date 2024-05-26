import React, { useState } from 'react'
import './App.scss'
import Menus from './components/Menus'
import TextWrapper from './components/TextWrapper'
import First from './components/First'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const handleToggle = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className="content">
      <Menus handleToggle={handleToggle} />
      <TextWrapper isVisible={isVisible} handleToggle={handleToggle} />
      <First />
    </div>
  )
}

export default App
