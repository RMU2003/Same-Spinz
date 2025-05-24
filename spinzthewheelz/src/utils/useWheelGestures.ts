import { RefObject, useEffect } from 'react';
import { useGesture } from 'react-use-gesture';

interface UseWheelGesturesProps {
  wheelRef: RefObject<HTMLDivElement>;
  isSpinning: boolean;
  onSpin: () => void;
}

/**
 * Hook to add gesture support to the wheel
 */
export function useWheelGestures({ wheelRef, isSpinning, onSpin }: UseWheelGesturesProps) {
  useEffect(() => {
    if (!wheelRef.current) return;

    const wheelElement = wheelRef.current;

    // Add touch feedback
    const handleTouchStart = () => {
      if (!isSpinning) {
        wheelElement.style.transform = `${wheelElement.style.transform} scale(0.98)`;
        wheelElement.style.transition = 'transform 0.2s ease';
      }
    };

    const handleTouchEnd = () => {
      if (!isSpinning) {
        wheelElement.style.transform = wheelElement.style.transform.replace(' scale(0.98)', '');
        wheelElement.style.transition = 'transform 0.2s ease';

        // Return to original transition for spinning
        setTimeout(() => {
          if (!isSpinning) {
            wheelElement.style.transition = 'transform 0s ease';
          }
        }, 200);
      }
    };

    wheelElement.addEventListener('touchstart', handleTouchStart);
    wheelElement.addEventListener('touchend', handleTouchEnd);

    return () => {
      wheelElement.removeEventListener('touchstart', handleTouchStart);
      wheelElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [wheelRef, isSpinning]);

  // Set up gesture handlers for wheel interactions
  const bind = useGesture(
    {
      // Tap to spin
      onClick: () => {
        if (isSpinning) return;
        onSpin();
      },

      // Double tap to spin
      onDoubleClick: () => {
        if (isSpinning) return;
        onSpin();
      },

      // Handle drag/swipe
      onDrag: ({ movement, velocity }: any) => {
        if (isSpinning || !velocity || velocity[0] < 0.5) return;

        // Check for minimum movement
        const [x, y] = movement;
        const distance = Math.sqrt(x * x + y * y);

        // Only trigger spin on significant movement
        if (distance > 20) {
          onSpin();
        }
      }
    },
    {
      // Only enable when not spinning
      enabled: !isSpinning,
    }
  );

  return {
    bindGestures: bind(),
  };
}

export default useWheelGestures;
