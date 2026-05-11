import "./App.css"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Landing from "./pages/Landing/Landing"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Blog from "./pages/Blog/Blog"

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
