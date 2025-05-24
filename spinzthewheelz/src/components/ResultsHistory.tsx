import { useState } from 'react';

interface ResultEntry {
  id: number;
  result: string;
  timestamp: Date;
}

interface ResultsHistoryProps {
  results: ResultEntry[];
  onClearResults: () => void;
  onShareResults: () => void;
}

const ResultsHistory: React.FC<ResultsHistoryProps> = ({
  results,
  onClearResults,
  onShareResults,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="mt-6 w-full">
      <button
        onClick={toggleOpen}
        className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg flex items-center justify-center transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 mr-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {isOpen ? 'Hide All Results' : 'View All Results'}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold mb-4">Results History</h3>

          {results.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No results yet. Spin the wheel to start!</p>
          ) : (
            <>
              <div className="max-h-60 overflow-y-auto mb-4">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 text-left">Time</th>
                      <th className="py-2 px-4 text-left">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((entry) => (
                      <tr key={entry.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-2 px-4 text-sm">{formatTime(entry.timestamp)}</td>
                        <td className="py-2 px-4">
                          <span
                            className={`font-semibold ${
                              entry.result === 'YES'
                                ? 'text-green-600'
                                : entry.result === 'NO'
                                ? 'text-gray-800'
                                : 'text-yellow-600'
                            }`}
                          >
                            {entry.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between pt-2 border-t border-gray-200">
                <button
                  onClick={onClearResults}
                  className="text-red-500 hover:text-red-700 text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v10M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"
                    />
                  </svg>
                  Clear All Results
                </button>

                <button
                  onClick={onShareResults}
                  className="text-primary hover:text-secondary text-sm flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.48-.114-.937-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  Share Results
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsHistory;
