import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const sections = ["Home", "About", "Projects", "Skills", "Contact"]

  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar navItems={sections} />
    </>
  )
}

export default App
