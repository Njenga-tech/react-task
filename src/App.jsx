import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from './pages/posts'; 

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Layout>
  );
}

