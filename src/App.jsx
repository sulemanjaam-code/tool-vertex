import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PasswordGenerator from './pages/PasswordGenerator';
import WordCounter from './pages/WordCounter';
import About from './pages/About';
import Contact from './pages/Contact';
import GenericToolPage from './pages/GenericToolPage';
import Blog from './pages/Blog';
import Tools from './pages/Tools';
import { tools } from './toolsData';
import './App.css';

function App() {
  const specializedTools = ['password-gen', 'word-counter'];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Specialized Tool Routes */}
        <Route path="/password-gen" element={<PasswordGenerator />} />
        <Route path="/word-counter" element={<WordCounter />} />

        {/* Dynamic Generic Tool Routes */}
        {tools
          .filter(tool => !specializedTools.includes(tool.id))
          .map(tool => (
            <Route 
              key={tool.id} 
              path={tool.path} 
              element={<GenericToolPage tool={tool} />} 
            />
          ))
        }
      </Routes>
    </Router>
  );
}

export default App;
