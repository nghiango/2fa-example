import { useEffect, useState } from "react";
import "./CountdownTimer.scss";
interface CountDownTimerProps {
  time: number;
  callback?: () => void;
}
export const CountDownTimer = ({ time, callback }: CountDownTimerProps) => {
  const [timeout, setTimeout] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(timeout - 1);
    }, 1000);
    if (timeout === 0) {
      setTimeout(time);
      callback?.();
    }
    return () => clearInterval(interval);
  }, [callback, time, timeout]);

  return (
    <div className="countdown">
      <svg className="countdown--centered">
        <circle r="18" cx="20" cy="20"></circle>
      </svg>
      <div className="countdown__dash-array countdown--centered"></div>
      <span className="countdown__number">{timeout}</span>
    </div>
  );
};
