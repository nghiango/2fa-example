import "./CountdownTimer.scss";
import { observer } from "mobx-react-lite";
interface CountDownTimerProps {
  totalTime: number;
  existingTime: number;
  callback?: () => void;
}
export const CountDownTimer = observer(({ totalTime, existingTime, callback }: CountDownTimerProps) => {
  const circleRadius = 18;
  const MAXIMUM_DASHOFFSET = Math.PI * 2 * circleRadius;

  const getDashOffset = () => {
    const strokeDashoffsetPerDay = MAXIMUM_DASHOFFSET / totalTime;
    return MAXIMUM_DASHOFFSET - strokeDashoffsetPerDay * existingTime;
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
      <span className="countdown__number">{existingTime}</span>
    </div>
  );
});
