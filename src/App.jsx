import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import LandingPage from './views/LandingPage'
import DemoPage from './views/DemoPage'

function App() {
  const [isDemoModalOpen, setDemoModalOpen] = useState(false)

  const openDemoModal = () => setDemoModalOpen(true)
  const closeDemoModal = () => setDemoModalOpen(false)

  return (
    <>
      <Header onBookDemo={openDemoModal} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage onWatchDemo={openDemoModal} />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </main>
      <Footer onBookDemo={openDemoModal} />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  )
}

export default App
