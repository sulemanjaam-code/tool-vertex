import { useState } from 'react';
import ToolLayout from '../components/ToolLayout';

const conversions = {
  length: {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701
  },
  weight: {
    kilograms: 1,
    grams: 1000,
    milligrams: 1000000,
    metric_tons: 0.001,
    pounds: 2.20462,
    ounces: 35.274
  }
};

const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('feet');
  const [amount, setAmount] = useState('1');

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    const units = Object.keys(conversions[newCategory]);
    setFromUnit(units[0]);
    setToUnit(units[1]);
  };

  const getConvertedValue = () => {
    if (!amount || isNaN(amount)) return '';
    const baseValue = amount / conversions[category][fromUnit];
    const convertedValue = baseValue * conversions[category][toUnit];
    return convertedValue.toLocaleString(undefined, { maximumFractionDigits: 6 });
  };

  return (
    <ToolLayout 
      title="Universal Unit Converter" 
      description="Convert between length, weight, and other units instantly with high precision."
      path="/unit-converter"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Measurement Type</label>
          <select 
            value={category} 
            onChange={handleCategoryChange}
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '0.5rem', 
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--border)',
              color: 'var(--text-main)',
              outline: 'none'
            }}
          >
            <option value="length">Length</option>
            <option value="weight">Weight</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'center' }}>
          <div>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.25rem',
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid var(--border)',
                borderBottomLeftRadius: '0.5rem',
                borderTopLeftRadius: '0.5rem',
                color: 'white',
                outline: 'none'
              }}
            />
            <select 
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.5rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border)',
                borderTop: 'none',
                color: 'var(--text-muted)',
                outline: 'none'
              }}
            >
              {Object.keys(conversions[category]).map(unit => (
                <option key={unit} value={unit}>{unit.replace('_', ' ')}</option>
              ))}
            </select>
          </div>

          <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>=</div>

          <div>
            <div style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.25rem',
              background: 'rgba(0,0,0,0.1)',
              border: '1px solid var(--border)',
              borderBottomRightRadius: '0.5rem',
              borderTopRightRadius: '0.5rem',
              color: 'white',
              minHeight: '62px',
              display: 'flex',
              alignItems: 'center'
            }}>
              {getConvertedValue()}
            </div>
            <select 
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.5rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border)',
                borderTop: 'none',
                color: 'var(--text-muted)',
                outline: 'none'
              }}
            >
              {Object.keys(conversions[category]).map(unit => (
                <option key={unit} value={unit}>{unit.replace('_', ' ')}</option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </ToolLayout>
  );
};

export default UnitConverter;
