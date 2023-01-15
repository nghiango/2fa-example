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

type SortType = Omit<MfaEntry, 'timeout'| 'icon'>;

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
  sort(fileName: keyof SortType , acsending: boolean = false) {
    if (acsending) {
      this.mfas.sort((a, b) => a[fileName].toLowerCase().localeCompare(b[fileName].toLowerCase()));
    } else {
      this.mfas.sort((a, b) => b[fileName].toLowerCase().localeCompare(a[fileName].toLowerCase()));
    }
  }
}

export const mfaStore = new MfaStore();
