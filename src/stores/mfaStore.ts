import { Builder } from "builder-pattern";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
export type MfaEntry = {
  id: string;
  name: string;
  code: string;
  timeout: number;
};

const generateCode = (): string => {
  return `${Math.floor(100000 + Math.random() * 900000)}`;
};

const DEFAULT_TIMEOUT = 10;

export class MfaStore {
  mfas: MfaEntry[] = [];
  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
    this.add('test');
  }

  reset(id: string) {
    const foundMfa = this.mfas.find((mfa) => mfa.id === id);
    if (foundMfa) {
      foundMfa.code = `${generateCode()}`;
    }
  }

  add(name: string, timeout = DEFAULT_TIMEOUT) {
    const mfa = Builder<MfaEntry>()
      .id(uuidv4())
      .name(name)
      .code(generateCode())
      .timeout(timeout)
      .build();
      this.mfas.push(mfa);
  }
}

export const mfaStore = new MfaStore();
