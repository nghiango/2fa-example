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

  return (
    <div className="mfa">
      <img className="mfa__icon" src={require('@assets/images/epic-image.png')} alt='icon'/>
      <div className="mfa__information">
        <div className="mfa__name">{mfa.name}</div>
        <div className="mfa__code">{mfa.code}</div>
      </div>
      <CountDownTimer time={mfa.timeout} callback={renewCodeInternal(mfa.id)} />
    </div>
  );
});
