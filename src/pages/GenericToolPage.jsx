import { useState, useEffect } from 'react';
import ToolLayout from '../components/ToolLayout';
import { callGroqAI } from '../groq';

const GenericToolPage = ({ tool }) => {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const processTool = async () => {
    try {
      setLoading(true);
      setError('');
      const val = input;
      const val2 = input2;

      // AI Tool Execution
      if (tool.category.includes('AI')) {
        let prompt = '';
        switch (tool.id) {
          case 'ai-summarizer': prompt = 'Summarize the following text professionally and concisely:'; break;
          case 'ai-paraphraser': prompt = 'Rewrite the following text in a different way while keeping the same meaning:'; break;
          case 'ai-grammar-fixer': prompt = 'Fix all grammar and spelling errors in the following text. Only return the corrected text:'; break;
          case 'ai-blog-titles': prompt = 'Generate 5 catchy and SEO-friendly blog post titles based on these keywords/topic:'; break;
          case 'ai-seo-keywords': prompt = 'Extract the most important SEO keywords from the following text:'; break;
          case 'ai-email-writer': prompt = 'Draft a professional email based on these points:'; break;
          case 'ai-code-explainer': prompt = 'Explain this code snippet in simple terms:'; break;
          case 'ai-sql-gen': prompt = 'Generate a standard SQL query based on this description:'; break;
          default: prompt = `Perform the task of a ${tool.title}:`;
        }
        
        const result = await callGroqAI(prompt, val);
        setOutput(result);
        return;
      }

      // Grouped logic for 100+ tools
      switch (tool.id) {
        // Text Tools
        case 'character-counter':
          setOutput(`Characters: ${val.length}\nCharacters (no spaces): ${val.replace(/\s/g, '').length}\nLines: ${val.split('\n').length}`);
          break;
        case 'case-converter':
          setOutput(`UPPER: ${val.toUpperCase()}\nlower: ${val.toLowerCase()}\nTitle: ${val.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}`);
          break;
        case 'remove-duplicate-lines':
          setOutput([...new Set(val.split('\n'))].join('\n'));
          break;
        case 'text-diff-checker':
          setOutput(val === val2 ? 'Texts are identical' : 'Texts are different');
          break;
        case 'text-sorter':
          setOutput(val.split('\n').sort().join('\n'));
          break;
        case 'random-text-generator':
          setOutput(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
          break;
        case 'fancy-text-generator':
          const map = { a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ' };
          setOutput(val.toLowerCase().split('').map(c => map[c] || c).join(''));
          break;
        case 'unicode-converter':
          setOutput(val.split('').map(c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).join(''));
          break;
        case 'slug-generator':
          setOutput(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
          break;
        case 'regex-tester':
          try {
            const re = new RegExp(val2);
            setOutput(re.test(val) ? 'Match found' : 'No match');
          } catch { setOutput('Invalid Regex'); }
          break;

        // Developer Tools
        case 'base64-codec':
          setOutput(btoa(val));
          break;
        case 'jwt-decoder':
          const parts = val.split('.');
          if (parts.length === 3) setOutput(JSON.stringify(JSON.parse(atob(parts[1])), null, 2));
          else setOutput('Invalid JWT');
          break;
        case 'url-codec':
          setOutput(encodeURIComponent(val));
          break;
        case 'html-codec':
          const el = document.createElement('div');
          el.innerText = val;
          setOutput(el.innerHTML);
          break;
        case 'sha256-gen':
        case 'md5-gen':
          setOutput('Hash generation is simulated for this demo. Use specialized libraries for production.');
          break;
        case 'uuid-gen':
          setOutput(crypto.randomUUID());
          break;

        // Calculators
        case 'age-calc':
          const birth = new Date(val);
          const age = new Date().getFullYear() - birth.getFullYear();
          setOutput(`${age} years old`);
          break;
        case 'bmi-calc':
          const h = parseFloat(val) / 100;
          const w = parseFloat(val2);
          setOutput((w / (h * h)).toFixed(2));
          break;
        case 'percentage-calc':
          setOutput((parseFloat(val) / 100 * parseFloat(val2)).toFixed(2));
          break;
        case 'length-conv':
          const meters = parseFloat(val) || 0;
          setOutput(`${meters}m = ${(meters * 3.28084).toFixed(2)}ft\n${meters}m = ${(meters * 39.3701).toFixed(2)}in\n${meters}m = ${(meters / 1000).toFixed(3)}km`);
          break;
        case 'weight-conv':
          const kg = parseFloat(val) || 0;
          setOutput(`${kg}kg = ${(kg * 2.20462).toFixed(2)}lbs\n${kg}kg = ${(kg * 35.274).toFixed(2)}oz\n${kg}kg = ${kg * 1000}g`);
          break;
        case 'temp-conv':
          const c = parseFloat(val) || 0;
          setOutput(`${c}°C = ${(c * 9/5 + 32).toFixed(2)}°F\n${c}°C = ${(c + 273.15).toFixed(2)}K`);
          break;
        case 'data-conv':
          const mb = parseFloat(val) || 0;
          setOutput(`${mb}MB = ${mb * 1024}KB\n${mb}MB = ${(mb / 1024).toFixed(4)}GB\n${mb}MB = ${mb * 1024 * 1024} Bytes`);
          break;
        case 'hex-dec':
          setOutput(parseInt(val, 16).toString());
          break;
        case 'dec-hex':
          setOutput(parseInt(val).toString(16).toUpperCase());
          break;
        case 'bin-text':
          setOutput(val.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join(''));
          break;
        case 'text-bin':
          setOutput(val.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' '));
          break;
        case 'morse-codec':
          const morse = { 'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..' };
          setOutput(val.toLowerCase().split('').map(c => morse[c] || c).join(' '));
          break;

        // Fun Tools
        case 'meta-tag-gen':
          setOutput(`<title>${val}</title>\n<meta name="description" content="${val2}">`);
          break;

        // Fun Tools
        case 'dice-roller':
          setOutput(`You rolled: ${Math.floor(Math.random() * 6) + 1}`);
          break;
        case 'coin-flip':
          setOutput(Math.random() > 0.5 ? 'Heads' : 'Tails');
          break;
        case 'glitch-text':
          setOutput(val.split('').map(c => c + '\u0342\u0334\u0332').join(''));
          break;

        default:
          if (tool.isComingSoon || tool.category.includes('AI') || tool.category.includes('PDF') || tool.category.includes('Image')) {
            setOutput(`[Coming Soon] The ${tool.title} is currently being optimized for high-performance client-side processing.`);
          } else {
            setOutput('Ready for input...');
          }
      }
    } catch (e) {
      setError('Check your input format.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (['uuid-gen', 'dice-roller', 'coin-flip', 'random-text-generator'].includes(tool.id)) {
      processTool();
    }
  }, [tool.id]);

  useEffect(() => {
    const isAI = tool.category.includes('AI');
    if (!isAI && (input || input2)) processTool();
  }, [input, input2]);

  const isAI = tool.category.includes('AI');
  const isDualInput = ['bmi-calc', 'percentage-calc', 'text-diff-checker', 'regex-tester', 'meta-tag-gen'].includes(tool.id);
  const isDateTool = ['age-calc'].includes(tool.id);
  const isNoInput = ['uuid-gen', 'dice-roller', 'coin-flip', 'random-text-generator'].includes(tool.id);

  return (
    <ToolLayout title={tool.title} description={tool.description} path={tool.path} howToUse={tool.howToUse}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {!isNoInput && (
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: isDualInput ? '1fr 1fr' : '1fr' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                {isDualInput ? (tool.id === 'bmi-calc' ? 'Height (cm)' : 'Input 1') : 'Input'}
              </label>
              {isDateTool ? (
                <input type="date" value={input} onChange={(e) => setInput(e.target.value)} className="card" style={{ width: '100%', padding: '0.75rem', color: 'white' }} />
              ) : (
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste here..."
                  style={{ width: '100%', minHeight: isDualInput ? '60px' : '200px', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white', outline: 'none', fontFamily: 'monospace' }}
                />
              )}
            </div>

            {isDualInput && (
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                  {tool.id === 'bmi-calc' ? 'Weight (kg)' : tool.id === 'regex-tester' ? 'Regex Pattern' : 'Input 2'}
                </label>
                <textarea
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  placeholder="Type here..."
                  style={{ width: '100%', minHeight: '60px', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white', outline: 'none', fontFamily: 'monospace' }}
                />
              </div>
            )}
          </div>
        )}

        {isAI && (
          <button 
            onClick={processTool} 
            disabled={loading || !input}
            className="btn-primary" 
            style={{ padding: '1rem', width: '100%', fontSize: '1.1rem' }}
          >
            {loading ? 'AI is thinking...' : `Generate ${tool.title}`}
          </button>
        )}

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Result</label>
          {error ? (
            <div style={{ color: '#ef4444', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '0.5rem' }}>{error}</div>
          ) : (
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '100%', 
                minHeight: '120px', 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--border)', 
                borderRadius: '0.75rem', 
                color: loading ? 'var(--text-muted)' : 'var(--accent)', 
                fontSize: '1.1rem', 
                fontWeight: 500, 
                whiteSpace: 'pre-wrap', 
                wordBreak: 'break-all',
                transition: 'opacity 0.3s'
              }}>
                {loading ? 'Processing with Groq AI...' : (output || 'Output will appear here...')}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button onClick={() => navigator.clipboard.writeText(output)} className="btn-primary" style={{ flex: 1, padding: '0.5rem' }}>Copy Result</button>
                {isNoInput && <button onClick={processTool} className="card" style={{ flex: 1, color: 'white' }}>Regenerate</button>}
              </div>
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
};

export default GenericToolPage;
