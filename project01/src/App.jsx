import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ToggleSwitch from './components/ToggleSwitch'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleSwitch/>
      <SearchBar/>
    </>
  )
}

export default App
