import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiEffectProps {
  active: boolean;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (active && canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true
      });

      // Fire multiple bursts of confetti
      const end = Date.now() + 1000;

      const colors = ['#4fb30a', '#e99e0a', '#3f00b5', '#be00ff'];

      (function frame() {
        myConfetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });

        myConfetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());

      // Fire a bigger burst after the small ones
      setTimeout(() => {
        myConfetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 },
          colors: colors
        });
      }, 250);
    }
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 100
      }}
    />
  );
};

export default ConfettiEffect;
