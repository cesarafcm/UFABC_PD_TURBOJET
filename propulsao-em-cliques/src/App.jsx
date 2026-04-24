import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Modulo1 from './pages/Modulo1'
import Modulo2 from './pages/Modulo2'
import Modulo3 from './pages/Modulo3'
import './index.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modulo1" element={<Modulo1 />} />
          <Route path="/modulo2" element={<Modulo2 />} />
          <Route path="/modulo3" element={<Modulo3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
