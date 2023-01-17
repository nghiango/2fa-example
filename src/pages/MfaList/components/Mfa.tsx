import { observer } from "mobx-react-lite";
import { MfaEntry } from "@stores/mfaStore";
import { CountDownTimer } from "@common/CountdownTimer";
import './Mfa.scss';

interface MfaProps {
  mfa: MfaEntry;
}
export const Mfa = observer(({ mfa }: MfaProps) => {

  const formatCode = () => {
    return `${mfa.code.slice(0, 3)} ${mfa.code.slice(3)}`;
  }
  return (
    <div className="mfa">
      <img data-testid='icon' className="mfa__icon" src={require(`@assets/images/${mfa.icon}`)} alt='icon'/>
      <div className="mfa__information">
        <div data-testid='name' className="mfa__name">{mfa.name}</div>
        <div data-testid='code' className="mfa__code">{formatCode()}</div>
      </div>
      <CountDownTimer  existingTime={mfa.existingTime} totalTime={mfa.timeout} />
    </div>
  );
});
