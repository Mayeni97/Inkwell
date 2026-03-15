import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import StudioPage from './pages/StudioPage'

function App() {
  const [page, setPage] = useState('landing')

  if (page === 'landing') {
    return <LandingPage onEnter={() => setPage('studio')} />
  }

  return <StudioPage />
}

export default App