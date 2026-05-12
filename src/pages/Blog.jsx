import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { tools } from '../toolsData';

const Blog = () => {
  return (
    <>
      <SEO title="Blog - How to Use Our Tools" description="Detailed guides and instructions for all 125+ tools available on ToolVortex." path="/blog" />
      <Navbar />
      
      <main className="container" style={{ minHeight: '80vh', padding: '4rem 1rem' }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>How to Use ToolVortex</h1>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            A comprehensive guide to every tool in our collection. Learn how to optimize your workflow with our text, developer, and 125+ utilities.
          </p>
        </header>

        <div style={{ display: 'grid', gap: '3rem' }}>
          {tools.map(tool => (
            <article key={tool.id} id={tool.id} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{tool.icon}</span>
                <div>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--accent)' }}>{tool.title}</h2>
                  <span className="text-muted">{tool.category}</span>
                </div>
              </div>
              
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>{tool.description}</p>
                <h3 style={{ marginBottom: '0.5rem', color: 'white' }}>Quick Instructions:</h3>
                <p className="text-muted">
                  {tool.howToUse || `To use the ${tool.title}, simply navigate to its page and follow the on-screen instructions. All processing is done locally in your browser for maximum privacy.`}
                </p>
                <a href={tool.path} className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem', textDecoration: 'none' }}>
                  Try {tool.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
