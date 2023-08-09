import { Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero/Hero'
import CreateCard from './pages/CreateCard/CreateCard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/create-card" element={<CreateCard />} />
    </Routes>
  )
}
export default App

