import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdUnit: React.FC<AdUnitProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  style = {},
  className = '',
}) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Check if adsbygoogle is defined
      if (window.adsbygoogle) {
        // Push the ad to Google AdSense
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } else {
        console.log('AdSense not loaded yet');
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [slot]);

  const formatSizes: Record<string, { width: string; height: string }> = {
    rectangle: { width: '300px', height: '250px' },
    horizontal: { width: '728px', height: '90px' },
    vertical: { width: '160px', height: '600px' },
    auto: { width: '100%', height: 'auto' },
  };

  const formatSize = formatSizes[format];

  return (
    <div
      ref={adRef}
      className={`ad-container my-4 overflow-hidden ${className}`}
      style={{ textAlign: 'center', ...style }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: formatSize.width,
          height: formatSize.height,
          margin: '0 auto',
        }}
        data-ad-client="ca-pub-1432903128681944"
        data-ad-slot={slot}
        data-ad-format={responsive ? 'auto' : format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
      <div className="text-xs text-gray-400 mt-1">Advertisement</div>
    </div>
  );
};

export default AdUnit;
