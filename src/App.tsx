import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogList } from './components/BlogList';
import { ProjectGrid } from './components/ProjectGrid';
import { Footer } from './components/Footer';
import { GridBackground } from './components/GridBackground';
import { About } from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { Post } from './components/pages/Post';
import { Article2025 } from './components/pages/Article2025';

function Home() {
  return (
    <>
      <Hero />
      <BlogList />
      <ProjectGrid />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-neutral-950 antialiased">
        <GridBackground />
        {/* Spacer for fixed header */}
        <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/2025" element={<Article2025 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
