import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import BlogAllPost from "./components/Blog-Post.jsx/BlogPost";
import Contact from "./pages/Contact/Contact";
import BlogAllPosts from "./components/Blog-All-posts/BlogAllPosts";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  return (
    <main className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogAllPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/all" element={<BlogAllPosts />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
