import { useEffect, useState } from "react";
import "../../styles/components/LoadingScreen.css";

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 100 : 0));

  useEffect(() => {
    if (prefersReducedMotion()) {
      onComplete();
      return undefined;
    }

    const start = performance.now();
    let frame;
    let completionTimer;

    const tick = (now) => {
      const value = Math.min(100, Math.round(((now - start) / 850) * 100));
      setProgress(value);

      if (value < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        completionTimer = window.setTimeout(onComplete, 180);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      if (completionTimer !== undefined) window.clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <div className="loader" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="loader__top">
        <span>LT / 2026</span>
        <span>{progress}%</span>
      </div>
      <div className="loader__mark" aria-hidden="true">
        3D<span>×</span>CODE
      </div>
      <div className="loader__bar" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
