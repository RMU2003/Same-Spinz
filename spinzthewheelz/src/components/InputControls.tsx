import { useState } from 'react';

interface InputControlsProps {
  onModeChange: (options: string[]) => void;
}

const InputControls: React.FC<InputControlsProps> = ({ onModeChange }) => {
  const [mode, setMode] = useState<'yes-no' | 'yes-no-maybe'>('yes-no');
  const [numSets, setNumSets] = useState<number>(1);

  const handleModeChange = (newMode: 'yes-no' | 'yes-no-maybe') => {
    setMode(newMode);
    if (newMode === 'yes-no') {
      const options = Array(numSets).fill('').flatMap(() => ['YES', 'NO']);
      onModeChange(options);
    } else {
      const options = Array(numSets).fill('').flatMap(() => ['YES', 'NO', 'MAYBE']);
      onModeChange(options);
    }
  };

  const handleNumSetsChange = (newNumSets: number) => {
    setNumSets(newNumSets);
    if (mode === 'yes-no') {
      const options = Array(newNumSets).fill('').flatMap(() => ['YES', 'NO']);
      onModeChange(options);
    } else {
      const options = Array(newNumSets).fill('').flatMap(() => ['YES', 'NO', 'MAYBE']);
      onModeChange(options);
    }
  };

  return (
    <div className="inputs-container">
      <h3 className="section-title">INPUTS</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1 transition-colors">Mode</label>
          <div className="flex space-x-2">
            <button
              onClick={() => handleModeChange('yes-no')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                mode === 'yes-no'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Yes or No
            </button>
            <button
              onClick={() => handleModeChange('yes-no-maybe')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                mode === 'yes-no-maybe'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Yes, No or Maybe
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1 transition-colors">Number of Input Sets</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                onClick={() => handleNumSetsChange(num)}
                className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all ${
                  numSets === num
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputControls;
