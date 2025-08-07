import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? <Loader /> : <Home />}
    </>
  )
}

export default App
