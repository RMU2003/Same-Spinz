import React from 'react';

interface ResultsProps {
  yesCount: number;
  noCount: number;
  maybeCount?: number;
  showMaybe: boolean;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({
  yesCount,
  noCount,
  maybeCount = 0,
  showMaybe,
  onReset
}) => {
  return (
    <div className="mt-6">
      <div className="results-container">
        <div className="result-box result-yes">
          <span>{yesCount}</span>
        </div>

        {showMaybe && (
          <div className="result-box result-maybe">
            <span>{maybeCount}</span>
          </div>
        )}

        <div className="result-box result-no">
          <span>{noCount}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onReset}
          className="text-sm text-primary hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Results
        </button>

        <button className="text-sm text-primary hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.48-.114-.937-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share Results
        </button>
      </div>
    </div>
  );
};

export default Results;
