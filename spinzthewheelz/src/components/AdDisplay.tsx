import React, { useEffect, useRef } from 'react';

interface AdDisplayProps {
  className?: string;
  style?: React.CSSProperties;
}

const AdDisplay: React.FC<AdDisplayProps> = ({ className = '', style = {} }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Add the Google AdSense ad
      const adScript = document.createElement('script');
      adScript.async = true;
      adScript.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';

      // Add the script to the container if it exists
      if (adRef.current) {
        adRef.current.appendChild(adScript);
      }
    } catch (error) {
      console.error('Error loading ad:', error);
    }
  }, []);

  return (
    <div
      ref={adRef}
      className={`ad-container my-6 ${className}`}
      style={{ ...style }}
    >
      {/* KUBER ad unit */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1432903128681944"
        data-ad-slot="8149097499"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdDisplay;
