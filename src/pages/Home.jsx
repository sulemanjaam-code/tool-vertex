import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { tools } from '../toolsData';

const Home = () => {
  return (
    <>
      <SEO 
        title="ToolVortex | Premium Digital Utilities & Developer Tools" 
        description="The fastest, most secure online toolbox for creators and developers. 125+ free tools processed entirely in your browser." 
        path="/"
      />
      <Navbar />
      
      <main>
        {/* Section 1: Hero */}
        <section style={{ 
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1rem',
          background: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ 
              background: 'var(--glass)', 
              padding: '0.5rem 1.5rem', 
              borderRadius: '2rem', 
              border: '1px solid var(--border)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--accent)',
              display: 'inline-block',
              marginBottom: '2rem',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              ✨ Version 2.0 Live: 125+ New Tools
            </span>
            
            <h1 style={{ 
              fontSize: 'clamp(3rem, 10vw, 6rem)', 
              fontWeight: 900, 
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
              animation: 'fadeInUp 1s ease-out'
            }}>
              The Ultimate <br/>
              <span className="text-gradient">Creator Stack</span>
            </h1>
            
            <p className="text-muted" style={{ 
              fontSize: '1.25rem', 
              maxWidth: '650px', 
              margin: '0 auto 3rem',
              lineHeight: 1.6,
              animation: 'fadeInUp 1.2s ease-out'
            }}>
              Professional-grade utilities for developers, students, and creators. 
              Secure, lightning-fast, and completely free.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 1.4s ease-out' }}>
              <Link to="/tools" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                Open Toolbox <span>→</span>
              </Link>
              <Link to="/blog" className="glass-card" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', textDecoration: 'none', border: '1px solid var(--border)', fontWeight: 600 }}>
                Read Documentation
              </Link>
            </div>
          </div>

          {/* Decorative background elements */}
          <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: 1 }}></div>
          <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '300px', height: '300px', background: 'var(--accent)', filter: 'blur(150px)', opacity: 0.1, zIndex: 1 }}></div>
        </section>

        {/* Section 2: Features Grid */}
        <section style={{ padding: '8rem 1rem', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for <span style={{ color: 'var(--primary)' }}>Excellence</span></h2>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>We combine cutting-edge technology with minimalist design to provide the best user experience.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              <div className="glass-card" style={{ padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛡️</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Zero-Knowledge Privacy</h3>
                <p className="text-muted">Your data is yours. All calculations happen locally in your browser. We never see, store, or transmit your inputs.</p>
              </div>
              <div className="glass-card" style={{ padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No-Latency Workflow</h3>
                <p className="text-muted">No waiting for server responses. Our tools are optimized for instant execution, even on complex transformations.</p>
              </div>
              <div className="glass-card" style={{ padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💎</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Premium by Default</h3>
                <p className="text-muted">A clean, ad-light interface designed for focus. No annoying popups or multi-step processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Stat Counter */}
        <section style={{ padding: '6rem 1rem', background: 'var(--glass)', borderY: '1px solid var(--border)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--primary)' }}>125+</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Active Tools</div>
            </div>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent)' }}>100%</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Private & Secure</div>
            </div>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#10b981' }}>0ms</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Server Delay</div>
            </div>
          </div>
        </section>

        {/* Section 4: Category Preview */}
        <section style={{ padding: '8rem 1rem' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ maxWidth: '500px' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>One Suite. <br/>Infinite Possibilities.</h2>
                <p className="text-muted">From deep developer utilities to everyday productivity hacks, we've got you covered.</p>
              </div>
              <Link to="/tools" className="btn-primary" style={{ padding: '1rem 2.5rem', textDecoration: 'none' }}>Browse All Categories</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {['Text Mastery', 'Dev Utilities', 'AI Power', 'PDF Magic', 'Calculators', 'Security'].map(cat => (
                <div key={cat} className="card" style={{ padding: '1.5rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                  <h4 style={{ fontWeight: 700 }}>{cat}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: '8rem 1rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to optimize your workflow?</h2>
            <p className="text-muted" style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>Join thousands of users who trust ToolVortex every day.</p>
            <Link to="/tools" className="btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', textDecoration: 'none' }}>Get Started Now</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
