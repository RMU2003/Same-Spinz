import { useState, useRef, useEffect } from 'react';
import SoundEffects from './SoundEffects';
import useWheelGestures from '../utils/useWheelGestures';

interface WheelProps {
  options: string[];
  onSpinComplete: (result: string) => void;
  soundEnabled: boolean;
  customColors?: {
    yesColor?: string;
    noColor?: string;
    maybeColor1?: string;
    maybeColor2?: string;
    wheelCenter?: string;
    wheelArrow?: string;
  };
}

const Wheel: React.FC<WheelProps> = ({
  options,
  onSpinComplete,
  soundEnabled,
  customColors = {}
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [spinCompleted, setSpinCompleted] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Set up wheel gesture support
  const { bindGestures } = useWheelGestures({
    wheelRef,
    isSpinning,
    onSpin: spinWheel
  });

  // Get color based on the option and index
  const getOptionColor = (option: string, index: number) => {
    const colorMapping: Record<string, string[]> = {
      'YES': ['bg-yesColor', 'bg-noColor'],
      'NO': ['bg-noColor', 'bg-yesColor'],
      'MAYBE': ['bg-maybeColor1', 'bg-maybeColor2']
    };

    const normalizedOption = option.toUpperCase();

    if (colorMapping[normalizedOption]) {
      return colorMapping[normalizedOption][index % 2];
    }

    // If no specific mapping, alternate colors
    const allColors = ['bg-yesColor', 'bg-noColor', 'bg-maybeColor1', 'bg-maybeColor2'];
    return allColors[index % allColors.length];
  };

  // Apply custom CSS variables if provided
  useEffect(() => {
    if (Object.keys(customColors).length === 0) return;

    const root = document.documentElement;

    if (customColors.yesColor) {
      root.style.setProperty('--wheel-yes-color', customColors.yesColor);
    }

    if (customColors.noColor) {
      root.style.setProperty('--wheel-no-color', customColors.noColor);
    }

    if (customColors.maybeColor1) {
      root.style.setProperty('--wheel-maybe-color-1', customColors.maybeColor1);
    }

    if (customColors.maybeColor2) {
      root.style.setProperty('--wheel-maybe-color-2', customColors.maybeColor2);
    }

    if (customColors.wheelCenter) {
      root.style.setProperty('--wheel-center-color', customColors.wheelCenter);
    }

    if (customColors.wheelArrow) {
      root.style.setProperty('--wheel-arrow-color', customColors.wheelArrow);
    }
  }, [customColors]);

  function spinWheel() {
    if (isSpinning) return;

    setIsSpinning(true);
    setSpinCompleted(false);

    const rotations = 5; // Number of full rotations
    const degreesPerOption = 360 / options.length;
    const randomOption = Math.floor(Math.random() * options.length);
    const randomDegreeOffset = Math.random() * degreesPerOption;

    // Calculate final position: rotations + position to land on the selected option
    const finalDegrees = rotations * 360 + randomOption * degreesPerOption + randomDegreeOffset;
    const newRotation = currentRotation + finalDegrees;

    setCurrentRotation(newRotation);

    // Determine which option is selected after spinning
    setTimeout(() => {
      // Calculate the position after spinning
      const normalizedDegrees = newRotation % 360;
      const selectedIndex = options.length - 1 - Math.floor(normalizedDegrees / degreesPerOption);
      const normalizedIndex = ((selectedIndex % options.length) + options.length) % options.length;

      // Set that the spin has completed (for confetti effect)
      setSpinCompleted(true);

      // Call the callback with the selected option
      onSpinComplete(options[normalizedIndex]);
    }, 4000); // Match this with the CSS transition duration
  }

  const handleSpinEnd = () => {
    setIsSpinning(false);
  };

  useEffect(() => {
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${currentRotation}deg)`;
    }
  }, [currentRotation]);

  // Create sectors for the wheel using SVG paths
  const createWheelSectors = () => {
    const sectors = [];
    const anglePerSector = 360 / options.length;

    for (let i = 0; i < options.length; i++) {
      const startAngle = i * anglePerSector;
      const endAngle = (i + 1) * anglePerSector;

      // Calculate the SVG arc path
      const startRad = ((startAngle - 90) * Math.PI) / 180;
      const endRad = ((endAngle - 90) * Math.PI) / 180;
      const x1 = 50 + 50 * Math.cos(startRad);
      const y1 = 50 + 50 * Math.sin(startRad);
      const x2 = 50 + 50 * Math.cos(endRad);
      const y2 = 50 + 50 * Math.sin(endRad);

      // For the text rotation
      const midAngle = (startAngle + endAngle) / 2;
      const textDistance = 35; // Distance from center (0-50)
      const textX = 50 + textDistance * Math.cos((midAngle - 90) * Math.PI / 180);
      const textY = 50 + textDistance * Math.sin((midAngle - 90) * Math.PI / 180);

      // SVG arc flag (determines which arc to draw)
      const largeArcFlag = anglePerSector > 180 ? 1 : 0;

      // Create the path for the sector
      const path = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

      sectors.push(
        <g key={i}>
          <path
            d={path}
            className={getOptionColor(options[i], i)}
            style={{
              stroke: 'white',
              strokeWidth: 1,
              filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.1))'
            }}
          />

          <text
            x={textX}
            y={textY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontWeight="bold"
            fontSize="5"
            style={{
              transform: `rotate(${midAngle}deg)`,
              transformOrigin: '50% 50%',
              transformBox: 'fill-box',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            } as any}
          >
            {options[i]}
          </text>
        </g>
      );
    }

    return sectors;
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Sound effects component */}
      <SoundEffects
        isSpinning={isSpinning}
        onSpinEnd={handleSpinEnd}
        enabled={soundEnabled}
      />

      <div className="wheel-container">
        {/* Arrow */}
        <div
          className="spinner-arrow"
          style={{
            zIndex: 20,
          }}
        />

        {/* Wheel with gesture binding */}
        <div
          ref={wheelRef}
          className="wheel"
          style={{
            transition: isSpinning
              ? 'transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
              : 'transform 0s ease',
            cursor: isSpinning ? 'default' : 'pointer',
          }}
          onClick={isSpinning ? undefined : spinWheel}
          {...bindGestures}
        >
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
            {createWheelSectors()}

            {/* Border circle */}
            <circle
              cx="50"
              cy="50"
              r="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>

          {/* Center circle */}
          <div className="wheel-center">SPIN</div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={`button-primary px-8 py-3 rounded-full text-lg font-bold shadow-md ${
            isSpinning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
          }`}
        >
          {isSpinning ? 'SPINNING...' : 'SPIN'}
        </button>
      </div>

      {/* Instructions for mobile gestures */}
      <div className="mt-4 text-center text-sm text-muted">
        <p className="md:hidden">Swipe or tap on the wheel to spin</p>
      </div>
    </div>
  );
};

export default Wheel;
