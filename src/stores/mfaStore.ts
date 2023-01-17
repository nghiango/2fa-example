import { Builder } from "builder-pattern";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
export type MfaEntry = {
  id: string;
  name: string;
  code: string;
  icon: string;
  timeout: number;
  existingTime: number;
};

const generateCode = (): string => {
  return `${Math.floor(100000 + Math.random() * 900000)}`;
};

const DEFAULT_TIMEOUT = 60;

export class MfaStore {
  mfas: MfaEntry[] = [];
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
    this.add('Epic Games', 'epic-image.png');
    this.add('Reddit', 'reddit.png');
    this.add('Binance', 'binance.png');
    this.add('Coinbase', 'coinbase.svg');
  }

  renewCode(id: string) {
    const foundMfa = this.mfas.find((mfa) => mfa.id === id);
    if (foundMfa) {
      foundMfa.code = `${generateCode()}`;
    }
  }

  reduceExistingTime(mfa: MfaEntry) {
    mfa.existingTime--;
    if (mfa.existingTime === 0) {
      mfa.existingTime = mfa.timeout;
      this.renewCode(mfa.id);
    }
  }

  initInterval(id: string) {
    const foundMfa = this.mfas.find((mfaData) => mfaData.id === id);
    if (foundMfa) {
      setInterval(() => {
        this.reduceExistingTime(foundMfa);
      }, 1000);
    }
  }

  add(name: string, iconName = 'default-user.png', timeout = DEFAULT_TIMEOUT) {
    const mfa = Builder<MfaEntry>()
      .id(uuidv4())
      .name(name)
      .code(generateCode())
      .timeout(timeout)
      .icon(iconName)
      .existingTime(timeout)
      .build();

      this.mfas.push(mfa);
      this.initInterval(mfa.id);
  }

  changeOrder(currentIndex: number, newIndex: number) {
    const mfa = this.mfas[currentIndex];
    this.mfas.splice(currentIndex, 1);
    this.mfas.splice(newIndex, 0, mfa);
  }
}

export const mfaStore = new MfaStore();
