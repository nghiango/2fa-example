import { observer } from "mobx-react-lite";
import { MfaEntry } from "../stores/mfaStore";
import { useEffect, useState } from "react";

interface MfaProps {
  mfa: MfaEntry;
	reset: (id: string) => void;
}
export const Mfa = observer(({ mfa, reset }: MfaProps) => {
  const [timeout, setTimeout] = useState(mfa.timeout);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(timeout - 1);
    }, 1000);
		if(timeout === 0) {
			setTimeout(mfa.timeout);
			reset(mfa.id);
		}
    return () => clearInterval(interval);
  }, [mfa.id, mfa.timeout, reset, timeout]);

  return (
    <div>
      <div>icon</div>
      <div>
        <div>{mfa.name}</div>
        <div>{mfa.code}</div>
      </div>
      <div>{timeout}</div>
    </div>
  );
});
