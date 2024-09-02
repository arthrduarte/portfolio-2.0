import Navbar from './components/Navbar'

function App() {
  const sections = ["Home", "About", "Projects", "Skills", "Contact"]

  return (
    <>
      <Navbar navItems={sections} />
    </>
  )
}

export default App
