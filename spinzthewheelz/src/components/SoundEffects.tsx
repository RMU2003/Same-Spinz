import { useEffect } from 'react';
import useSound from 'use-sound';

// Import sound files
import spinStartSound from '/sounds/spin-start.mp3';
import spinTickSound from '/sounds/spin-tick.mp3';
import spinEndSound from '/sounds/spin-end.mp3';

interface SoundEffectsProps {
  isSpinning: boolean;
  onSpinEnd: () => void;
  enabled: boolean;
}

const SoundEffects: React.FC<SoundEffectsProps> = ({ isSpinning, onSpinEnd, enabled }) => {
  const [playStart] = useSound(spinStartSound, { volume: 0.5 });
  const [playTick] = useSound(spinTickSound, { volume: 0.25 });
  const [playEnd] = useSound(spinEndSound, { volume: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    let tickInterval: number;

    if (isSpinning) {
      // Play start sound when spinning begins
      playStart();

      // Play tick sound at regular intervals while spinning
      tickInterval = window.setInterval(() => {
        playTick();
      }, 150);

      // Play end sound when spinning ends (after 4 seconds)
      const endTimeout = window.setTimeout(() => {
        playEnd();
        onSpinEnd();
      }, 4000);

      return () => {
        clearInterval(tickInterval);
        clearTimeout(endTimeout);
      };
    }
  }, [isSpinning, playStart, playTick, playEnd, onSpinEnd, enabled]);

  return null; // This component doesn't render anything
};

export default SoundEffects;
