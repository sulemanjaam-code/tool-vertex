import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 100,
      padding: '1rem 0'
    }}>
      <div className="container flex items-center justify-between">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <span style={{ fontSize: '1.75rem' }}>🌀</span>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Tool<span style={{ color: 'var(--primary)' }}>Vortex</span></span>
        </Link>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Home</Link>
          <Link to="/tools" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Tools</Link>
          <Link to="/blog" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Blog</Link>
          <Link to="/about" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>About</Link>
          <Link to="/contact" style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
