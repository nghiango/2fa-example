import { observer } from "mobx-react-lite";
import { Mfa } from "./components/Mfa";
import { useStore } from "@stores/index";
import './MfaList.scss';
import { useRef } from "react";
import { MfaEntry } from "@stores/mfaStore";

export const MfaList = observer(() => {
  const store = useStore();
  const draggedItemIndexRef = useRef<number>();
  const draggedItemRef = useRef<MfaEntry>();
  const onDragStart = (e: any, index: number) => {
    if (!store.mfaStore.mfas[index]) {
      return;
    }
    draggedItemIndexRef.current = index;
    draggedItemRef.current = store.mfaStore.mfas[index];
  };

  const onDragOver = (index: number) => {
    // if the item is dragged over itself, ignore
    if (draggedItemIndexRef.current === undefined || draggedItemRef.current === store.mfaStore.mfas[index]) {
      return;
    }

    store.mfaStore.changeOrder(draggedItemIndexRef.current, index);
    draggedItemIndexRef.current = index;
  };

  const onDragEnd = () => {
    draggedItemIndexRef.current = undefined;
  };
  return (
    <div className="mfa-list">
      {store.mfaStore.mfas.map((mfa, index) => (
        <div key={mfa.id} draggable={true} onDragOver={() => onDragOver(index)} onDragEnd={onDragEnd}
             onDragStart={e => onDragStart(e, index)} className="mfa-list__item">
          <Mfa mfa={mfa} />
        </div>))}
    </div>);
});