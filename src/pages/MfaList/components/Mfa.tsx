import { observer } from "mobx-react-lite";
import { MfaEntry } from "@stores/mfaStore";
import { CountDownTimer } from "@common/CountdownTimer";
import './Mfa.scss';

interface MfaProps {
  mfa: MfaEntry;
  renewCode: (id: string) => void;
}
export const Mfa = observer(({ mfa, renewCode }: MfaProps) => {
  const renewCodeInternal = (id: string) => () => {
    renewCode(id);
  };

  const formatCode = () => {
    return `${mfa.code.slice(0, 3)} ${mfa.code.slice(3)}`;
  }
  return (
    <div className="mfa">
      <img className="mfa__icon" src={require(`@assets/images/${mfa.icon}`)} alt='icon'/>
      <div className="mfa__information">
        <div className="mfa__name">{mfa.name}</div>
        <div className="mfa__code">{formatCode()}</div>
      </div>
      <CountDownTimer time={mfa.timeout} callback={renewCodeInternal(mfa.id)} />
    </div>
  );
});
