import { useEffect } from 'react';

const AdUnit = ({ slot, type = 'horizontal', className = '' }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  // For development, we show a placeholder
  const isDev = import.meta.env.DEV;

  return (
    <div className={`ad-container ${type === 'sidebar' ? 'ad-sidebar' : 'ad-horizontal'} ${className}`}>
      {isDev ? (
        <div style={{ textAlign: 'center' }}>
          <p>Advertisement</p>
          <p style={{ fontSize: '10px' }}>Slot: {slot}</p>
        </div>
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with actual client ID
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
};

export default AdUnit;
