import './App.scss'

import NotFound from './pages/404/NotFound';
import Home from "./pages/home/Home"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App
