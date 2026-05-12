import { useState, useCallback } from 'react';
import ToolLayout from '../components/ToolLayout';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
    setCopied(false);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout 
      title="Secure Password Generator" 
      description="Create strong, secure passwords instantly. Our generator runs entirely in your browser, ensuring your passwords remain private."
      path="/password-generator"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{
          background: 'rgba(0,0,0,0.2)',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          wordBreak: 'break-all',
          minHeight: '80px'
        }}>
          <span style={{ fontSize: '1.5rem', fontFamily: 'monospace', color: password ? 'var(--text-main)' : 'var(--text-muted)' }}>
            {password || 'Click Generate...'}
          </span>
          <button 
            onClick={copyToClipboard}
            className="btn-primary"
            style={{ marginLeft: '1rem', whiteSpace: 'nowrap' }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Password Length</span>
              <span className="text-muted">{length}</span>
            </label>
            <input 
              type="range" 
              min="8" 
              max="64" 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))}
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={includeUppercase} 
                onChange={(e) => setIncludeUppercase(e.target.checked)} 
              />
              Include Uppercase Letters (A-Z)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={includeNumbers} 
                onChange={(e) => setIncludeNumbers(e.target.checked)} 
              />
              Include Numbers (0-9)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={includeSymbols} 
                onChange={(e) => setIncludeSymbols(e.target.checked)} 
              />
              Include Symbols (!@#$...)
            </label>
          </div>
        </div>

        <button 
          onClick={generatePassword} 
          className="btn-primary"
          style={{ width: '100%', marginTop: '1rem', padding: '1rem', fontSize: '1.125rem' }}
        >
          Generate New Password
        </button>
      </div>
    </ToolLayout>
  );
};

export default PasswordGenerator;
