import { Link } from 'react-router-dom';
import { tools } from '../toolsData';
import SEO from './SEO';
import AdUnit from './AdUnit';
import Navbar from './Navbar';
import Footer from './Footer';

const ToolLayout = ({ children, title, description, path, howToUse }) => {
  const relatedTools = tools
    .filter(t => t.path !== path)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  return (
    <>
      <SEO title={title} description={description} path={path} />
      <Navbar />
      
      <main className="container" style={{ minHeight: '80vh' }}>
        <header className="tool-header animate-fade-in">
          <h1>{title}</h1>
          <p className="text-muted">{description}</p>
        </header>

        <AdUnit slot="header-top" type="horizontal" />

        <div className="tool-grid">
          <div className="tool-main">
            <div className="glass-card animate-fade-in">
              {children}
            </div>
            
            <section style={{ marginTop: '4rem' }} className="animate-fade-in">
              <h2>How to use {title}</h2>
              <p className="text-muted" style={{ marginTop: '1rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
                {howToUse || `This tool allows you to ${description.toLowerCase()} quickly and easily. Simply follow the steps in the interface above. Our tools are processed client-side, meaning your data never leaves your browser.`}
              </p>
            </section>
          </div>

          <aside className="tool-sidebar">
            <AdUnit slot="sidebar-right" type="sidebar" />
            <div className="card" style={{ marginTop: '2rem' }}>
              <h3>Suggested Tools</h3>
              <ul style={{ marginTop: '1rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {relatedTools.map(rt => (
                  <li key={rt.id}>
                    <Link to={rt.path} style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem' }}>
                      {rt.icon} {rt.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <AdUnit slot="footer-bottom" type="horizontal" />
      </main>

      <Footer />
    </>
  );
};

export default ToolLayout;
