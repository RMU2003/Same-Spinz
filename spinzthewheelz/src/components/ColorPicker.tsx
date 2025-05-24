import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorSettings {
  yesColor: string;
  noColor: string;
  maybeColor1: string;
  maybeColor2: string;
  wheelCenter: string;
  wheelArrow: string;
}

interface ColorPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyColors: (colors: ColorSettings) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ isOpen, onClose, onApplyColors }) => {
  const [activeColor, setActiveColor] = useState<keyof ColorSettings>('yesColor');
  const [colors, setColors] = useState<ColorSettings>({
    yesColor: getComputedStyle(document.documentElement).getPropertyValue('--wheel-yes-color').trim() || '#4fb30a',
    noColor: getComputedStyle(document.documentElement).getPropertyValue('--wheel-no-color').trim() || '#2d6606',
    maybeColor1: getComputedStyle(document.documentElement).getPropertyValue('--wheel-maybe-color-1').trim() || '#e99e0a',
    maybeColor2: getComputedStyle(document.documentElement).getPropertyValue('--wheel-maybe-color-2').trim() || '#c7870a',
    wheelCenter: getComputedStyle(document.documentElement).getPropertyValue('--wheel-center-color').trim() || '#111',
    wheelArrow: getComputedStyle(document.documentElement).getPropertyValue('--wheel-arrow-color').trim() || '#e11d48',
  });

  const handleColorChange = (color: string) => {
    setColors({ ...colors, [activeColor]: color });
  };

  const applyColors = () => {
    onApplyColors(colors);
    onClose();
  };

  const resetColors = () => {
    const defaultColors: ColorSettings = {
      yesColor: '#4fb30a',
      noColor: '#2d6606',
      maybeColor1: '#e99e0a',
      maybeColor2: '#c7870a',
      wheelCenter: '#111',
      wheelArrow: '#e11d48',
    };

    setColors(defaultColors);
    onApplyColors(defaultColors);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Customize Wheel Colors</h3>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button
              className={`p-2 rounded-md text-white text-sm transition-colors ${
                activeColor === 'yesColor' ? 'ring-2 ring-primary' : ''
              }`}
              style={{ backgroundColor: colors.yesColor }}
              onClick={() => setActiveColor('yesColor')}
            >
              YES
            </button>
            <button
              className={`p-2 rounded-md text-white text-sm transition-colors ${
                activeColor === 'noColor' ? 'ring-2 ring-primary' : ''
              }`}
              style={{ backgroundColor: colors.noColor }}
              onClick={() => setActiveColor('noColor')}
            >
              NO
            </button>
            <button
              className={`p-2 rounded-md text-white text-sm transition-colors ${
                activeColor === 'maybeColor1' ? 'ring-2 ring-primary' : ''
              }`}
              style={{ backgroundColor: colors.maybeColor1 }}
              onClick={() => setActiveColor('maybeColor1')}
            >
              MAYBE 1
            </button>
            <button
              className={`p-2 rounded-md text-white text-sm transition-colors ${
                activeColor === 'maybeColor2' ? 'ring-2 ring-primary' : ''
              }`}
              style={{ backgroundColor: colors.maybeColor2 }}
              onClick={() => setActiveColor('maybeColor2')}
            >
              MAYBE 2
            </button>
            <button
              className={`p-2 rounded-md text-white text-sm transition-colors ${
                activeColor === 'wheelCenter' ? 'ring-2 ring-primary' : ''
              }`}
              style={{ backgroundColor: colors.wheelCenter }}
              onClick={() => setActiveColor('wheelCenter')}
            >
              CENTER
            </button>
            <button
              className={`p-2 rounded-md text-white text-sm transition-colors ${
                activeColor === 'wheelArrow' ? 'ring-2 ring-primary' : ''
              }`}
              style={{ backgroundColor: colors.wheelArrow }}
              onClick={() => setActiveColor('wheelArrow')}
            >
              ARROW
            </button>
          </div>

          <div className="flex justify-center">
            <HexColorPicker
              color={colors[activeColor]}
              onChange={handleColorChange}
              style={{ width: '100%' }}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Color code
            </label>
            <input
              type="text"
              value={colors[activeColor]}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={resetColors}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Reset to Default
          </button>
          <button
            onClick={applyColors}
            className="px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md text-sm"
          >
            Apply Colors
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
