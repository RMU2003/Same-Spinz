import { useState, useRef, useEffect } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    yesCount: number;
    noCount: number;
    maybeCount?: number;
    hasResults: boolean;
  };
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, data }) => {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);

  // Generate the share link or message
  const generateShareContent = () => {
    const { yesCount, noCount, maybeCount } = data;

    const baseUrl = window.location.origin;
    const shareUrl = new URL(baseUrl);

    if (data.hasResults) {
      shareUrl.searchParams.append('yes', yesCount.toString());
      shareUrl.searchParams.append('no', noCount.toString());
      if (maybeCount && maybeCount > 0) {
        shareUrl.searchParams.append('maybe', maybeCount.toString());
      }
    }

    return shareUrl.toString();
  };

  const shareText = `Check out my SpinzTheWheelz results: YES: ${data.yesCount}, NO: ${data.noCount}${data.maybeCount ? `, MAYBE: ${data.maybeCount}` : ''}`;

  // Copy link to clipboard
  const copyToClipboard = () => {
    if (linkInputRef.current) {
      linkInputRef.current.select();
      document.execCommand('copy');
      setCopied(true);

      // Reset copied status after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Share via different platforms
  const shareVia = (platform: 'twitter' | 'facebook' | 'whatsapp' | 'email') => {
    const shareUrl = generateShareContent();
    let url = '';

    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'email':
        url = `mailto:?subject=${encodeURIComponent('My SpinzTheWheelz Results')}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
        break;
    }

    window.open(url, '_blank');
  };

  // Close when clicking outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Share Your Results</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {data.hasResults ? (
          <div className="text-center mb-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{data.yesCount}</div>
                <div className="text-sm text-gray-500">YES</div>
              </div>

              {data.maybeCount !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{data.maybeCount}</div>
                  <div className="text-sm text-gray-500">MAYBE</div>
                </div>
              )}

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{data.noCount}</div>
                <div className="text-sm text-gray-500">NO</div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mb-4 text-center">
            No results yet. Spin the wheel to get results you can share!
          </p>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Share Link
          </label>
          <div className="flex">
            <input
              ref={linkInputRef}
              type="text"
              value={generateShareContent()}
              readOnly
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={copyToClipboard}
              className="bg-primary hover:bg-secondary text-white rounded-r-md px-3 py-2 text-sm transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Share via:
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => shareVia('twitter')}
              className="flex-1 bg-[#1DA1F2] hover:bg-[#0c85d0] text-white py-2 rounded-md text-sm"
            >
              Twitter
            </button>
            <button
              onClick={() => shareVia('facebook')}
              className="flex-1 bg-[#4267B2] hover:bg-[#365899] text-white py-2 rounded-md text-sm"
            >
              Facebook
            </button>
            <button
              onClick={() => shareVia('whatsapp')}
              className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-2 rounded-md text-sm"
            >
              WhatsApp
            </button>
            <button
              onClick={() => shareVia('email')}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md text-sm"
            >
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
