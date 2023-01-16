import { useEffect, useState } from "react";
import "./CountdownTimer.scss";
interface CountDownTimerProps {
  time: number;
  callback?: () => void;
}
export const CountDownTimer = ({ time, callback }: CountDownTimerProps) => {
  const [timeout, setTimeout] = useState(time);
  const circleRadius = 18;
  const MAXIMUM_DASHOFFSET = Math.PI * 2 * circleRadius;

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

  const getDashOffset = () => {
    const strokeDashoffsetPerDay = MAXIMUM_DASHOFFSET / time;
    return MAXIMUM_DASHOFFSET - strokeDashoffsetPerDay * timeout;
  };

  return (
    <div className="countdown">
      <svg className="countdown--centered">
        <circle
          r={circleRadius}
          cx="20"
          cy="20"
          strokeDasharray={MAXIMUM_DASHOFFSET}
          strokeDashoffset={getDashOffset()}
        ></circle>
      </svg>
      <div className="countdown__dash-array countdown--centered"></div>
      <span className="countdown__number">{timeout}</span>
    </div>
  );
};
