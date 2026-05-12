const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 0',
      borderTop: '1px solid var(--border)',
      marginTop: '4rem',
      background: 'rgba(255, 255, 255, 0.01)'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem' }}>ToolVortex</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Free online tools for developers, designers, and content creators. 
          Optimized for speed and privacy.
        </p>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} ToolVortex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
