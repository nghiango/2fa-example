import { observer } from "mobx-react-lite"
import { Mfa } from "./components/Mfa";
import { useStore } from "@stores/index";
import './MfaList.scss';

export const MfaList = observer(() => {
    const store = useStore();
    return (
    <div className="mfa-list">
        {store.mfaStore.mfas.map((mfa) => <div className="mfa-list__item"><Mfa key={mfa.id} mfa={mfa} renewCode={store.mfaStore.renewCode} /></div>) }
    </div>)
})