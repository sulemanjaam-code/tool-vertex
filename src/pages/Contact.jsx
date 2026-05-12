import ToolLayout from '../components/ToolLayout';

const Contact = () => {
  return (
    <ToolLayout 
      title="Contact Us" 
      description="Have a suggestion or found a bug? We'd love to hear from you."
      path="/contact"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <p>
          We're constantly working to improve ToolVortex and add new tools. 
          If you have any feedback or ideas, please reach out!
        </p>

        <div className="card">
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
              <textarea 
                placeholder="How can we help?"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  outline: 'none',
                  minHeight: '150px'
                }}
              ></textarea>
            </div>
            <button className="btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>

        <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
          <p>Alternatively, email us directly at:</p>
          <p style={{ color: 'var(--primary)', fontWeight: 600 }}>hello@toolvortex.com</p>
        </div>
      </div>
    </ToolLayout>
  );
};

export default Contact;
