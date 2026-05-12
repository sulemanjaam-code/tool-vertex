import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

const WordCounter = () => {
  const [text, setText] = useState('');

  const stats = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0,
    paragraphs: text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0,
    readingTime: Math.ceil((text.trim() ? text.trim().split(/\s+/).length : 0) / 200),
    speakingTime: Math.ceil((text.trim() ? text.trim().split(/\s+/).length : 0) / 130)
  };

  return (
    <ToolLayout
      title="Word & Character Counter"
      description="Count words, characters, sentences, and estimate reading time for any text instantly."
      path="/word-counter"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          style={{
            width: '100%',
            minHeight: '220px',
            padding: '1.25rem',
            fontSize: '1rem',
            lineHeight: '1.8',
            background: 'rgba(0,0,0,0.2)',
            border: '1px solid var(--border)',
            borderRadius: '0.75rem',
            color: 'var(--text-main)',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem'
        }}>
          {[
            { label: 'Words', value: stats.words, icon: '📝' },
            { label: 'Characters', value: stats.characters, icon: '🔤' },
            { label: 'No Spaces', value: stats.charactersNoSpaces, icon: '📏' },
            { label: 'Sentences', value: stats.sentences, icon: '💬' },
            { label: 'Paragraphs', value: stats.paragraphs, icon: '📄' },
            { label: 'Read Time', value: `${stats.readingTime} min`, icon: '⏱️' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: 'rgba(0,0,0,0.15)',
              padding: '1.25rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              border: '1px solid var(--border)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {text.trim() && (
          <button
            onClick={() => setText('')}
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.3s ease'
            }}
          >
            Clear Text
          </button>
        )}
      </div>
    </ToolLayout>
  );
};

export default WordCounter;
