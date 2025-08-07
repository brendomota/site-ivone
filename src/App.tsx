import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App
