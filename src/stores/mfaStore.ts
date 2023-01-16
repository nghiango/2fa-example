import { Builder } from "builder-pattern";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
export type MfaEntry = {
  id: string;
  name: string;
  code: string;
  icon: string;
  timeout: number;
};

const generateCode = (): string => {
  return `${Math.floor(100000 + Math.random() * 900000)}`;
};

const DEFAULT_TIMEOUT = 60;

export class MfaStore {
  mfas: MfaEntry[] = [];
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
    this.add('test');
    this.add('test 1', 'epic-image.png');
  }

  renewCode(id: string) {
    const foundMfa = this.mfas.find((mfa) => mfa.id === id);
    if (foundMfa) {
      console.log('what happened');
      
      foundMfa.code = `${generateCode()}`;
    }
  }

  add(name: string, iconName = 'default-user.png', timeout = DEFAULT_TIMEOUT) {
    const mfa = Builder<MfaEntry>()
      .id(uuidv4())
      .name(name)
      .code(generateCode())
      .timeout(timeout)
      .icon(iconName)
      .build();
      this.mfas.push(mfa);
  }
  changeOrder(currentIndex: number, newIndex: number) {
    const mfa = this.mfas[currentIndex];
    this.mfas.splice(currentIndex, 1);
    this.mfas.splice(newIndex, 0, mfa);
  }
}

export const mfaStore = new MfaStore();
