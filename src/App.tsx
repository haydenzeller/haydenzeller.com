import './App.scss'

import NotFound from './pages/404/NotFound';
import Blog from './pages/blog/blog';
import Home from "./pages/home/Home"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="404" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  );
}

export default App
