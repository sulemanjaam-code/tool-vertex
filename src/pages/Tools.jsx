import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { tools } from '../toolsData';

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(tools.map(t => t.category))];

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Tools Directory | 125+ Free Online Utilities" 
        description="Search our comprehensive library of 125+ free online tools for developers, designers, and students." 
        path="/tools"
      />
      <Navbar />
      
      <main className="container" style={{ padding: '4rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Tools <span style={{ color: 'var(--primary)' }}>Directory</span></h1>
            <p className="text-muted">Browse through all 125+ privacy-focused utilities.</p>
          </div>
          
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <input 
              type="text" 
              placeholder="Search 125+ tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '1rem',
                background: 'var(--glass)',
                border: '1px solid var(--border)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '2rem',
                background: activeCategory === cat ? 'var(--primary)' : 'var(--glass)',
                color: 'white',
                border: '1px solid var(--border)',
                fontSize: '0.9rem',
                transition: 'var(--transition)',
                fontWeight: activeCategory === cat ? 600 : 400
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {filteredTools.map(tool => (
            <Link key={tool.id} to={tool.path} className="card" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              transition: 'var(--transition)',
              cursor: 'pointer',
              textDecoration: 'none',
              height: '100%',
              opacity: tool.isComingSoon ? 0.8 : 1,
              position: 'relative',
              border: '1px solid var(--border)',
              borderRadius: '1.25rem',
              padding: '2rem'
            }}>
              {tool.isComingSoon && (
                <span style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  color: 'white',
                  fontSize: '0.7rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                }}>
                  Coming Soon
                </span>
              )}
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{tool.title}</h3>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.5 }}>{tool.description}</p>
              <div style={{ 
                marginTop: 'auto', 
                color: tool.isComingSoon ? 'var(--text-muted)' : 'var(--primary)', 
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                paddingTop: '1rem'
              }}>
                {tool.isComingSoon ? 'Development' : 'Launch Tool'} <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Tools;
