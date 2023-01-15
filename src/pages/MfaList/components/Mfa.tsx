import { observer } from "mobx-react-lite";
import { MfaEntry } from "@stores/mfaStore";
import { CountDownTimer } from "@common/CountdownTimer";

interface MfaProps {
  mfa: MfaEntry;
  renewCode: (id: string) => void;
}
export const Mfa = observer(({ mfa, renewCode }: MfaProps) => {
  const renewCodeInternal = (id: string) => () => {
    console.log('what');
    
    renewCode(id);
  };

  return (
    <div>
      <div>icon</div>
      <div>
        <div>{mfa.name}</div>
        <div>{mfa.code}</div>
      </div>
      <CountDownTimer time={mfa.timeout} callback={renewCodeInternal(mfa.id)} />
    </div>
  );
});
