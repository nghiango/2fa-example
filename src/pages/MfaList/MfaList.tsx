import { observer } from "mobx-react-lite"
import { Mfa } from "./components/Mfa";
import { useStore } from "@stores/index";

export const MfaList = observer(() => {
    const store = useStore();
    return (
    <div>
        {store.mfaStore.mfas.map((mfa) => <Mfa key={mfa.id} mfa={mfa} renewCode={store.mfaStore.renewCode} />) }
    </div>)
})