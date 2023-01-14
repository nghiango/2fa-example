import { observer } from "mobx-react-lite"
import { useStore } from "../stores"
import { Mfa } from "./Mfa";

export const MfaList = observer(() => {
    const store = useStore();
    return (
    <div>
        {store.mfaStore.mfas.map((mfa) => <Mfa key={mfa.id} mfa={mfa} reset={store.mfaStore.reset} />) }
    </div>)
})