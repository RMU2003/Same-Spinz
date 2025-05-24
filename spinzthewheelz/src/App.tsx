import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Wheel from './components/Wheel';
import InputControls from './components/InputControls';
import Results from './components/Results';
import InfoSection from './components/InfoSection';
import ConfettiEffect from './components/ConfettiEffect';
import FullScreenButton from './components/FullScreenButton';
import ResultsHistory from './components/ResultsHistory';
import ShareModal from './components/ShareModal';
import SettingsPanel from './components/SettingsPanel';
import ThemeToggle from './components/ThemeToggle';
import ColorPicker from './components/ColorPicker';
import BlogArticle from './components/BlogArticle';
import SchemaMarkup from './components/SchemaMarkup';
import AdDisplay from './components/AdDisplay';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

interface ResultEntry {
  id: number;
  result: string;
  timestamp: Date;
}

interface WheelColorSettings {
  yesColor: string;
  noColor: string;
  maybeColor1: string;
  maybeColor2: string;
  wheelCenter: string;
  wheelArrow: string;
}

function HomePage() {
  const [options, setOptions] = useState<string[]>(['YES', 'NO']);
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [maybeCount, setMaybeCount] = useState(0);
  const [showMaybe, setShowMaybe] = useState(false);
  const [lastResult, setLastResult] = useState<string | null>(null);
  const [isInputHidden, setIsInputHidden] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [confettiEnabled, setConfettiEnabled] = useState(true);
  const [results, setResults] = useState<ResultEntry[]>([]);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [customColors, setCustomColors] = useState<WheelColorSettings>({
    yesColor: '',
    noColor: '',
    maybeColor1: '',
    maybeColor2: '',
    wheelCenter: '',
    wheelArrow: '',
  });

  // SEO-related state
  const [showFullArticle, setShowFullArticle] = useState(false);

  // Handle URL parameters for shared results
  useEffect(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    if (params.has('yes') || params.has('no') || params.has('maybe')) {
      const yesParam = parseInt(params.get('yes') || '0');
      const noParam = parseInt(params.get('no') || '0');
      const maybeParam = parseInt(params.get('maybe') || '0');

      setYesCount(yesParam);
      setNoCount(noParam);

      if (params.has('maybe')) {
        setMaybeCount(maybeParam);
        setShowMaybe(true);
        setOptions(['YES', 'NO', 'MAYBE']);
      }
    }

    // Show full article for SEO when coming from search engines
    const referrer = document.referrer;
    if (
      referrer.includes('google.com') ||
      referrer.includes('bing.com') ||
      referrer.includes('yahoo.com') ||
      referrer.includes('duckduckgo.com')
    ) {
      setShowFullArticle(true);
    }
  }, []);

  const handleSpinComplete = (result: string) => {
    setLastResult(result);

    // Add to results history
    const newResult: ResultEntry = {
      id: Date.now(),
      result: result,
      timestamp: new Date()
    };

    setResults(prevResults => [newResult, ...prevResults]);

    // Update counters
    if (result.toLowerCase() === 'yes') {
      setYesCount(prev => prev + 1);
    } else if (result.toLowerCase() === 'no') {
      setNoCount(prev => prev + 1);
    } else if (result.toLowerCase() === 'maybe') {
      setMaybeCount(prev => prev + 1);
    }

    // Show confetti if enabled
    if (confettiEnabled) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const handleModeChange = (newOptions: string[]) => {
    setOptions(newOptions);
    setShowMaybe(newOptions.some(opt => opt.toLowerCase() === 'maybe'));
    resetResults();
  };

  const resetResults = () => {
    setYesCount(0);
    setNoCount(0);
    setMaybeCount(0);
    setLastResult(null);
    setResults([]);
  };

  const clearResults = () => {
    resetResults();
  };

  const toggleInputVisibility = () => {
    setIsInputHidden(!isInputHidden);
  };

  const shareResults = () => {
    setShareModalOpen(true);
  };

  const openColorPicker = () => {
    setColorPickerOpen(true);
  };

  const handleApplyColors = (colors: WheelColorSettings) => {
    setCustomColors(colors);
  };

  const toggleFullArticle = () => {
    setShowFullArticle(!showFullArticle);
  };

  return (
    <>
      {/* Inject Schema.org structured data for SEO */}
      <SchemaMarkup type="howto" />
      <SchemaMarkup type="faq" />

      {showConfetti && <ConfettiEffect active={showConfetti} />}

      <Header />

      {/* Top Ad Display */}
      <div className="w-full flex justify-center mt-2 mb-4">
        <AdDisplay className="max-w-4xl w-full" />
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-foreground transition-colors">
                Yes No Picker Wheel - Get Random Decisions
              </h1>

              <div className="flex space-x-2">
                <SettingsPanel
                  soundEnabled={soundEnabled}
                  confettiEnabled={confettiEnabled}
                  onToggleSound={() => setSoundEnabled(!soundEnabled)}
                  onToggleConfetti={() => setConfettiEnabled(!confettiEnabled)}
                />

                <ThemeToggle />

                <button
                  onClick={openColorPicker}
                  className="flex items-center justify-center p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full shadow-md transition-all"
                  title="Customize Colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </button>

                <FullScreenButton />

                <button
                  onClick={toggleInputVisibility}
                  className="text-primary hover:underline text-sm flex items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-full"
                  title={isInputHidden ? "Show Inputs" : "Hide Inputs"}
                >
                  {isInputHidden ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
              Decide yes or no by spinning the wheel. Get random yes or no answers for your questions, overcome decision paralysis, and make choices easily.
            </p>

            {!isInputHidden && (
              <InputControls onModeChange={handleModeChange} />
            )}

            <div className={`mt-6 flex flex-col items-center ${isInputHidden ? 'mt-10' : ''}`}>
              <Wheel
                options={options}
                onSpinComplete={handleSpinComplete}
                soundEnabled={soundEnabled}
                customColors={customColors}
              />

              {(yesCount > 0 || noCount > 0 || maybeCount > 0) && (
                <Results
                  yesCount={yesCount}
                  noCount={noCount}
                  maybeCount={maybeCount}
                  showMaybe={showMaybe}
                  onReset={resetResults}
                />
              )}

              {results.length > 0 && (
                <AdDisplay className="max-w-full w-full my-4" />
              )}

              {lastResult && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Last result:</p>
                  <p className="text-xl font-bold text-foreground transition-colors">{lastResult}</p>
                </div>
              )}

              <ResultsHistory
                results={results}
                onClearResults={clearResults}
                onShareResults={shareResults}
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
            <InfoSection />

            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-foreground">Yes No Wheel Guide</h2>
                <button
                  onClick={toggleFullArticle}
                  className="text-primary hover:underline text-sm"
                >
                  {showFullArticle ? 'Show Less' : 'Read Full Guide'}
                </button>
              </div>

              {showFullArticle ? (
                <>
                  <BlogArticle />
                  <AdDisplay className="max-w-full w-full my-6" />
                </>
              ) : (
                <div className="mt-4 bg-cardBg rounded-lg shadow-sm p-6 transition-colors duration-300">
                  <p className="text-foreground">
                    Discover how to make better decisions with our Yes No Wheel. Learn techniques to overcome decision paralysis, understand when random choices are appropriate, and make the most of this powerful decision-making tool.
                  </p>
                  <button
                    onClick={toggleFullArticle}
                    className="mt-4 text-primary hover:underline"
                  >
                    Read the full guide →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <div className="w-full flex justify-center my-6">
        <AdDisplay className="max-w-4xl w-full" />
      </div>

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        data={{
          yesCount,
          noCount,
          maybeCount: showMaybe ? maybeCount : undefined,
          hasResults: yesCount > 0 || noCount > 0 || maybeCount > 0
        }}
      />

      <ColorPicker
        isOpen={colorPickerOpen}
        onClose={() => setColorPickerOpen(false)}
        onApplyColors={handleApplyColors}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        <footer className="bg-footer text-footer transition-colors py-6 mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">SpinzTheWheelz</h3>
                <p className="text-sm text-gray-400">
                  The ultimate yes/no decision wheel to help you make random decisions quickly and easily
                </p>
              </div>

              <div className="flex space-x-4">
                <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
                <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white">Terms of Use</Link>
                <a href="mailto:info@spinzthewheelz.com" className="text-sm text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} SpinzTheWheelz. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
