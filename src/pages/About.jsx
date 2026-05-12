import ToolLayout from '../components/ToolLayout';

const About = () => {
  return (
    <ToolLayout 
      title="About ToolVortex" 
      description="Learn more about our mission to provide fast, secure, and free tools for everyone."
      path="/about"
    >
      <div style={{ lineHeight: '1.8' }}>
        <p>
          Welcome to <strong>ToolVortex</strong>, your premier destination for high-quality, 
          privacy-focused online tools. Our mission is simple: to build the fastest and 
          most reliable tools that help you get your work done without compromising your data.
        </p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Philosophy</h2>
        <p>
          We believe that tools should be accessible to everyone, free of charge, and 
          respectful of user privacy. That's why all our processing happens 
          <strong> client-side</strong>. Your text, passwords, and data never leave 
          your browser.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Why ToolVortex?</h2>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li><strong>Blazing Fast:</strong> Built with modern web technologies for instant results.</li>
          <li><strong>Privacy First:</strong> No tracking, no data storage, no server-side processing.</li>
          <li><strong>Premium Design:</strong> A clean, dark-themed interface that's easy on the eyes.</li>
          <li><strong>Always Free:</strong> No subscriptions, no hidden costs.</li>
        </ul>
      </div>
    </ToolLayout>
  );
};

export default About;
